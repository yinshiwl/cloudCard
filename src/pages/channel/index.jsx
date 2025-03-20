import { View } from "@tarojs/components";
import Page from "../../components/Page";
import Tabbar from "../../components/Tabbar";
import Body from "../../components/Body";
import Navbar from "../../components/Navbar";
import styles from "./index.module.scss";
import InfoCard from "./parts/InfoCard";
import TotalData from "./parts/TotalData";
import Card from "../../components/Card";

const Channel = () => {
	return (
		<Page className={styles.root}>
			<Navbar title="渠道中心"></Navbar>
			<Body hasTabbar>
				<Card>
					<InfoCard />
					<View className={styles.tips}>
						注：合作商可获得子渠道收益10%【不影响下级收益】
					</View>
					<TotalData />
				</Card>
			</Body>
			<Tabbar value={1} />
		</Page>
	);
};

export default Channel;
