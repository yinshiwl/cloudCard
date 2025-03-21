import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import classNames from "classnames";

const Card = ({ children, className, cardRef, ...restProps }) => {
	return (
		<View
			ref={cardRef}
			className={classNames(styles.root, className)}
			{...restProps}
		>
			{children}
		</View>
	);
};

export default Card;
