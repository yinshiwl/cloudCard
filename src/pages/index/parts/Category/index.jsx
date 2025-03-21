import { Image, View } from "@tarojs/components";
import styles from "./index.module.scss";
import { useState } from "react";
import classNames from "classnames";

const Category = () => {
	const [active, setActive] = useState(0);
	const list = [
		{
			name: "全部",
			icon: "https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png",
			path: "",
		},
		{
			name: "休闲",
			icon: "https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png",
			path: "",
		},
		{
			name: "角色",
			icon: "https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png",
			path: "",
		},
		{
			name: "竞技",
			icon: "https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png",
			path: "",
		},
		{
			name: "更多",
			icon: "https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png",
			path: "",
		},
		{
			name: "动作",
			icon: "https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png",
			path: "",
		},
		{
			name: "休闲",
			icon: "https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png",
			path: "",
		},
		{
			name: "角色",
			icon: "https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png",
			path: "",
		},
		{
			name: "竞技",
			icon: "https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png",
			path: "",
		},
		{
			name: "更多",
			icon: "https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png",
			path: "",
		},
	];
	return (
		<View className={styles.root}>
			<View className={styles.category}>
				{list.map((item, index) => (
					<View
						className={classNames(styles.item, {
							[styles.active]: active === index,
						})}
						key={index}
						onClick={() => {
							// Taro.navigateTo({ url: "/pages/gameFilter/index" });
							setActive(index);
						}}
					>
						<View className={styles.iconBg}>
							<Image
								width="40rpx"
								height="40rpx"
								src={item.icon}
								className={styles.icon}
							/>
						</View>
						<View className={styles.name}>{item.name}</View>
					</View>
				))}
			</View>
		</View>
	);
};

export default Category;
