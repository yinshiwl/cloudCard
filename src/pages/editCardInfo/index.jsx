import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import utils from "../../utils";
import { Form, Input, TextArea, Uploader } from "@nutui/nutui-react-taro";
import GbButton from "../../components/GbButton";
import GbIcons from "../../components/GbIcons";

export default () => {
    const [title, setTitle] = useState('')
    useEffect(() => {
        const eventChannel = utils.getOpenerEventChannel();
        eventChannel.on('editCardInfoPage', (data) => {
            setTitle(data.data.type === 'CREATE' ? '创建名片' : '编辑名片')
        })
    }, [])

    const submitFailed = (error) => {
        Taro.showToast({ title: JSON.stringify(error), icon: 'error' })
    }

    const submitSucceed = async (values) => {
        console.log(values)
        const resp = await utils.request({
            api: '/api/card/create',
            data: values,
            success: (v) => {
                console.log(v)
            },
            fail: (v) => {
                console.log(v)
            }
        })
        console.log(resp)
    }

    // 函数校验
    const customValidator = (
        rule,
        value
    ) => {
        return /^\d+$/.test(value)
    }

    const valueRangeValidator = (
        rule,
        value
    ) => {
        return /^(\d{1,2}|1\d{2}|200)$/.test(value)
    }
    return (
        <View>
            <Navbar title={title} back background="var(--app-primary-color)" titleCenter ></Navbar>
            <Body>
                <View className={styles.form}>
                    <Form
                        divider
                        labelPosition="left"
                        onFinish={(values) => submitSucceed(values)}
                        onFinishFailed={(values, errors) => submitFailed(errors)}
                        footer={
                            <View
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '100%',
                                }}
                            >
                                <GbButton style={{ width: '100%' }} nativeType="submit">
                                    保存名片
                                </GbButton>
                            </View>
                        }
                    >
                        <Form.Item
                            label="头像/LOGO"
                            name="avatar"
                            rules={[{ required: false, message: '请上传个人头像或企业LOGO' }]}
                        >
                            <View>
                                <Uploader uploadIcon={<GbIcons name="image" size="large" />} />
                            </View>
                        </Form.Item>
                        <Form.Item
                            label="姓名"
                            name="name"
                            rules={[{ required: true, message: '请输入姓名' }]}
                        >
                            <Input placeholder="请输入姓名" clearable type="text" />
                        </Form.Item>
                        <Form.Item
                            label="职位"
                            name="position"
                        >
                            <Input placeholder="请输入在公司中的职位" clearable type="text" />
                        </Form.Item>
                        <Form.Item
                            label="公司"
                            name="company"
                        >
                            <Input placeholder="请输入公司名称全称" clearable type="text" />
                        </Form.Item>
                        <Form.Item
                            label="地址"
                            name="address"
                        >
                            <Input placeholder="请输入公司详细地址" clearable type="text" />
                        </Form.Item>
                        <Form.Item
                            label="手机"
                            name="phone"
                        >
                            <Input placeholder="请输入手机号" clearable type="tel" />
                        </Form.Item>
                        <Form.Item
                            label="微信"
                            name="weChat"
                        >
                            <View>
                                <Input placeholder="请输入微信号" clearable type="text" />
                                <Uploader style={{ marginTop: '30rpx' }} uploadLabel="上传二维码" uploadIcon={<GbIcons name="qrcode" size="large" />} />
                            </View>
                        </Form.Item>
                        <Form.Item
                            label="邮箱"
                            name="email"
                        >
                            <Input placeholder="请输入邮箱" clearable type="email" />
                        </Form.Item>
                        <Form.Item
                            label="描述"
                            name="description"
                        >
                            <TextArea placeholder="简单的介绍下自己吧" rows={3} showCount />
                        </Form.Item>
                        <Form.Item
                            label="相册"
                            name="album"
                        >
                            <Uploader multiple maxCount="5" uploadIcon={<GbIcons name="images" size="large" />} />
                        </Form.Item>
                    </Form>
                </View>
            </Body>
        </View>
    );
}