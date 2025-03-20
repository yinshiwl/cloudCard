import { View } from "@tarojs/components";
import Body from "../../components/Body";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Page from "../../components/Page";
import { Image } from "@nutui/nutui-react-taro";
import styles from "./index.module.scss";

export default () => {
	return (
		<Page>
			<Navbar title="游戏详情" back></Navbar>
			<Body>
				<Card>
					<View className={styles.gameHead}>
						<Image
							className={styles.gameIcon}
							width="240rpx"
							height="240rpx"
							src="https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png"
						/>
						<View className={styles.gameInfo}>
							<View className={styles.gameName}>游戏名称</View>
							<View className={styles.gameQuota}>名额充足</View>
						</View>
					</View>
				</Card>
			</Body>
		</Page>
	);
};
