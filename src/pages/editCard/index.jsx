import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import utils from "../../utils";
import { Button, Form, Input } from "@nutui/nutui-react-taro";

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
            <Navbar title={title} back background="var(--app-primary-color)" color="#fff" ></Navbar>
            <Body>
                <Form
                    divider
                    labelPosition="left"
                    onFinish={(values) => submitSucceed(values)}
                    onFinishFailed={(values, errors) => submitFailed(errors)}
                    footer={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                width: '100%',
                            }}
                        >
                            <Button nativeType="submit" type="primary">
                                提交
                            </Button>
                            <Button nativeType="reset" style={{ marginLeft: '20px' }}>
                                重置
                            </Button>
                        </div>
                    }
                >
                    <Form.Item
                        label="字段A"
                        name="username"
                        rules={[{ required: true, message: '请输入字段A' }]}
                    >
                        <Input placeholder="请输入字段A" type="text" />
                    </Form.Item>
                    <Form.Item
                        label="字段B"
                        name="age"
                        rules={[
                            { required: true, message: '请输入字段B' },
                            { validator: customValidator, message: '必须输入数字' },
                            { validator: valueRangeValidator, message: '必须输入0-200区间' },
                        ]}
                    >
                        <Input placeholder="请输入字段B，必须数字且0-200区间" type="text" />
                    </Form.Item>
                    <Form.Item
                        label="字段C"
                        name="tel"
                        rules={[{ max: 13, message: '请输入字段C' }]}
                    >
                        <Input placeholder="字段C格式不正确" type="number" />
                    </Form.Item>
                    <Form.Item
                        label="字段D"
                        name="address"
                        rules={[{ required: true, message: '请输入字段D' }]}
                    >
                        <Input placeholder="请输入字段D" type="text" />
                    </Form.Item>
                </Form>
            </Body>
        </View>
    );
}