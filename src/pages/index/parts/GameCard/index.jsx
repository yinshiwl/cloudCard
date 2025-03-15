import { View } from "@tarojs/components";
import styles from "./index.module.scss";
import { Grid, Image } from "@nutui/nutui-react-taro";


const GameCard = () => {

    const LeftBar = () => {
        return (
            <View className={styles.left}>
                <Image className={styles.img} width="100rpx" height="100rpx" src='https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png' />
                {/* <img src='https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png' alt="头像" /> */}
            </View>
        );
    };

    const MiddleBar = () => {
        return (
            <View className={styles.middle}>
                <p>这是一个很好玩的游戏</p>
            </View>
        );
    };

    const RightBar = () => {
        return (
            <View className={styles.right}>
                <button>按钮</button>
            </View>
        );
    };

    return (
        <View className={styles.root}>

            {/* <Grid columns={3} className="grid">
                <Grid.Item >
                    <Image className={styles.img} width="100rpx" height="100rpx" src={src}/>
                </Grid.Item>
                <Grid.Item text="这是一个很好玩的游戏">
                </Grid.Item>
                <Grid.Item text="推荐">
                </Grid.Item>
            </Grid> */}
            <View className={styles.three}>
                <LeftBar />
                <MiddleBar />
                <RightBar />
            </View>
        </View>
    );
}

export default GameCard;