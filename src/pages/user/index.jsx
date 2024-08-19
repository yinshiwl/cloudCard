import { Button, Input, Text, View } from '@tarojs/components'
import styles from "./index.module.scss"
import Tabbar from '../../components/Tabbar';
import Navbar from '../../components/Navbar';
import Body from '../../components/Body';
import { ArrowSize6, Headphones } from '@nutui/icons-react-taro'
import GbAvatar from '../../components/GbAvatar';
import { Cell, Dialog } from '@nutui/nutui-react-taro';
import GbIcons from '../../components/GbIcons';
import Taro from '@tarojs/taro';
import utils from '../../utils';
import { useEffect, useRef, useState } from 'react';

export default () => {
    const [userInfo, setUserInfo] = useState(null);
    const [token, setToken] = useState(null);
    const [dialogVisible, setDialogVisible] = useState(false);
    const nicknameRef = useRef(null);
    const [avatarUrl, setAvatarUrl] = useState(null);
    const getUserInfo = async () => {
        const token = Taro.getStorageSync('token');
        if (!token) return;
        const resp = await utils.request({
            api: '/api/user/info',
            data: { token },
        });
        const { avatarUrl, nickname } = resp
        setUserInfo({
            avatarUrl: avatarUrl,
            nickname: nickname,
            token: token
        });
        Taro.setStorageSync('token', token)
    }
    useEffect(() => {
        getUserInfo();
    }, [])
    const handleLogin = async () => {
        if (Taro.getStorageSync('token')) {
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
                    api: '/api/auth/login',
                    data: { code },
                });
                if (resp && resp.token) {
                    setToken(resp.token);
                    setDialogVisible(true);
                } else {
                    Taro.showToast({
                        title: '登录失败，请重试',
                        icon: 'none',
                    });
                }
            }
        } catch (error) {
            Taro.showToast({
                title: '登录错误',
                icon: 'none',
            });
            console.error('登录失败:', error);
        }
        Taro.hideLoading();
    };
    return (
        <View className={styles.root}>
            <Dialog
                title="头像昵称获取"
                visible={dialogVisible}
                closeOnOverlayClick={false}
                confirmText={userInfo?.token ? '修改' : '登录'}
                cancelText="取消"
                onConfirm={async () => {
                    Taro.showLoading({ title: userInfo?.token ? '修改中...' : '登录中...', mask: true });
                    let avatarUploadUrl = null
                    if (avatarUrl) {
                        const uploadTask = await Taro.uploadFile({
                            url: `${YS_API_URL}/api/user/avatarUpload`,
                            filePath: avatarUrl,
                            name: 'file',
                            header: {
                                'Content-Type': 'multipart/form-data',
                                token: token || userInfo?.token,
                            },
                            success: function (res) {
                                const avatarUrl = res.data
                                console.log(res)
                                avatarUploadUrl = avatarUrl
                            }
                        })
                    }
                    const resp = await utils.request({
                        api: '/api/user/save',
                        data: {
                            token: token || userInfo?.token,
                            nickname: nicknameRef.current.value || userInfo?.nickname,
                            avatarUrl: avatarUploadUrl || userInfo?.avatarUrl
                        },
                    });
                    Taro.hideLoading();
                    if (resp) {
                        const { avatarUrl, nickname, token } = resp
                        setUserInfo({
                            avatarUrl: avatarUrl,
                            nickname: nickname,
                            token: token
                        })
                        Taro.showToast({
                            title: userInfo?.token ? '修改成功' : '登录成功',
                            icon: 'none',
                        });
                        Taro.setStorageSync('token', token)
                        setDialogVisible(false)
                    }
                }}
                onCancel={() => setDialogVisible(false)}
            >
                <View className={styles.dialogContent}>
                    <Button openType='chooseAvatar' onChooseAvatar={(e) => setAvatarUrl(e.detail.avatarUrl)} className={styles.avatar}>
                        <GbAvatar src={userInfo?.avatarUrl ? YS_API_URL + '/' + userInfo?.avatarUrl : avatarUrl} />
                    </Button>
                    <Input type='nickname' ref={nicknameRef} defaultValue={userInfo?.nickname} placeholder='请输入昵称' className={styles.nickname} />
                </View>
            </Dialog>
            <Navbar title="用户中心" ></Navbar>
            <Body hasTabbar>
                <View className={styles.userInfo} onClick={handleLogin}>
                    <GbAvatar src={userInfo?.avatarUrl ? YS_API_URL + '/' + userInfo?.avatarUrl : null} />
                    <View className={styles.name}>{userInfo?.nickname || '微信登录授权'}<ArrowSize6 width="var(--nutui-font-text)" /></View>
                </View>
                {/* <View className={styles.userData}>
                    <View className={styles.item}>
                        <Text>0</Text>
                        <Text>关注</Text>
                    </View>
                    <View className={styles.item}>
                        <Text>0</Text>
                        <Text>关注</Text>
                    </View>
                    <View className={styles.item}>
                        <Text>0</Text>
                        <Text>关注</Text>
                    </View>
                    <View className={styles.item}>
                        <Text>0</Text>
                        <Text>关注</Text>
                    </View>
                    <View className={styles.item}>
                        <Text>0</Text>
                        <Text>关注</Text>
                    </View>
                </View> */}
                {/* <View className={styles.more}>
                    <View className={styles.item}>
                        <Headphones />
                        <Text>客户服务</Text>
                    </View>
                    <View className={styles.item}>
                        <Headphones />
                        <Text>客户服务</Text>
                    </View>
                    <View className={styles.item}>
                        <Headphones />
                        <Text>客户服务</Text>
                    </View>
                    <View className={styles.item}>
                        <Headphones />
                        <Text>客户服务</Text>
                    </View>
                    <View className={styles.item}>
                        <Headphones />
                        <Text>客户服务</Text>
                    </View>
                    <View className={styles.item}>
                        <Headphones />
                        <Text>客户服务</Text>
                    </View>
                    <View className={styles.item}>
                        <Headphones />
                        <Text>客户服务</Text>
                    </View>
                    <View className={styles.item}>
                        <Headphones />
                        <Text>客户服务</Text>
                    </View>
                    <View className={styles.item}>
                        <Headphones />
                        <Text>客户服务</Text>
                    </View>
                    <View className={styles.item}>
                        <Headphones />
                        <Text>客户服务</Text>
                    </View>
                </View> */}
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
        </View>
    );
}