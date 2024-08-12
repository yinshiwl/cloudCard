import { Text, View } from "@tarojs/components";
import styles from "./index.module.scss"
import Taro from "@tarojs/taro";
import GbButton from "../GbButton";

export default ({ type = 'SELF' }) => {
    return (
        <View className={styles.root}>
            <View className={styles.cardItem}>
                <Text>名片</Text>
            </View>
            <View className={styles.cardItem}>
                <Text>名片</Text>
            </View>
            {type === 'SELF' && <GbButton onClick={() => {
                Taro.navigateTo({
                    url: '/pages/editCard/index',
                    success: function (res) {
                        res.eventChannel.emit('editCardPage', { data: { type: 'CREATE' } })
                    }
                })
            }}>
                添加名片
            </GbButton>}
        </View>
    );
}