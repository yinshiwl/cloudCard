import { Text, View } from '@tarojs/components'
import styles from "./index.module.scss"
import Tabbar from '../../components/Tabbar';
import Navbar from '../../components/Navbar';
import Body from '../../components/Body';
import { Avatar } from '@nutui/nutui-react-taro';
import { ArrowSize6, Headphones } from '@nutui/icons-react-taro'

export default () => {
    return (
        <View>
            <Navbar title="用户中心" ></Navbar>
            <Body hasTabbar>
                <View className={styles.userInfo}>
                    <Avatar size="large" />
                    <View className={styles.name}>登录/注册<ArrowSize6 width="var(--nutui-font-text)" /></View>
                </View>
                <View className={styles.userData}>
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
                </View>
                <View className={styles.more}>
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
                </View>
            </Body>
            <Tabbar value={2} />
        </View>
    );
}