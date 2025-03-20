import { View } from "@tarojs/components";
import utils from "../../common/utils";
import { ArrowLeft } from "@nutui/icons-react-taro";
import styles from "./index.module.scss";
import Taro from "@tarojs/taro";

export default ({
	title,
	background,
	back,
	color,
	titleCenter = true,
	fontSize,
}) => {
	const { navBarHeight, statusBarHeight, paddingX } = utils.getNavBarData();
	return (
		<View
			className={styles.root}
			style={{
				height: `${navBarHeight - statusBarHeight}px`,
				paddingTop: `${statusBarHeight}px`,
				background: background ?? "var(--app-page-head-background)",
			}}
		>
			<View
				className={styles.body}
				style={{
					color: color ?? "var(--app-page-head-color)",
					justifyContent: titleCenter ? "center" : "unset",
					margin: `0 ${paddingX}px`,
					fontSize: fontSize ?? "38rpx",
                    fontWeight: "400"
				}}
			>
				{back && (
					<ArrowLeft
						className={styles.back}
						onClick={() => Taro.navigateBack()}
					/>
				)}
				{title}
			</View>
		</View>
	);
};
