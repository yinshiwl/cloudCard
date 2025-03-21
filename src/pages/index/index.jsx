import Tabbar from "../../components/Tabbar";
import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import Page from "../../components/Page";
import Swiper from "./parts/Swiper";
import Category from "./parts/Category";
import NoticeBar from "./parts/NoticeBar";
import Card from "../../components/Card";
import GameList from "../../components/GameList";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { SearchBar } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

const Index = () => {
	const [isTop, setIsTop] = useState(false);
	const [searchHeight, setSearchHeight] = useState(0);
	const onScroll = (e) => {
		Taro.createSelectorQuery()
			.select("#cardElement")
			.boundingClientRect((rect) => {
				if (e.target.scrollTop > rect?.top) {
					setIsTop(true);
				} else {
					setIsTop(false);
				}
			})
			.exec();
	};
	useEffect(() => {
		Taro.createSelectorQuery()
			.select("#searchElement")
			.boundingClientRect((rect) => {
				setSearchHeight(rect?.height ?? 50);
			})
			.exec();
	}, []);
	return (
		<Page className={classNames(styles.root, { [styles.top]: isTop })}>
			<Navbar title="游乐玩指" />
			<Body hasTabbar onScroll={onScroll} full>
				<View id="searchElement" className={styles.search}>
					<SearchBar shape="round" maxLength={5} />
				</View>
				<Swiper className={styles.swiper} />
				<View
					id="cardElement"
					className={styles.card}
					style={{ top: `${searchHeight}px` }}
				>
					<Card>
						<Category />
						<NoticeBar />
					</Card>
				</View>
				<View className={styles.content}>
					<GameList />
				</View>
			</Body>
			<Tabbar value={0} />
		</Page>
	);
};

export default Index;
