import { Text, View } from "@tarojs/components";
import styles from "./index.module.scss";
import GbIcons from "../../GbIcons";
import { useState } from "react";
import classNames from "classnames";
import GbAvatar from "../../GbAvatar";
import GbImagePreview from "../../GbImagePreview";
import Taro from "@tarojs/taro";

export default ({ cardInfo }) => {
    const { name, position, company, description, phone, weChat, address, email } = cardInfo || {}
    return (
        <View className={styles.root}>
            <View className={styles.card}>
                <View className={styles.cardInfo}>
                    <View className={styles.avatar_name}>
                        <View className={styles.avatar}>
                            <GbAvatar />
                        </View>
                        <View className={styles.name}>
                            <Text className={styles.nameText}>{name}</Text>
                            <Text className={styles.position}>{position}</Text>
                        </View>
                    </View>
                    <View className={styles.company}>
                        {company}
                    </View>
                    <View className={styles.moreInfo}>
                        {phone && <Row icon="phone-fill" title={phone} extra="打电话" onClick={() => {
                            Taro.makePhoneCall({ phoneNumber: phone })
                        }} />}
                        {weChat && <Row icon="weixin" title={weChat} extra="加微信" />}
                        {email && <Row icon="email-fill" title={email} extra="复制" onClick={() => {
                            Taro.setClipboardData({ data: email })
                        }} />}
                        {address && <Row icon="location-fill" title={address} extra="地图" onClick={() => {
                            Taro.openLocation({
                                latitude: 39.906225696719844,
                                longitude: 116.33766287293122,
                                scale: 18
                            })
                        }} />}
                    </View>
                </View>
                <View className={styles.otherInfo}>
                    {description && <View className={styles.item}>
                        <GbIcons name="describe" />
                        <Text className={styles.describe}>
                            {description}
                        </Text>
                    </View>}
                    <View className={styles.item}>
                        <GbIcons name="images" />
                        <GbImagePreview />
                    </View>
                </View>
            </View>
            <Operate />
        </View>
    );
}

function Row({ icon, title, extra, onClick }) {
    return (
        <View className={styles.row} onClick={onClick}>
            <View className={styles.left}>
                <GbIcons name={icon} size="small" color="primary" />
                <Text className={styles.title}>{title}</Text>
            </View>
            <View className={styles.right}>
                <Text className={styles.extra}>{extra}</Text>
                <GbIcons name="arrow-right" size="small" color="primary" />
            </View>
        </View>
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
                    <Text className={styles.valueText}>2k</Text>
                </View>
                <Text>浏览</Text>
            </View>
            <View className={classNames(styles.operateItem, { [styles.collect]: collect })} onClick={() => setCollect(!collect)}>
                <View className={styles.value}>
                    <GbIcons name={collect ? "star-fill" : "star"} color={collect ? "var(--nutui-orange-6)" : null} />
                    <Text className={styles.valueText}>2k</Text>
                </View>
                <Text>收藏</Text>
            </View>
            <View className={classNames(styles.operateItem, { [styles.like]: like })} onClick={() => setLike(!like)}>
                <View className={styles.value}>
                    <GbIcons name={like ? "love-fill" : "love"} color={like ? "var(--nutui-red-8)" : null} />
                    <Text className={styles.valueText}>2k</Text>
                </View>
                <Text>点赞</Text>
            </View>
        </View>
    );
}