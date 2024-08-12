import { Text, View } from "@tarojs/components";
import styles from "./index.module.scss"
import Taro from "@tarojs/taro";
import GbButton from "../GbButton";
import { Edit, Eye, Del } from '@nutui/icons-react-taro'
import classNames from "classnames";
import { Avatar } from "@nutui/nutui-react-taro";

export default ({ type = 'SELF' }) => {
    return (
        <View className={styles.root}>
            <CardItem />
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

function CardItem() {
    return (
        <View className={styles.cardItem}>
            <View className={styles.content}>
                <View className={styles.left}>
                    <View className={styles.top}>
                        <Text className={styles.name}>姓名</Text>
                        <Text className={styles.position}>职位</Text>
                    </View>
                    <View className={styles.bottom}>
                        <Text className={styles.company}>公司</Text>
                    </View>
                </View>
                <View className={styles.right}>
                    <Avatar size="large" />
                </View>
            </View>
            <View className={styles.operate}>
                <View className={styles.operateItem}>
                    <Edit className={styles.icon} />
                    <Text>编辑</Text>
                </View>
                <View className={styles.operateItem}>
                    <Eye className={styles.icon} />
                    <Text>查看</Text>
                </View>
                <View className={classNames(styles.operateItem, styles.delete)}>
                    <Del className={styles.icon} />
                    <Text>删除</Text>
                </View>
            </View>
        </View>
    );
}