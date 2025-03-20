import Navbar from "../../components/Navbar";
import Body from "../../components/Body";
import DefaultCard from "../../components/CardTheme/DefaultTheme";
import { useState } from "react";
import { FixedNav } from "@nutui/nutui-react-taro";
import Page from "../../components/Page";
import Taro, { useRouter } from "@tarojs/taro";
import useCardData from "../../common/hooks/useCardData";

export default () => {
	const router = useRouter();
	const { id } = router.params;
	const { cardInfo } = useCardData({ id, isBrowse: true });
	const { name } = cardInfo || {};
	return (
		<Page>
			<Navbar title={`${name}的名片`} back></Navbar>
			<Body>
				<DefaultCard cardInfo={cardInfo} />
				<BbFixedNav cardInfo={cardInfo} />
			</Body>
		</Page>
	);
};

function BbFixedNav({ cardInfo }) {
	const [visible, setVisible] = useState(true);
	const { id } = cardInfo || {};
	const list = [
		{
			id: 1,
			text: "编辑资料",
			icon: `${YS_API_URL}/assets/images/edit.svg`,
		},
		// {
		//     id: 2,
		//     text: '配置主题',
		//     icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png',
		// },
		// {
		//     id: 3,
		//     text: '预览名片',
		//     icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png',
		// },
		// {
		//     id: 4,
		//     text: '生成海报',
		//     icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png',
		// },
	];
	const onChange = (value) => {
		setVisible(value);
	};
	const onSelect = () => {
		Taro.navigateTo({ url: "/pages/editCardInfo/index?id=" + id });
	};
	return (
		<FixedNav
			type="left"
			list={list}
			inactiveText="展开"
			activeText="收起"
			visible={visible}
			onChange={onChange}
			onSelect={onSelect}
			position={{ bottom: "52px" }}
		/>
	);
}
