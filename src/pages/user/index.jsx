import { Button, Input, View } from '@tarojs/components'
import styles from "./index.module.scss"
import Tabbar from '../../components/Tabbar';
import Navbar from '../../components/Navbar';
import Body from '../../components/Body';
import { ArrowSize6 } from '@nutui/icons-react-taro'
import GbAvatar from '../../components/GbAvatar';
import { Cell, Dialog } from '@nutui/nutui-react-taro';
import GbIcons from '../../components/GbIcons';
import Taro from '@tarojs/taro';
import utils from '../../common/utils';
import { useEffect, useState } from 'react';
import Page from '../../components/Page';
import { userDataList } from './data';

export default () => {
    const [userInfo, setUserInfo] = useState(null);
    const [dialogVisible, setDialogVisible] = useState(false);

    const [nickname, setNickname] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [avatarVersion, setAvatarVersion] = useState(0);
    const getUserInfo = async () => {
        if (!utils.getToken()) return;
        const resp = await utils.request({ api: '/api/user/info', showAlert: false });
        if (resp.status !== 0) return resp;
        setUserInfo(resp.model);
        utils.setToken(resp.model.token);
        return resp;
    }
    useEffect(() => {
        getUserInfo();
    }, [])
    const handleClickUserBlock = async () => {
        if (utils.getToken()) {
            setDialogVisible(true);
            return;
        }
        Taro.showLoading({ title: '加载中...', mask: true });
        try {
            // 调用 wx.login 获取 code
            const { code } = await Taro.login();

            if (code) {
                // 将 code 发送到后端，获取用户的 session 信息
                const resp = await utils.request({
                    api: '/api/user/login',
                    data: { code },
                });
                if (resp.status !== 0) return;
                utils.setToken(resp.model.token);
                const user_resp = await getUserInfo();
                if (user_resp.status !== 0) {
                    setDialogVisible(true);
                }
            }
        } catch (error) {
            Taro.showToast({
                title: '登录错误',
                icon: 'none',
            });
        }
        Taro.hideLoading();
    };
    const onConfirm = async () => {
        if (!avatarUrl && !userInfo?.avatarUrl) {
            Taro.showToast({
                title: '请上传头像',
                icon: 'none',
            });
            return
        }
        if (!nickname && !userInfo?.nickname) {
            Taro.showToast({
                title: '请输入昵称',
                icon: 'none',
            });
            return
        }
        Taro.showLoading({ title: userInfo?.token ? '修改中...' : '登录中...', mask: true });
        let avatarUploadUrl = null
        if (avatarUrl) {
            await Taro.uploadFile({
                url: `${YS_API_URL}/api/user/avatarUpload`,
                filePath: avatarUrl,
                name: 'file',
                header: {
                    'Content-Type': 'multipart/form-data',
                    token: utils.getToken(),
                },
                success: function (res) {
                    avatarUploadUrl = res.data
                    setAvatarVersion(avatarVersion + 1)
                }
            })
        }
        const resp = await utils.request({
            api: '/api/user/save',
            data: {
                ...(nickname && { nickname }),
                ...(avatarUploadUrl && { avatarUrl: avatarUploadUrl })
            },
        });
        Taro.hideLoading();
        if (resp.status !== 0) return;
        setUserInfo(resp.model)
        Taro.showToast({
            title: userInfo?.token ? '修改成功' : '登录成功',
            icon: 'none',
        });
        utils.setToken(resp.model.token)
        setDialogVisible(false)
    }
    return (
        <Page className={styles.root}>
            <Dialog
                title="头像昵称获取"
                visible={dialogVisible}
                closeOnOverlayClick={false}
                confirmText={userInfo?.token ? '修改' : '登录'}
                cancelText="取消"
                onConfirm={onConfirm}
                onCancel={() => {
                    !userInfo?.token && utils.setToken(null)
                    setDialogVisible(false)
                }}
            >
                <View className={styles.dialogContent}>
                    <Button openType='chooseAvatar' onChooseAvatar={(e) => setAvatarUrl(e.detail.avatarUrl)} className={styles.avatar}>
                        <GbAvatar src={avatarUrl || (userInfo?.avatarUrl ? YS_API_URL + '/' + userInfo?.avatarUrl + '?v=' + avatarVersion : null)} />
                    </Button>
                    <Input type='nickname' defaultValue={nickname || userInfo?.nickname} onInput={(e) => setNickname(e.detail.value)} placeholder='请输入昵称' className={styles.nickname} />
                </View>
            </Dialog>
            <Navbar title="用户中心" ></Navbar>
            <Body hasTabbar>
                <View className={styles.userInfo} onClick={handleClickUserBlock}>
                    <GbAvatar src={userInfo?.avatarUrl ? YS_API_URL + '/' + userInfo?.avatarUrl + '?v=' + avatarVersion : null} />
                    <View className={styles.name}>{userInfo?.nickname || '微信登录授权'}<ArrowSize6 width="var(--nutui-font-text)" /></View>
                </View>
                <View className={styles.items}>
                    <Cell.Group title="数据">
                        {
                            userDataList.map((item, index) => {
                                const { label, field } = item
                                return (
                                    <Cell
                                        key={index}
                                        title={
                                            <View className={styles.title}>
                                                {label}
                                            </View>
                                        }
                                        align="center"
                                        extra={
                                            <View className={styles.extra}>
                                                {userInfo?.[field] || 0}
                                            </View>
                                        }
                                    />
                                )
                            })
                        }
                    </Cell.Group>
                </View>
                <View className={styles.items}>
                    <Cell.Group title="联系">
                        <Cell
                            title={
                                <View className={styles.title}>
                                    <GbIcons name="weixin" color="var(--app-primary-color)" />
                                    微信客服
                                </View>
                            }
                            align="center"
                            extra={
                                <View className={styles.extra}>
                                    ys113664
                                    <GbIcons name="arrow-right" />
                                </View>
                            }
                        />
                    </Cell.Group>
                </View>
            </Body>
            <Tabbar value={2} />
        </Page>
    );
}