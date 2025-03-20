import { Button, Menu, SearchBar } from "@nutui/nutui-react-taro";
import { useRef, useState } from "react";
import Page from "../../components/Page";
import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import GameList from "../../components/GameList";
import styles from "./index.module.scss";
import { View } from "@tarojs/components";

export default () => {
	const [options] = useState([
		{ text: "全部商品", value: 0 },
		{ text: "新款商品", value: 1 },
		{ text: "活动商品", value: 2 },
	]);
	const itemRef = useRef(null);
	return (
		<Page>
			<Navbar title="游戏列表" back></Navbar>
			<Body full>
				<View className={styles.head}>
					<SearchBar shape="round" maxLength={5} />
					<Menu
						onClose={(a, f) => {
							console.log(a, f);
						}}
					>
						<Menu.Item options={options} defaultValue={0} />
						<Menu.Item title="筛选" ref={itemRef}>
							<div
								style={{
									width: "50%",
									lineHeight: "28px",
									padding: "0 30px",
								}}
							>
								自定义内容
							</div>
							<Button
								size="small"
								onClick={() => {
									itemRef.current?.toggle(false);
								}}
							>
								确认
							</Button>
						</Menu.Item>
					</Menu>
				</View>
				<View className={styles.gameList}>
					<GameList />
				</View>
			</Body>
		</Page>
	);
};
