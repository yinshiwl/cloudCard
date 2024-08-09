import React from 'react'
import { View } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import styles from './index.module.scss'
import Tabbar from '../../components/Tabbar'

function Index() {
  return (
    <View className={styles.root}>
      <View>
      云联名片是一款现代化的名片管理小程序，旨在帮助您在数字化时代轻松连接和管理人脉。通过云端技术，您可以随时随地创建、分享和保存名片，再也不用担心遗失或忘记携带名片。无论是商业会议、社交活动，还是日常交流，云联名片都能让您轻松交换信息，并高效管理您的联系人网络。
      </View>
      <Tabbar value={0} />
    </View>
  )
}

export default Index
