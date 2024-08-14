import { Text, View } from "@tarojs/components";
import styles from "./index.module.scss";
import { FixedNav } from "@nutui/nutui-react-taro";
import GbIcons from "../../GbIcons";
import { useState } from "react";
import classNames from "classnames";
import GbAvatar from "../../GbAvatar";
import GbImagePreview from "../../GbImagePreview";

export default () => {
    return (
        <View className={styles.root}>
            <View className={styles.card}>
                <View className={styles.cardInfo}>
                    <View className={styles.avatar_name}>
                        <View className={styles.avatar}>
                            <GbAvatar />
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
                    <View className={styles.item}>
                        <GbIcons name="describe" />
                        <Text className={styles.describe}>
                            描述
                        </Text>
                    </View>
                    <View className={styles.item}>
                        <GbIcons name="images" />
                        <GbImagePreview />
                    </View>
                </View>
            </View>
            <Operate />
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

function Operate() {
    const [collect, setCollect] = useState(false)
    const [like, setLike] = useState(false)
    return (
        <View className={styles.operate}>
            <View className={classNames(styles.operateItem, styles.disableClick)}>
                <View className={styles.value}>
                    <GbIcons name="eye" />
                    <Text>2k</Text>
                </View>
                <Text>浏览</Text>
            </View>
            <View className={classNames(styles.operateItem, { [styles.collect]: collect })} onClick={() => setCollect(!collect)}>
                <View className={styles.value}>
                    <GbIcons name={collect ? "star-fill" : "star"} color={collect ? "var(--nutui-orange-6)" : null} />
                    <Text>2k</Text>
                </View>
                <Text>收藏</Text>
            </View>
            <View className={classNames(styles.operateItem, { [styles.like]: like })} onClick={() => setLike(!like)}>
                <View className={styles.value}>
                    <GbIcons name={like ? "love-fill" : "love"} color={like ? "var(--nutui-red-8)" : null} />
                    <Text>2k</Text>
                </View>
                <Text>点赞</Text>
            </View>
        </View>
    );
}