import styles from "./index.module.scss";
import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import DefaultCard from "../../components/CardTheme/DefaultTheme";
import utils from "../../utils";
import { useEffect, useState } from "react";
import { FixedNav } from "@nutui/nutui-react-taro";
import Page from "../../components/Page";


export default () => {
    const [cardInfo, setCardInfo] = useState(null);
    const { name } = cardInfo || {}
    useEffect(() => {
        const eventChannel = utils.getOpenerEventChannel();
        eventChannel.on('cardInfo', (data) => {
            setCardInfo(data.data)
        })
    }, [])
    return (
        <Page>
            <Navbar title={`${name}的名片`} back background="var(--app-primary-color)" titleCenter ></Navbar>
            <Body>
                <DefaultCard cardInfo={cardInfo} />
                <BbFixedNav />
            </Body>
        </Page>
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