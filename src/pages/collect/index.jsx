import Tabbar from "../../components/Tabbar";
import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import styles from "./index.module.scss"
import CardList from "../../components/CardList";
import Page from "../../components/Page";

export default () => {
    return (
        <Page className={styles.root}>
            <Navbar title="我的收藏" ></Navbar>
            <Body hasTabbar>
                <CardList type="COLLECT" />
            </Body>
            <Tabbar value={1} />
        </Page>
    );
}