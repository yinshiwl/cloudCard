import { View } from "@tarojs/components";
import utils from "../../common/utils";
import styles from "./index.module.scss"
import { SafeArea } from "@nutui/nutui-react-taro";
import classNames from "classnames";

export default ({ children, hasTabbar }) => {
    const { navBarHeight } = utils.getNavBarData();
    return (
        <View className={classNames(styles.root, "xxx-body")} style={{ top: `${navBarHeight}px`, bottom: hasTabbar ? '52px' : '0' }}>
            {children}
            <SafeArea position="bottom" />
        </View>
    );
}