import { Text, View } from "@tarojs/components";
import styles from "./index.module.scss"
import Taro from "@tarojs/taro";
import GbButton from "../GbButton";
import { Edit, Eye, Del } from '@nutui/icons-react-taro'
import classNames from "classnames";
import GbAvatar from "../GbAvatar";
import { Pagination } from "@nutui/nutui-react-taro";

export default ({ type = 'SELF', currentPage }) => {
    const { data = [], page, total_count, pageSize } = currentPage || {}
    return (
        <View className={styles.root}>
            {data.map((item, index) => <CardItem key={index} item={item} />)}
            {total_count > pageSize && <Pagination
                value={page}
                total={total_count}
                pageSize={pageSize}
                mode="simple"
                onChange={(v) => {
                    getData(v)
                }}
            />}
            {type === 'SELF' && <GbButton onClick={() => {
                Taro.navigateTo({
                    url: '/pages/editCardInfo/index',
                    success: function (res) {
                        res.eventChannel.emit('editCardInfoPage', { data: { type: 'CREATE' } })
                    }
                })
            }}>
                添加名片
            </GbButton>}
        </View>
    );
}

function CardItem({ item }) {
    const { name = '姓名', position = '职位', company = '公司' } = item
    return (
        <View className={styles.cardItem}>
            <View className={styles.content}>
                <View className={styles.left}>
                    <View className={styles.top}>
                        <Text className={styles.name}>{name}</Text>
                        <Text className={styles.position}>{position}</Text>
                    </View>
                    <View className={styles.bottom}>
                        <Text className={styles.company}>{company}</Text>
                    </View>
                </View>
                <View className={styles.right}>
                    <GbAvatar />
                </View>
            </View>
            <View className={styles.operate}>
                <View className={styles.operateItem} onClick={() => {
                    Taro.navigateTo({ url: '/pages/editCard/index' })
                }}>
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