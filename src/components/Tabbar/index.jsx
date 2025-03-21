import { Tabbar } from "@nutui/nutui-react-taro";
import {
	Wallet,
    Layers,
    Category,
    Link,
    Apps,
} from "@nutui/icons-react-taro";
import Taro from "@tarojs/taro";
import { useCallback, useMemo } from "react";

export default ({ value }) => {
	const iconSize = useMemo(() => {
		return 20;
	}, []);
	const getUrl = useCallback((v) => {
		switch (v) {
			case 0:
				return "/pages/index/index";
			case 1:
				return "/pages/channel/index";
			case 2:
				return "/pages/promotion/index";
			case 3:
				return "/pages/myLink/index";
			case 4:
				return "/pages/income/index";
		}
	}, []);
	if (value === undefined || value === null) return null;
	return (
		<Tabbar
			fixed
			value={value}
			style={{ zIndex: 100, background: "var(--app-card-background)" }}
			onSwitch={(v) => {
				const url = getUrl(v);
				Taro.switchTab({
					url: url,
				});
			}}
		>
			<Tabbar.Item title="热门游戏" icon={<Apps size={iconSize} />} />
			<Tabbar.Item title="渠道中心" icon={<Layers size={iconSize} />} />
			<Tabbar.Item title="推广数据" icon={<Category size={iconSize} />} />
			<Tabbar.Item title="我的链接" icon={<Link size={iconSize} />} />
			<Tabbar.Item title="我的收益" icon={<Wallet size={iconSize} />} />
		</Tabbar>
	);
};
