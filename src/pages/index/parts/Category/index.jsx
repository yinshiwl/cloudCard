import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import GbIcons from "../../../../components/GbIcons";
import Taro from "@tarojs/taro";

const Category = () => {
    const list = [
        {
            name: "动作",
            icon: "empty",
            path: ""
        },
        {
            name: "休闲",
            icon: "empty",
            path: ""
        },
        {
            name: "角色",
            icon: "empty",
            path: ""
        },
        {
            name: "竞技",
            icon: "empty",
            path: ""
        },
        {
            name: "更多",
            icon: "empty",
            path: ""
        },
    ];
    return (
        <View className={styles.root}>
            <View className={styles.category}>
                {list.map((item, index) => (
                    <View className={styles.item} key={index} onClick={(() => {
                        Taro.navigateTo({ url: "/pages/gameFilter/index" })
                    })}>
                        <GbIcons name={item.icon} size="70rpx" color="var(--app-primary-color)" />
                        <View className={styles.name}>{item.name}</View>
                    </View>
                ))}
            </View>
        </View>
    );
}

export default Category;