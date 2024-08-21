import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import DefaultCard from "../../components/CardTheme/DefaultTheme";
import utils from "../../utils";
import { useEffect, useState } from "react";


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
        <View>
            <Navbar title={`${name}的名片`} back background="var(--app-primary-color)" titleCenter ></Navbar>
            <Body>
                <DefaultCard cardInfo={cardInfo} />
            </Body>
        </View>
    );
}