import { SearchBar, Tabs } from "@nutui/nutui-react-taro";
import Body from "../../components/Body";
import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import styles from "./index.module.scss"
import { useState } from "react";


export default () => {
    const [tab4value, setTab4value] = useState('0')
    const list4 = Array.from(new Array(10).keys())
    return (
        <Page className={styles.root}>
            <Navbar title="全部分类" back background="var(--app-primary-color)" titleCenter ></Navbar>
            <Body hasTabbar>
                <SearchBar shape="round" maxLength={5} />
                <Tabs
                    value={tab4value}
                    onChange={(value) => {
                        setTab4value(value)
                    }}
                    direction="vertical"
                >
                    {list4.map((item) => (
                        <Tabs.TabPane key={item} title={`Tab ${item}`}>
                            Tab {item}
                        </Tabs.TabPane>
                    ))}
                </Tabs>
            </Body>
        </Page>
    );
}