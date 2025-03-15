import { Ellipsis, NoticeBar as NutuiNoticeBar } from '@nutui/nutui-react-taro'
import { ArrowSize6 } from '@nutui/icons-react-taro'
import { Text, View } from '@tarojs/components';
import styles from "./index.module.scss";

const NoticeBar = () => {
    const horseLamp1 = [
        'NoticeBar 公告栏AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
        'Cascader 级联选择BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB',
        'DatePicker 日期选择器EDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',
        'CheckBox 复选按钮',
    ]
    return (
        <View className={styles.root}>
            <NutuiNoticeBar
                direction="vertical"
                list={horseLamp1.map((item, index) => (
                    <Text key={index} className={styles.text}>{item}</Text>
                ))}
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