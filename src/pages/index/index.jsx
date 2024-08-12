import React, { useState } from 'react'
import { Text, View } from '@tarojs/components'
import styles from './index.module.scss'
import Tabbar from '../../components/Tabbar'
import Navbar from '../../components/Navbar'
import Body from '../../components/Body'
import Taro from '@tarojs/taro'
import GbButton from '../../components/GbButton'

export default () => {
  const [emptyCard, setEmptyCard] = useState(false);
  return (
    <View>
      <Navbar title="云联名片" color="#fff" />
      <Body hasTabbar>
        {emptyCard ? <Empty /> : <CardList />}
      </Body>
      <Tabbar value={0} />
    </View>
  )
}

function Empty() {
  return (
    <View className={styles.empty}>
      <Text>
        您还没有名片噢
      </Text>
      <Text>
        赶快来创建一张名片吧
      </Text>
      <GbButton style={{ marginTop: '20rpx', width: '70%' }} onClick={() => {
        Taro.navigateTo({
          url: '/pages/editCard/index',
          success: function (res) {
            res.eventChannel.emit('editCardPage', { data: { type: 'CREATE' } })
          }
        })
      }}>
        创建名片
      </GbButton>
    </View>
  );
}

function CardList() {
  return (
    <View className={styles.cardList}>
      <View className={styles.cardItem}>
        <Text>个人名片</Text>
      </View>
      <View className={styles.cardItem}>
        <Text>个人名片</Text>
      </View>
      <GbButton onClick={() => {
        Taro.navigateTo({
          url: '/pages/editCard/index',
          success: function (res) {
            res.eventChannel.emit('editCardPage', { data: { type: 'CREATE' } })
          }
        })
      }}>
        添加名片
      </GbButton>
    </View>
  );
}