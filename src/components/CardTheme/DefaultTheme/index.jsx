import { Text, View } from "@tarojs/components";
import styles from "./index.module.scss";
import { Avatar } from "@nutui/nutui-react-taro";
import GbIcons from "../../GbIcons";

export default () => {
    return (
        <View className={styles.root}>
            <View className={styles.cardInfo}>
                <View className={styles.avatar_name}>
                    <View className={styles.avatar}>
                        <Avatar size="large" />
                    </View>
                    <View className={styles.name}>
                        <Text className={styles.nameText}>姓名</Text>
                        <Text className={styles.position}>职位</Text>
                    </View>
                </View>
                <View className={styles.company}>
                    公司
                </View>
                <View className={styles.moreInfo}>
                    <Row icon="phone" title="手机号" extra="打电话" />
                    <Row icon="" title="微信号" extra="加微信" />
                    <Row icon="" title="邮箱" extra="复制" />
                    <Row icon="" title="地址" extra="地图" />
                </View>
            </View>
            <View className={styles.otherInfo}>
                test222
            </View>
        </View>
    );
}


function Row({ icon, title, extra }) {
    return (
        <View className={styles.row}>
            <View className={styles.left}>
                <GbIcons name={icon} size="small" color="primary" />
                <Text>{title}</Text>
            </View>
            <View className={styles.right}>
                <Text>{extra}</Text>
                <GbIcons name="arrow" size="small" color="primary" />
            </View>
        </View>
    );
}