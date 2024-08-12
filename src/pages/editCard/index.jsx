import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import DefaultCard from "../../components/CardTheme/DefaultTheme";

export default () => {

    return (
        <View>
            <Navbar title="xx的名片" back background="var(--app-primary-color)" titleCenter ></Navbar>
            <Body>
                <DefaultCard />
            </Body>
        </View>
    );
}