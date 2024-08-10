import { View } from '@tarojs/components'
import styles from "./index.module.scss"
import Tabbar from '../../components/Tabbar';
import Navbar from '../../components/Navbar';
import Body from '../../components/Body';
import { Avatar } from '@nutui/nutui-react-taro';
import { ArrowSize6 } from '@nutui/icons-react-taro'

export default () => {
    return (
        <View>
            <Navbar title="用户中心" ></Navbar>
            <Body>
                <View className={styles.userInfo}>
                    <Avatar size="large" />
                    <View className={styles.name}>登录/注册<ArrowSize6 width="var(--nutui-font-text)" /></View>
                </View>
            </Body>
            <Tabbar value={4} />
        </View>
    );
}