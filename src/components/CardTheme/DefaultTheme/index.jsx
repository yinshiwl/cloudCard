import { Text, View } from "@tarojs/components";
import styles from "./index.module.scss";
import { Avatar, FixedNav } from "@nutui/nutui-react-taro";
import GbIcons from "../../GbIcons";
import { useState } from "react";

export default () => {
    return (
        <View className={styles.root}>
            <View className={styles.cardInfo}>
                <View className={styles.avatar_name}>
                    <View className={styles.avatar}>
                        <Avatar size="large" />
                    </View>
                    <View className={styles.name}>
                        <Text className={styles.nameText}>姓名</Text>
                        <Text className={styles.position}>职位</Text>
                    </View>
                </View>
                <View className={styles.company}>
                    公司
                </View>
                <View className={styles.moreInfo}>
                    <Row icon="phone-fill" title="手机号" extra="打电话" />
                    <Row icon="weixin" title="微信号" extra="加微信" />
                    <Row icon="email-fill" title="邮箱" extra="复制" />
                    <Row icon="location-fill" title="地址" extra="地图" />
                </View>
            </View>
            <View className={styles.otherInfo}>
                test222
            </View>
            <BbFixedNav />
        </View>
    );
}

function Row({ icon, title, extra }) {
    return (
        <View className={styles.row}>
            <View className={styles.left}>
                <GbIcons name={icon} size="small" color="primary" />
                <Text>{title}</Text>
            </View>
            <View className={styles.right}>
                <Text>{extra}</Text>
                <GbIcons name="arrow-right" size="small" color="primary" />
            </View>
        </View>
    );
}

function BbFixedNav() {
    const [visible, setVisible] = useState(true)
    const list = [
        {
            id: 1,
            text: '编辑资料',
            icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png',
        },
        {
            id: 2,
            text: '配置主题',
            icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png',
        },
        {
            id: 3,
            text: '预览名片',
            icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png',
        },
        {
            id: 4,
            text: '生成海报',
            icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png',
        },
    ]
    const onChange = (value) => {
        setVisible(value)
    }
    const onSelect = (item, event) => {
        console.log(item, event)
    }
    return (
        <FixedNav
            type='left'
            list={list}
            inactiveText="展开"
            activeText="收起"
            visible={visible}
            onChange={onChange}
            onSelect={onSelect}
            position={{ bottom: '52px' }}
        />
    );
}