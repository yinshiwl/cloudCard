import { View } from '@tarojs/components'
import styles from "./index.module.scss"
import Tabbar from '../../components/Tabbar';

export default () => {
    return (
        <View className={styles.root}>
            用户
            <Tabbar value={4} />
        </View>
    );
}