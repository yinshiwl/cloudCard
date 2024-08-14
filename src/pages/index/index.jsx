import React, { useState } from 'react'
import { Text, View } from '@tarojs/components'
import styles from './index.module.scss'
import Tabbar from '../../components/Tabbar'
import Navbar from '../../components/Navbar'
import Body from '../../components/Body'
import Taro from '@tarojs/taro'
import GbButton from '../../components/GbButton'
import CardList from '../../components/CardList'
import GbIcons from '../../components/GbIcons'

export default () => {
  const [emptyCard, setEmptyCard] = useState(true);
  return (
    <View>
      <Navbar title="云联名片" />
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
      <GbIcons name="empty" size="100rpx" color="var(--app-primary-color)" />
      <Text>
        您还没有名片噢
      </Text>
      <Text>
        赶快来创建一张名片吧
      </Text>
      <GbButton style={{ marginTop: '20rpx', width: '70%' }} onClick={() => {
        Taro.navigateTo({
          url: '/pages/editCardInfo/index',
          success: function (res) {
            res.eventChannel.emit('editCardInfoPage', { data: { type: 'CREATE' } })
          }
        })
      }}>
        创建名片
      </GbButton>
    </View>
  );
}