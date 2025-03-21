import { Swiper as NutuiSwiper, Skeleton } from "@nutui/nutui-react-taro";
import styles from "./index.module.scss";
import { View } from "@tarojs/components";
import classNames from "classnames";

const Swiper = ({ className }) => {
	const list = [
		"https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg",
		"https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg",
		"https://storage.360buyimg.com/jdc-article/welcomenutui.jpg",
		"https://storage.360buyimg.com/jdc-article/fristfabu.jpg",
	];
	const onChange = (e) => {
		console.log(`onChange is trigger ${e}`);
	};
	return <Skeleton title animated avatar rows={3} visible></Skeleton>
	return (
		<View className={classNames(styles.swiper, className)}>
			<NutuiSwiper
				defaultValue={1}
				autoPlay
				indicator
				loop
				circular
				onChange={onChange}
			>
				{list.map((item, index) => (
					<NutuiSwiper.Item key={item}>
						<img
							width="100%"
							height="100%"
							onClick={() => console.log(index)}
							src={item}
							alt=""
						/>
					</NutuiSwiper.Item>
				))}
			</NutuiSwiper>
		</View>
	);
};

export default Swiper;
