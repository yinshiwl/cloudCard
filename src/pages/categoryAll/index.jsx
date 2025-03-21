import { SearchBar } from "@nutui/nutui-react-taro";
import Body from "../../components/Body";
import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import styles from "./index.module.scss";
import GameList from "../../components/GameList";

export default () => {
	return (
		<Page className={styles.root}>
			<Navbar title="全部分类" back></Navbar>
			<Body>
				<SearchBar shape="round" maxLength={5} />
				<GameList />
			</Body>
		</Page>
	);
};
