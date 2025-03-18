import Tabbar from "../../components/Tabbar";
import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import styles from "./index.module.scss"
import CardList from "../../components/CardList";
import Page from "../../components/Page";
import { useMemo } from "react";
import { Text, View } from "@tarojs/components";
import GbIcons from "../../components/GbIcons";
import useCardPage from "../../common/hooks/useCardPage";

export default () => {
    const type = useMemo(() => {
        return 'COLLECT'
    }, [])
    const { cardPage, getCardPage } = useCardPage({ type });
    return (
        <Page className={styles.root}>
            <Navbar title="我的收藏" ></Navbar>
            <Body hasTabbar>
                {cardPage?.data?.length === 0 ? <Empty /> : <CardList type={type} currentPage={cardPage} loadData={getCardPage} />}
            </Body>
            <Tabbar value={1} />
        </Page>
    );
}


function Empty() {
    return (
        <View className={styles.empty}>
            <GbIcons name="empty" size="100rpx" color="var(--app-primary-color)" />
            <Text>
                您还没有收藏名片噢
            </Text>
        </View>
    );
}