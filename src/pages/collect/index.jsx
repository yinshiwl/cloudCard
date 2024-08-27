import Tabbar from "../../components/Tabbar";
import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import styles from "./index.module.scss"
import CardList from "../../components/CardList";
import Page from "../../components/Page";
import { useEffect, useState } from "react";
import utils, { config } from "../../utils";
import { Text, View } from "@tarojs/components";
import GbIcons from "../../components/GbIcons";

export default () => {
    const [currentPage, setCurrentPage] = useState({
        page: 1,
        pageSize: 10,
        total_count: 0,
        data: []
    });
    const loadData = async (page = 1) => {
        const resp = await utils.request({
            api: '/api/card/collect/page',
            data: {
                page: page,
                pageSize: 10
            }
        })
        if (resp.status !== 0) return;
        setCurrentPage(resp?.model || currentPage)
    }
    useEffect(() => {
        loadData();
    }, [])
    useEffect(() => {
        config.reloadCollectPage = loadData;
        config.currentCollectPage = currentPage;
    }, [currentPage])
    return (
        <Page className={styles.root}>
            <Navbar title="我的收藏" ></Navbar>
            <Body hasTabbar>
                {currentPage?.data?.length === 0 ? <Empty /> : <CardList type="COLLECT" currentPage={currentPage} loadData={loadData} />}
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