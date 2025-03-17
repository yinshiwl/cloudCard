import { Text, View } from "@tarojs/components";
import styles from "./index.module.scss";
import { ToPay } from '@nutui/icons-react-taro'

const TotalData = () => {
    const list = [
        { label: '子渠道收益', value: 0 },
        { label: '我获得的收益', value: 0 },
        { label: '推广奖励金', value: 0 },
    ]
    return (
        <View className={styles.root}>
            <Text className={styles.title}>合计</Text>
            <View className={styles.items}>
                {
                    list.map((item, index) => {
                        return (
                            <View className={styles.item} key={index}>
                                <ToPay className={styles.icon} />
                                <Text className={styles.label}>{item.label}:</Text>
                                <Text className={styles.value}>{item.value}</Text>
                            </View>
                        );
                    })
                }
            </View>
        </View>
    )
}

export default TotalData;