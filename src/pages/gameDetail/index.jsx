import { View } from "@tarojs/components";
import Body from "../../components/Body";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Page from "../../components/Page";
import { Image, ImagePreview, Tag, Rate, Button } from "@nutui/nutui-react-taro";
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
							<View className={styles.gameName}>我的世界</View>
							<View className={styles.gameRating}>
								<Rate value={4.5} readOnly />
								<View className={styles.ratingText}>4.5分</View>
							</View>
							<View className={styles.gameDesc}>
								在这个充满无限可能的沙盒世界中，你可以建造、探索、生存和创造。收集资源，建造庇护所，与怪物战斗，或者与其他玩家合作，打造属于你的独特世界。
							</View>
							<View className={styles.gameTags}>
								<Tag round type="primary">沙盒</Tag>
								<Tag round type="primary">生存</Tag>
								<Tag round type="primary">建造</Tag>
								<Tag round type="primary">多人</Tag>
							</View>
						</View>
					</View>
				</Card>

				<Card className={styles.gameGallery}>
					<View className={styles.sectionTitle}>游戏截图</View>
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

				<Card className={styles.gameFeatures}>
					<View className={styles.sectionTitle}>游戏特色</View>
					<View className={styles.featureList}>
						<View className={styles.featureItem}>
							<View className={styles.featureTitle}>无限创造</View>
							<View className={styles.featureDesc}>使用各种方块和材料，打造你的梦想世界</View>
						</View>
						<View className={styles.featureItem}>
							<View className={styles.featureTitle}>多人联机</View>
							<View className={styles.featureDesc}>与好友一起探索、建造和冒险</View>
						</View>
						<View className={styles.featureItem}>
							<View className={styles.featureTitle}>丰富模组</View>
							<View className={styles.featureDesc}>支持大量社区模组，扩展游戏体验</View>
						</View>
					</View>
				</Card>

				<View className={styles.actionBar}>
					<Button type="primary" block>
						立即分享
					</Button>
				</View>
			</Body>
		</Page>
	);
};

