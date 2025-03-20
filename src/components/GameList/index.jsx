import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import GameCard from "./parts/GameCard";

const GameList = () => {
    const [list, setList] = useState([]);
    const [scrollTop, setScrollTop] = useState(0);
    console.log(scrollTop)
    useEffect(() => {
        const dataList = [];
        for (let i = 0; i < 100; i++) {
            dataList.push(`Item ${i}`);
        }
        setList(dataList);
    }, []);

    const handleScroll = (e) => {
        setScrollTop(e.target.scrollTop);
    };

    const renderItem = (item, index) => {
        return (
            <View key={index} className={styles.item}>
                <GameCard />
            </View>
        );
    };
    return (
        <View className={styles.content} onScroll={handleScroll} >
            {list.map((item, index) => renderItem(item, index))}
        </View>
    );
};


export default GameList