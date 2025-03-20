import Tabbar from "../../components/Tabbar";
import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import Page from "../../components/Page";
import Table from "./parts/Table";

export default () => {
	return (
		<Page>
			<Navbar title="推广数据" />
			<Body hasTabbar>
				<Table />
			</Body>
			<Tabbar value={2} />
		</Page>
	);
};
