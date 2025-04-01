import { View, Text } from '@tarojs/components'
import { Cell } from '@nutui/nutui-react-taro'
import { ToPay } from '@nutui/icons-react-taro'
import Tabbar from "../../components/Tabbar"
import Navbar from "../../components/Navbar"
import Body from "../../components/Body"
import Page from "../../components/Page"
import Card from "../../components/Card"
import styles from "./index.module.scss"
import Taro from '@tarojs/taro'

export default () => {
	const incomeData = {
		currentBalance: 0,
		totalIncome: 0,
		yesterdayIncome: 0,
		totalWithdraw: 0
	}

	const goToRanking = () => {
		Taro.navigateTo({
			url: '/pages/ranking/index'
		})
	}

	return (
		<Page className={styles.root}>
			<Navbar title="我的收益" />
			<Body hasTabbar>
				<Card>
					<View className={styles.balanceCard}>
						<View className={styles.balanceHeader}>
							<Text className={styles.label}>当前余额(元)</Text>
							<View className={styles.rankingBtn} onClick={goToRanking}>
								<Text>佣金排行 🏆</Text>
							</View>
						</View>
						<Text className={styles.amount}>{incomeData.currentBalance}</Text>
						<View className={styles.stats}>
							<View className={styles.statItem}>
								<Text className={styles.label}>累计收入(元)</Text>
								<Text className={styles.value}>{incomeData.totalIncome}</Text>
							</View>
							<View className={styles.statItem}>
								<Text className={styles.label}>昨日收入(元)</Text>
								<Text className={styles.value}>{incomeData.yesterdayIncome}</Text>
							</View>
							<View className={styles.statItem}>
								<Text className={styles.label}>累计提现(元)</Text>
								<Text className={styles.value}>{incomeData.totalWithdraw}</Text>
							</View>
						</View>
						<View className={styles.withdrawBtn}>提现</View>
					</View>

					<View className={styles.incomeList}>
						<Cell.Group title="收益明细">
							<Cell 
								title={
									<View className={styles.cellTitle}>
										<ToPay className={styles.icon} />
										<Text>推广收益</Text>
									</View>
								}
								description="2024-03-21 12:00"
								extra={<Text className={styles.income}>+88.88</Text>}
							/>
						</Cell.Group>
					</View>
				</Card>
			</Body>
			<Tabbar value={4} />
		</Page>
	)
}
