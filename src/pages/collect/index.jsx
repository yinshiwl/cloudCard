import { View } from "@tarojs/components";
import Tabbar from "../../components/Tabbar";
import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import styles from "./index.module.scss"
import CardList from "../../components/CardList";

export default () => {
    return (
        <View className={styles.root}>
            <Navbar title="我的收藏" color="#fff" ></Navbar>
            <Body hasTabbar>
                <CardList type="COLLECT" />
            </Body>
            <Tabbar value={1} />
        </View>
    );
}