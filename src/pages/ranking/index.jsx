import styles from './index.module.scss'
import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import Body from '../../components/Body'
import { Image, Text, View } from '@tarojs/components'
import { Tabs } from '@nutui/nutui-react-taro'
import { useState } from 'react'
import classNames from 'classnames'

export default () => {
    const [activeTab, setActiveTab] = useState('month')
    
    // 排行榜数据
    const rankingData = [
        { id: 1, name: '荣****)', avatar: 'https://via.placeholder.com/50', amount: 4507.37 },
        { id: 2, name: 'L****e', avatar: 'https://via.placeholder.com/50', amount: 951.07 },
        { id: 3, name: '飞****哥', avatar: 'https://via.placeholder.com/50', amount: 903.43 },
        { id: 4, name: '凌****盗', avatar: 'https://via.placeholder.com/50', amount: 868.14 },
        { id: 5, name: '以****界', avatar: 'https://via.placeholder.com/50', amount: 834.25 },
        { id: 6, name: '简****单', avatar: 'https://via.placeholder.com/50', amount: 718.11 },
        { id: 7, name: '6****6', avatar: 'https://via.placeholder.com/50', amount: 680.01 },
        { id: 8, name: '小****n', avatar: 'https://via.placeholder.com/50', amount: 481.15 },
        { id: 9, name: '飞****飞', avatar: 'https://via.placeholder.com/50', amount: 454.15 },
        { id: 10, name: '木****南', avatar: 'https://via.placeholder.com/50', amount: 419.06 }
    ]

    return (
        <Page>
            <Navbar title="佣金排行" />
            <Body>
                <View className={styles.root}>
                    <View className={styles.header}>
                        <View className={styles.title}>排行榜</View>
                        <View className={styles.subtitle}>您目前暂无排名</View>
                    </View>
                    
                    <View className={styles.contentBox}>
                        <View className={styles.tabWrapper}>
                            <Tabs
                                value={activeTab}
                                onChange={(value) => setActiveTab(value)}
                                className={styles.tabsComponent}
                            >
                                <Tabs.TabPane title="周排行" value="week" />
                                <Tabs.TabPane title="月排行" value="month" />
                            </Tabs>
                        </View>
                        
                        <View className={styles.rankingList}>
                            {rankingData.map((item) => (
                                <View key={item.id} className={styles.rankingItem}>
                                    <View className={styles.rankLeft}>
                                        {item.id <= 3 ? (
                                            <View className={classNames(styles.rankNum, {
                                                [styles.top1]: item.id === 1,
                                                [styles.top2]: item.id === 2,
                                                [styles.top3]: item.id === 3,
                                            })}>
                                                <View className={styles.medal}>{item.id}</View>
                                            </View>
                                        ) : (
                                            <View className={styles.rankNum}>{item.id}</View>
                                        )}
                                        <Image className={styles.avatar} src={item.avatar} />
                                        <Text className={styles.name}>{item.name}</Text>
                                    </View>
                                    <Text className={styles.amount}>¥ {item.amount.toFixed(2)}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </Body>
        </Page>
    )
}