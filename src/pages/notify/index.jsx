import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import Page from "../../components/Page";
import NotifyCard from "./parts/NotifyCard";
import { View } from "@tarojs/components";
import styles from "./index.module.scss"

export default () => {
    const list = [
        {
            title: '一名男子程序员加班三天三夜，回家发现自己的老婆是个女子！',
            time: '1742123304',
        },
        {
            title: '外星人宣布要暂时离开地球，等待人类修复互联网后再返回。',
            time: '1742123304',
        },
        {
            title: '女子怀疑男友出轨，查看聊天记录发现竟在学习！',
            time: '1742123304',
        },
        {
            title: '单身久了是什么体验？” 男子：外卖软件把我当机器人了！',
            time: '1742123304',
        }
    ]
    return (
        <Page>
            <Navbar title="公告" back background="var(--app-primary-color)" titleCenter ></Navbar>
            <Body>
                <View className={styles.root}>
                    {
                        list.map((item, index) => {
                            return <NotifyCard key={index} {...item} />
                        })
                    }
                </View>
            </Body>
        </Page>
    );
}