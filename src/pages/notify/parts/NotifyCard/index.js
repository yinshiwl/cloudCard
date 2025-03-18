import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import utils from "../../../../common/utils";
import { ArrowSize6 } from '@nutui/icons-react-taro'
import { Divider } from "@nutui/nutui-react-taro";

const NotifyCard = ({ title, time }) => {
    return (
        <View className={styles.root}>
            <View className={styles.title}>
                {title}
            </View>
            <View className={styles.time}>
                {utils.formatTime(time)}
            </View>
            <Divider />
            <View className={styles.button}>
                <View>立即查看</View>
                <ArrowSize6 size="var(--nutui-font-text-small)" />
            </View>
        </View>
    );
}

export default NotifyCard;