import { ScrollView, View } from "@tarojs/components";
import utils from "../../common/utils";
import styles from "./index.module.scss";
import { SafeArea } from "@nutui/nutui-react-taro";
import { useState } from "react";
import BackTop from "./BackTop";
import classNames from "classnames";

export default ({ children, hasTabbar, full }) => {
	const { navBarHeight } = utils.getNavBarData();
	const [backTop, setBackTop] = useState(false);
	const [showBackTop, setShowBackTop] = useState(false);
	return (
		<ScrollView
			className={styles.root}
			scrollY
			scrollTop={backTop ? 0 : undefined}
			scrollWithAnimation
			enableBackToTop
			onScroll={(e) => {
				const { scrollTop } = e.target;
				setShowBackTop(scrollTop > 500);
				setBackTop(false);
			}}
			style={{ top: `${navBarHeight}px`, bottom: hasTabbar ? "52px" : "0" }}
		>
			<View className={classNames(styles.content, { [styles.full]: full })}>
				{children}
			</View>
			<BackTop setBackTop={setBackTop} showBackTop={showBackTop} />
			<SafeArea position="bottom" />
		</ScrollView>
	);
};
