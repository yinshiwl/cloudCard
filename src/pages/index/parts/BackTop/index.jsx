import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import { DoubleArrowUp } from '@nutui/icons-react-taro'
import Taro from "@tarojs/taro";

const BackTop = ({ listRef }) => {
    return (
        <View className={styles.root} onClick={() => {
            Taro.pageScrollTo({
                selector: '.xxx-body',
                scrollTop: 0,
                duration: 300,
            });
        }}>
            <DoubleArrowUp className='nut-icon-am-jump nut-icon-am-infinite' />
        </View>
    );
}

export default BackTop;