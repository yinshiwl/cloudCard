import { View } from "@tarojs/components";
import styles from "./index.module.scss"
import Taro from "@tarojs/taro";
import GbButton from "../GbButton";
import { Pagination } from "@nutui/nutui-react-taro";
import CardItem from "./parts/CardItem";

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