import Tabbar from "../../components/Tabbar";
import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import Page from "../../components/Page";
import Swiper from "./parts/Swiper";
import Category from "./parts/Category";
import NoticeBar from "./parts/NoticeBar";
import VirtualList from "./parts/VirtualList";

const Index = () => {
	return (
		<Page>
			<Navbar title="游乐玩指" />
			<Body hasTabbar>
				<Swiper />
				<Category />
				<NoticeBar />
				<VirtualList />
			</Body>
			<Tabbar value={0} />
		</Page>
	);
};

export default Index;
