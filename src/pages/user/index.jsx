import { Text, View } from '@tarojs/components'
import styles from "./index.module.scss"
import Tabbar from '../../components/Tabbar';
import Navbar from '../../components/Navbar';
import Body from '../../components/Body';
import { ArrowSize6, Headphones } from '@nutui/icons-react-taro'
import GbAvatar from '../../components/GbAvatar';
import { Cell } from '@nutui/nutui-react-taro';
import GbIcons from '../../components/GbIcons';

export default () => {
    return (
        <View>
            <Navbar title="用户中心" ></Navbar>
            <Body hasTabbar>
                <View className={styles.userInfo}>
                    <GbAvatar />
                    <View className={styles.name}>登录/注册<ArrowSize6 width="var(--nutui-font-text)" /></View>
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