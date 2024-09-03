import { useEffect, useState } from "react";
import utils from "../utils";
import { useDidShow } from "@tarojs/taro";



export default (props) => {
    const { id, isBrowse = false, autoLoad = true } = props || {};
    const [cardInfo, setCardInfo] = useState(null);

    const getCardInfo = async (cardId) => {
        const resp = await utils.request({
            api: '/api/card/data',
            data: { cardId }
        })
        if (resp.status !== 0) return;
        setCardInfo(resp.model)
    }
    useEffect(() => {
        if (!id) return;
        if (isBrowse) utils.onBrowse(id);
    }, [id, isBrowse])
    useDidShow(() => {
        if (autoLoad && id) getCardInfo(id);
    })
    return { cardInfo, getCardInfo }
}