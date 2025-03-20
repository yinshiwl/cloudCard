import { View } from "@tarojs/components";
import styles from "./index.module.scss";

const Card = ({ children }) => {
	return <View className={styles.root}>{children}</View>;
};

export default Card;
