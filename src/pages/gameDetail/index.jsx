import { View } from "@tarojs/components";
import Body from "../../components/Body";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Page from "../../components/Page";
import { Image, ImagePreview, Tag } from "@nutui/nutui-react-taro";
import styles from "./index.module.scss";
import { useState } from "react";

export default () => {
	const [init, setInit] = useState(0);
	const [showPreview, setShowPreview] = useState(false);
	const images = [
		{
			src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png",
		},
		{
			src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg",
		},
		{
			src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg",
		},
		{
			src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg",
		},
		{
			src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg",
		},
	];
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
							<View className={styles.gameDesc}>
								游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介
							</View>
							<View className={styles.gameTags}>
								<Tag round type="primary">
									休闲
								</Tag>
								<Tag round type="primary">
									益智
								</Tag>
							</View>
						</View>
					</View>
					<View className={styles.imageList}>
						{images.map((image, index) => (
							<Image
								key={index}
								onClick={() => {
									setShowPreview(true);
									setInit(index + 1);
								}}
								className={styles.image}
								width="300rpx"
								height="400rpx"
								src={image.src}
								alt={image.src}
							/>
						))}
						<ImagePreview
							autoPlay
							images={images}
							visible={showPreview}
							defaultValue={init}
							onClose={() => setShowPreview(false)}
							indicator
						/>
					</View>
				</Card>
			</Body>
		</Page>
	);
};
