import { View } from "@tarojs/components";
import utils from "../../common/utils";
import { ArrowLeft } from '@nutui/icons-react-taro'
import styles from "./index.module.scss"
import Taro from "@tarojs/taro";

export default ({ title, background, back, color, titleCenter }) => {
    const { navBarHeight, statusBarHeight, paddingX } = utils.getNavBarData();
    return (
        <View className={styles.root} style={{
            height: `${navBarHeight - statusBarHeight}px`,
            paddingTop: `${statusBarHeight}px`,
            background: background ?? 'unset',
        }}>
            {!background && <View className={styles.topBg}><View className={styles.bg}></View></View>}
            <View className={styles.body} style={{ color: color ?? "var(--app-text-color-primary)", justifyContent: titleCenter ? 'center' : 'unset', margin: `0 ${paddingX}px` }}>
                {back && <ArrowLeft className={styles.back} onClick={() => Taro.navigateBack()} />}
                {title}
            </View>
        </View>
    );
}