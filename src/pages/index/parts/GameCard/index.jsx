import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import { Button, Image } from "@nutui/nutui-react-taro";


const GameCard = () => {
    const src = 'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png';

    return (
        <View className={styles.root}>
            <Image className={styles.img} width="100rpx" height="100rpx" src={src} />
            <View className={styles.content}>
                <View className={styles.title}>游戏名称</View>
                <View className={styles.desc}>游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介</View>
                <View className={styles.other}>名额充足</View>
            </View>
            <Button className={styles.button} type="primary">申请</Button>
        </View>
    );
}

export default GameCard;