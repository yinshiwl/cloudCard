import React, { useEffect, useState } from 'react'
import { Text, View } from '@tarojs/components'
import styles from './index.module.scss'
import Tabbar from '../../components/Tabbar'
import utils from '../../utils'
import Navbar from '../../components/Navbar'
import Body from '../../components/Body'
import { Button, Empty } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import GbButton from '../../components/GbButton'

function Index() {

  return (
    <View>
      <Navbar title="云联名片" color="#fff" />
      <Body hasTabbar>
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
      </Body>
      <Tabbar value={0} />
    </View>
  )
}

export default Index
