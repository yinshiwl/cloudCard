import Tabbar from "../../components/Tabbar";
import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import Page from "../../components/Page";
import Card from "../../components/Card";
import styles from "./index.module.scss";

export default () => {
	return (
		<Page className={styles.root}>
			<Navbar title="我的链接" />
			<Body hasTabbar>
				<Card></Card>
			</Body>
			<Tabbar value={3} />
		</Page>
	);
};
