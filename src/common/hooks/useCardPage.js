import { useState } from "react";
import utils from "../utils";
import { useDidShow } from "@tarojs/taro";

export default (props) => {
    const { type = 'SELF', autoLoad = true } = props || {};
    const [cardPage, setCardPage] = useState({
        page: 1,
        pageSize: 10,
        total_count: 0,
        data: []
    });
    const getCardPage = async (page = 1) => {
        const resp = await utils.request({
            api: type === 'SELF' ? '/api/card/page' : '/api/card/collect/page',
            data: {
                page: page,
                pageSize: 10
            },
            showAlert: false
        })
        if (resp.status !== 0) return;
        setCardPage(resp?.model || cardPage)
    }
    useDidShow(() => {
        if (autoLoad) getCardPage();
    })
    return { cardPage, setCardPage, getCardPage };
}