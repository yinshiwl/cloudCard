import { Text, View } from "@tarojs/components";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import GbIcons from "../../../GbIcons";
import utils from "../../../../common/utils";
import { Loading } from "@nutui/nutui-react-taro";

const Operate = ({ cardInfo }) => {
    const [loading, setLoading] = useState(false);
    const [_cardInfo, setCardInfo] = useState(cardInfo);
    const { liked = false, collected = false, likeCount = 0, collectCount = 0, browseCount = 0, id } = _cardInfo || {};
    useEffect(() => {
        setCardInfo(cardInfo)
    }, [cardInfo])
    return (
        <View className={styles.operate}>
            <View className={classNames(styles.operateItem, styles.disableClick)}>
                <View className={styles.value}>
                    <GbIcons name="eye" />
                    <Text className={styles.valueText}>{browseCount}</Text>
                </View>
                <Text>浏览</Text>
            </View>
            <View className={classNames(styles.operateItem, { [styles.collect]: collected })} onClick={async () => {
                if (loading) return
                setLoading(true);
                const resp = await utils.onCollect(id, !collected)
                setLoading(false);
                if (resp.status !== 0) return
                setCardInfo({ ..._cardInfo, collected: !collected, collectCount: collectCount + (collected ? -1 : 1) })
            }}>
                <View className={styles.value}>
                    <GbIcons name={collected ? "star-fill" : "star"} color={collected ? "var(--nutui-orange-6)" : null} />
                    <Text className={styles.valueText}>{collectCount}</Text>
                </View>
                <Text>{loading ? <Loading type="circular" /> : '收藏'}</Text>
            </View>
            <View className={classNames(styles.operateItem, { [styles.like]: liked })} onClick={async () => {
                if (loading) return
                setLoading(true);
                const resp = await utils.onLike(id, !liked)
                setLoading(false);
                if (resp.status !== 0) return
                setCardInfo({ ..._cardInfo, liked: !liked, likeCount: likeCount + (liked ? -1 : 1) })
            }}>
                <View className={styles.value}>
                    <GbIcons name={liked ? "love-fill" : "love"} color={liked ? "var(--nutui-red-8)" : null} />
                    <Text className={styles.valueText}>{likeCount}</Text>
                </View>
                <Text>{loading ? <Loading type="circular" /> : '点赞'}</Text>
            </View>
        </View>
    );
}

export default Operate;