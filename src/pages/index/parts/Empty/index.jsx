
import { Text, View } from "@tarojs/components";
import styles from "./index.module.scss"
import GbIcons from "../../../../components/GbIcons";
import GbButton from "../../../../components/GbButton";
import Taro from "@tarojs/taro";

const Empty = () => {
  return (
    <View className={styles.empty}>
      <GbIcons name="empty" size="100rpx" color="var(--app-primary-color)" />
      <Text>
        您还没有名片噢
      </Text>
      <Text>
        赶快来创建一张名片吧
      </Text>
      <GbButton style={{ marginTop: '20rpx', width: '70%' }} onClick={() => {
        Taro.navigateTo({ url: '/pages/editCardInfo/index' })
      }}>
        创建名片
      </GbButton>
    </View>
  );
}

export default Empty;