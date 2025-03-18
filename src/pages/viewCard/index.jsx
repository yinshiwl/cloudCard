import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import DefaultCard from "../../components/CardTheme/DefaultTheme";
import Page from "../../components/Page";
import useCardData from "../../common/hooks/useCardData";
import { useRouter } from "@tarojs/taro";


export default () => {
    const router = useRouter();
    const { id } = router.params;
    const { cardInfo } = useCardData({ id, isBrowse: true })
    const { name } = cardInfo || {}

    return (
        <Page>
            <Navbar title={`${name}的名片`} back background="var(--app-primary-color)" titleCenter ></Navbar>
            <Body>
                <DefaultCard cardInfo={cardInfo} />
            </Body>
        </Page>
    );
}