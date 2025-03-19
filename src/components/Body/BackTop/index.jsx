import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import { Top } from "@nutui/icons-react-taro";

const BackTop = ({ setBackTop, showBackTop }) => {
	return (
		<View
			className={styles.root}
			style={{
				transition: "all 0.3s ease-in-out",
				opacity: showBackTop ? 1 : 0,
			}}
			onClick={() => {
				setBackTop(true);
			}}
		>
			<Top />
		</View>
	);
};

export default BackTop;
