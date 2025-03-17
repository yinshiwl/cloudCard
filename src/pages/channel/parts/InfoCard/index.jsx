import { Text, View } from "@tarojs/components";
import styles from "./index.module.scss";
import classNames from "classnames";

const InfoCard = () => {
    return (
        <View className={styles.root}>
            <View className={classNames(styles.card, styles.one)}>
                <Text className={styles.text}>0</Text>
                <Text className={styles.text}>累计发展子渠道</Text>
            </View>
            <View className={classNames(styles.card, styles.two)}>
                <Text className={styles.text}>推广邀请码</Text>
                <Text className={styles.text}>(点击分享)</Text>
            </View>
            <View className={classNames(styles.card, styles.three)}>
                <Text className={styles.text}>name</Text>
                <Text className={styles.text}>我的渠道名称</Text>
            </View>
        </View>
    )
}

export default InfoCard;