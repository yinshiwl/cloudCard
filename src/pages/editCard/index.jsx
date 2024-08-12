import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import utils from "../../utils";
import { Button, Form, Input, TextArea, Uploader } from "@nutui/nutui-react-taro";
import GbButton from "../../components/GbButton";

export default () => {
    const [title, setTitle] = useState('')
    useEffect(() => {
        const eventChannel = utils.getOpenerEventChannel();
        eventChannel.on('editCardPage', (data) => {
            setTitle(data.data.type === 'CREATE' ? '创建名片' : '编辑名片')
        })
    }, [])

    const submitFailed = (error) => {
        Taro.showToast({ title: JSON.stringify(error), icon: 'error' })
    }

    const submitSucceed = (values) => {
        Taro.showToast({ title: JSON.stringify(values), icon: 'success' })
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
            <Navbar title={title} back background="var(--app-primary-color)" color="#fff" titleCenter ></Navbar>
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
                            rules={[{ required: true, message: '请上传个人头像或企业LOGO' }]}
                        >
                            <Uploader />
                        </Form.Item>
                        <Form.Item
                            label="姓名"
                            name="username"
                            rules={[{ required: true, message: '请输入姓名' }]}
                        >
                            <Input placeholder="请输入姓名" clearable type="text" />
                        </Form.Item>
                        <Form.Item
                            label="职位"
                            name="position"
                            rules={[
                                { required: true, message: '请输入在公司中的职位' },
                            ]}
                        >
                            <Input placeholder="在公司中的职位" clearable type="text" />
                        </Form.Item>
                        <Form.Item
                            label="手机号"
                            name="phone"
                            rules={[{ required: true, message: '请输入手机号' }]}
                        >
                            <Input placeholder="请输入手机号" clearable type="tel" />
                        </Form.Item>
                        <Form.Item
                            label="邮箱"
                            name="email"
                        >
                            <Input placeholder="请输入邮箱" clearable type="email" />
                        </Form.Item>
                        <Form.Item
                            label="微信号"
                            name="wechat"
                        >
                            <Input placeholder="请输入微信号" clearable type="text" />
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
                            label="描述"
                            name="description"
                        >
                            <TextArea placeholder="简单的介绍下自己吧" rows={3} showCount />
                        </Form.Item>
                        <Form.Item
                            label="相册"
                            name="album"
                        >
                            <Uploader multiple maxCount="5" />
                        </Form.Item>
                    </Form>
                </View>
            </Body>
        </View>
    );
}