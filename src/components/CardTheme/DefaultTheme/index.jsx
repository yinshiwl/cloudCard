import { Text, View } from "@tarojs/components";
import styles from "./index.module.scss";
import { Avatar } from "@nutui/nutui-react-taro";
import { Phone, ArrowRight, Mail, Dongdong, Internation } from '@nutui/icons-react-taro';

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
                    <Row icon={<Phone className={styles.icon} />} title="手机号" extra="打电话" />
                    <Row icon={<Dongdong className={styles.icon} />} title="微信号" extra="加微信" />
                    <Row icon={<Mail className={styles.icon} />} title="邮箱" extra="复制" />
                    <Row icon={<Internation className={styles.icon} />} title="地址" extra="地图" />
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
                {icon}<Text>{title}</Text>
            </View>
            <View className={styles.right}>
                <Text>{extra}</Text><ArrowRight className={styles.icon} />
            </View>
        </View>
    );
}