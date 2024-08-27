import { Text, View } from "@tarojs/components";
import styles from "./index.module.scss"
import Taro from "@tarojs/taro";
import GbButton from "../GbButton";
import { Edit, Eye, Del } from '@nutui/icons-react-taro'
import classNames from "classnames";
import GbAvatar from "../GbAvatar";
import { Dialog, Pagination } from "@nutui/nutui-react-taro";
import utils from "../../utils";

export default ({ type = 'SELF', currentPage, loadData }) => {
    const { data = [], page, total_count, pageSize } = currentPage || {}
    return (
        <View className={styles.root}>
            {data.map((item, index) => <CardItem key={index} item={item} reloadData={() => { loadData && loadData(page) }} />)}
            {total_count > pageSize && <Pagination
                value={page}
                total={total_count}
                pageSize={pageSize}
                mode="simple"
                onChange={(v) => {
                    loadData && loadData(v)
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

function CardItem({ item, reloadData }) {
    const { name, position, company, _id } = item || {}
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
                    Taro.navigateTo({
                        url: '/pages/editCard/index',
                        success: function (res) {
                            res.eventChannel.emit('cardInfo', { data: item })
                        }
                    })
                }}>
                    <Edit className={styles.icon} />
                    <Text>编辑</Text>
                </View>
                <View className={styles.operateItem} onClick={() => {
                    Taro.navigateTo({
                        url: '/pages/viewCard/index',
                        success: function (res) {
                            res.eventChannel.emit('cardInfo', { data: item })
                        }
                    })
                }}>
                    <Eye className={styles.icon} />
                    <Text>查看</Text>
                </View>
                <View className={classNames(styles.operateItem, styles.delete)} onClick={async () => {
                    Dialog.open('dialog', {
                        title: '确认删除名片？',
                        confirmText: '确认',
                        cancelText: '取消',
                        onConfirm: async () => {
                            const resp = await utils.request({
                                api: '/api/card/delete',
                                data: {
                                    id: _id
                                }
                            })
                            if (resp.status !== 0) return;
                            Taro.showToast({ title: resp.message, icon: 'success' })
                            Dialog.close('dialog')
                            reloadData()
                        },
                        onCancel: () => {
                            Dialog.close('dialog')
                        }
                    })
                }}>
                    <Del className={styles.icon} />
                    <Text>删除</Text>
                </View>
            </View>
        </View>
    );
}