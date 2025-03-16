import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import { DoubleArrowUp } from '@nutui/icons-react-taro'
import Taro from "@tarojs/taro";

const BackTop = ({ setBackTop }) => {
    return (
        <View className={styles.root} onClick={() => {
            setBackTop(true)
        }}>
            <DoubleArrowUp className='nut-icon-am-jump nut-icon-am-infinite' />
        </View>
    );
}

export default BackTop;