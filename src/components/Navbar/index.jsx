import { View } from "@tarojs/components";
import utils from "../../utils";
import styles from "./index.module.scss"

export default ({ title, background }) => {
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
            <View className={styles.body}>
                {title}
            </View>
        </View>
    );
}