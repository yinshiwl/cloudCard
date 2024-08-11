import { View } from "@tarojs/components";
import utils from "../../utils";
import { ArrowLeft } from '@nutui/icons-react-taro'
import styles from "./index.module.scss"
import Taro from "@tarojs/taro";

export default ({ title, background, back, color }) => {
    const { navBarHeight, statusBarHeight, paddingX } = utils.getNavBarData();
    return (
        <View className={styles.root} style={{
            height: `${navBarHeight - statusBarHeight}px`,
            paddingTop: `${statusBarHeight}px`,
            paddingLeft: `${paddingX}px`,
            background: background ?? 'unset',
            boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)"
        }}>
            {!background && <View className={styles.topBg}><View className={styles.bg}></View></View>}
            <View className={styles.body} style={{ color: color ?? 'unset' }}>
                {back && <ArrowLeft onClick={() => Taro.navigateBack()} />}
                {title}
            </View>
        </View>
    );
}