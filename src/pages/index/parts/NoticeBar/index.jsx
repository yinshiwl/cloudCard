import { NoticeBar as NutuiNoticeBar } from '@nutui/nutui-react-taro'
import { ArrowSize6 } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components';
import styles from "./index.module.scss";

const NoticeBar = () => {
    const horseLamp1 = [
        'NoticeBar 公告栏',
        'Cascader 级联选择',
        'DatePicker 日期选择器',
        'CheckBox 复选按钮',
    ]
    return (
        <View className={styles.root}>
            <NutuiNoticeBar
                direction="vertical"
                list={horseLamp1}
                speed={10}
                duration={1000}
                height={30}
                rightIcon={<ArrowSize6 />}
                onClick={(e) => {
                }}
                closeable
            />
        </View>
    );
}

export default NoticeBar;