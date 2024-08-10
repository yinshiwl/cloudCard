import { View } from "@tarojs/components";
import utils from "../../utils";
import styles from "./index.module.scss"
import { SafeArea } from "@nutui/nutui-react-taro";

export default ({ children }) => {
    const { navBarHeight } = utils.getNavBarData();
    return (
        <View className={styles.root} style={{ top: `${navBarHeight}px`, bottom: '52px' }}>
            {children}
            <SafeArea position="bottom" />
        </View>
    );
}