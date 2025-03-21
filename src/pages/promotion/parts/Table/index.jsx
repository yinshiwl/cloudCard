import { Table as NutuiTable } from "@nutui/nutui-react-taro";
import { Text, View } from "@tarojs/components";
import { useState } from "react";
import styles from "./index.module.scss";
import { Upload } from "@nutui/icons-react-taro";

const Table = () => {
	const [columns] = useState([
		{
			title: "ID",
			key: "id",
			align: "center",
			render: (_record, index) => {
				return index + 1;
			},
		},
		{
			title: "姓名",
			key: "name",
			align: "center",
		},
		{
			title: "性别",
			key: "gender",
			align: "center",
		},
		{
			title: "学历",
			key: "record",
			align: "center",
		},
	]);

	const [data] = useState([
		{
			name: "Tom",
			gender: "男",
			record: "小学",
		},
		{
			name: "Lucy",
			gender: "女",
			record: "本科",
		},
		{
			name: "Jack",
			gender: "男",
			record: "高中",
		},
	]);

	return (
		<View className={styles.root}>
			<View className={styles.title}>
				<View className={styles.left}>
					<Upload className={styles.icon} />
					<Text className={styles.text}>每日数据</Text>
				</View>
				<Text className={styles.right}>注释：每日18:00前更新昨日推广数据</Text>
			</View>
			<View className={styles.total}>
				<Text>合计：</Text>
				<Text>活跃：3</Text>
				<Text>收益：￥888.88</Text>
			</View>
			<NutuiTable columns={columns} data={data} />
		</View>
	);
};

export default Table;
