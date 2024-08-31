import { useEffect, useState } from "react";
import utils from "../utils";



export default ({ id, isBrowse = true }) => {
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
        getCardInfo(id);
    }, [id])
    return { cardInfo, getCardInfo }
}