import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import { useEffect, useMemo, useState } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import utils from "../../common/utils";
import { Dialog, Form, Input, TextArea } from "@nutui/nutui-react-taro";
import GbButton from "../../components/GbButton";
import GbIcons from "../../components/GbIcons";
import Page from "../../components/Page";
import GbImagePreview from "../../components/GbImagePreview";
import useCardData from "../../common/hooks/useCardData";

export default () => {
    const [form] = Form.useForm();
    const router = useRouter();
    const { id } = router.params || {}
    const { cardInfo } = useCardData({ id })
    const { name, position, company, description, phone, weChat, address, email, avatar, qrCode, album } = cardInfo || {}
    const [qrCodeList, setQrCodeList] = useState(qrCode ? [qrCode] : []);
    const [avatarList, setAvatarList] = useState(avatar ? [avatar] : []);
    const [albumList, setAlbumList] = useState(album || []);
    const title = useMemo(() => {
        return id ? '编辑名片' : '创建名片'
    }, [id])

    const onQrCodeChange = (list) => {
        form.setFieldsValue({ qrCode: list?.length > 0 ? list[0] : '' })
        setQrCodeList(list);
    }

    const onAvatarChange = (list) => {
        form.setFieldsValue({ avatar: list?.length > 0 ? list[0] : '' })
        setAvatarList(list);
    }

    const onAlbumChange = (list) => {
        form.setFieldsValue({ album: list || [] })
        setAlbumList(list);
    }

    useEffect(() => {
        if (!name) return
        form.setFieldsValue({ name })
    }, [form, name])

    const submitFailed = (error) => {
        console.error(error)
        Taro.showToast({ title: '保存失败', icon: 'error' })
    }

    const submitSucceed = async (values) => {
        Taro.showLoading({ title: '保存中...' })
        const resp = await utils.request({
            api: '/api/card/save',
            data: values
        })
        Taro.hideLoading();
        if (resp.status !== 0) return;
        Dialog.open('dialog', {
            title: '保存成功',
            confirmText: '查看名片',
            cancelText: '返回上页',
            onConfirm: () => {
                Taro.redirectTo({ url: '/pages/editCard/index?id=' + resp.model.id })
            },
            onCancel: () => {
                Taro.navigateBack({
                    delta: 1
                })
            },
        })
    }

    return (
        <Page>
            <Navbar title={title} back background="var(--app-primary-color)" titleCenter ></Navbar>
            <Body>
                <View className={styles.form}>
                    <Form
                        form={form}
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
                                <GbButton style={{ width: '100%' }} nativeType="submit" >
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
                            <GbImagePreview imageList={avatarList} setImageList={onAvatarChange} columns={2} gap="20rpx" uploadLength={1} uploadIcon={<GbIcons name="image" size="large" />} />
                        </Form.Item>
                        <Form.Item
                            label="姓名"
                            name="name"
                            initialValue={name}
                            rules={[{ required: true, message: '请输入姓名' }]}
                        >
                            <Input placeholder="请输入姓名" clearable type="text" />
                        </Form.Item>
                        <Form.Item
                            label="职位"
                            name="position"
                            initialValue={position}
                        >
                            <Input placeholder="请输入在公司中的职位" clearable type="text" />
                        </Form.Item>
                        <Form.Item
                            label="公司"
                            name="company"
                            initialValue={company}
                        >
                            <Input placeholder="请输入公司名称全称" clearable type="text" />
                        </Form.Item>
                        <Form.Item
                            label="地址"
                            name="address"
                            initialValue={address}
                        >
                            <Input placeholder="请输入公司详细地址" clearable type="text" />
                        </Form.Item>
                        <Form.Item
                            label="手机"
                            name="phone"
                            initialValue={phone}
                        >
                            <Input placeholder="请输入手机号" clearable type="tel" />
                        </Form.Item>
                        <Form.Item
                            label="微信"
                            name="weChat"
                            initialValue={weChat}
                        >
                            <View className={styles.weChat}>
                                <Input placeholder="请输入微信号" clearable type="text" onChange={(v) => {
                                    form.setFieldsValue({ 'weChat': v })
                                }} />
                                <GbImagePreview imageList={qrCodeList} setImageList={onQrCodeChange} columns={2} gap="20rpx" uploadLength={1} uploadLabel="上传二维码" uploadIcon={<GbIcons name="qrcode" size="large" />} />
                            </View>
                        </Form.Item>
                        <Form.Item
                            label="邮箱"
                            name="email"
                            initialValue={email}
                        >
                            <Input placeholder="请输入邮箱" clearable type="email" />
                        </Form.Item>
                        <Form.Item
                            label="描述"
                            name="description"
                            initialValue={description}
                        >
                            <TextArea placeholder="简单的介绍下自己吧" rows={3} showCount />
                        </Form.Item>
                        <Form.Item
                            label="相册"
                            name="album"
                        >
                            <GbImagePreview imageList={albumList} setImageList={onAlbumChange} columns={2} gap="20rpx" uploadLength={5} uploadIcon={<GbIcons name="images" size="large" />} />
                        </Form.Item>
                    </Form>
                </View>
            </Body>
        </Page>
    );
}