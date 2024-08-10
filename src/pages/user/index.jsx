import { View } from '@tarojs/components'
import styles from "./index.module.scss"
import Tabbar from '../../components/Tabbar';
import Navbar from '../../components/Navbar';
import Body from '../../components/Body';

export default () => {
    return (
        <View>
            <Navbar title="用户中心" ></Navbar>
            <Body>
                用户中心
            </Body>
            <Tabbar value={4} />
        </View>
    );
}