import { Text, View } from "@tarojs/components";
import styles from "./index.module.scss"
import Taro from "@tarojs/taro";
import GbButton from "../GbButton";
import { Edit, Eye, Del } from '@nutui/icons-react-taro'
import classNames from "classnames";
import GbAvatar from "../GbAvatar";
import { Dialog, Pagination } from "@nutui/nutui-react-taro";
import utils from "../../common/utils";

export default ({ type = 'SELF', currentPage, loadData }) => {
    const { data = [], page, total_count, pageSize } = currentPage || {}
    return (
        <View className={styles.root}>
            {data.map((item, index) => <CardItem type={type} key={index} item={item} reloadData={() => { loadData && loadData(page) }} />)}
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
                Taro.navigateTo({ url: '/pages/editCardInfo/index' })
            }}>
                添加名片
            </GbButton>}
        </View>
    );
}

function CardItem({ type, item, reloadData }) {
    const { name, position, company, id } = item || {}
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
                {type === 'SELF' && <View className={styles.operateItem} onClick={() => {
                    Taro.navigateTo({ url: '/pages/editCard/index?id=' + id })
                }}>
                    <Edit className={styles.icon} />
                    <Text>编辑</Text>
                </View>}
                <View className={styles.operateItem} onClick={() => {
                    Taro.navigateTo({ url: '/pages/viewCard/index?id=' + id })
                }}>
                    <Eye className={styles.icon} />
                    <Text>查看</Text>
                </View>
                {type === 'SELF' && <View className={classNames(styles.operateItem, styles.delete)} onClick={async () => {
                    Dialog.open('dialog', {
                        title: '确认删除名片？',
                        confirmText: '确认',
                        cancelText: '取消',
                        onConfirm: async () => {
                            const resp = await utils.request({
                                api: '/api/card/save',
                                data: {
                                    id,
                                    deleted: true
                                }
                            })
                            if (resp.status !== 0) return;
                            Taro.showToast({ title: "删除成功", icon: 'success' })
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
                </View>}
                {type === 'COLLECT' && <View className={classNames(styles.operateItem, styles.delete)} onClick={async () => {
                    Dialog.open('dialog', {
                        title: '确认取消收藏？',
                        confirmText: '确认',
                        cancelText: '取消',
                        onConfirm: async () => {
                            const resp = await utils.onCollect(id, false)
                            if (resp.status !== 0) return;
                            Taro.showToast({ title: "取消收藏成功", icon: 'success' })
                            Dialog.close('dialog')
                            reloadData()
                        },
                        onCancel: () => {
                            Dialog.close('dialog')
                        }
                    })
                }}>
                    <Del className={styles.icon} />
                    <Text>取消收藏</Text>
                </View>}
            </View>
        </View>
    );
}