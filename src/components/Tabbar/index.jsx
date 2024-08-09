import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'
import { useCallback } from 'react';

export default ({ value }) => {
    const getUrl = useCallback((v) => {
        switch (v) {
            case 0:
                return '/pages/index/index'
            case 1:
                return '/pages/category/index'
            case 2:
                return '/pages/find/index'
            case 3:
                return '/pages/cart/index'
            case 4:
                return '/pages/user/index'
        }
    }, [])
    if (value === undefined || value === null) return null;
    return (
        <Tabbar fixed value={value} onSwitch={(v) => {
            const url = getUrl(v)
            Taro.switchTab({
                url: url
            })
        }}>
            <Tabbar.Item title="首页" icon={<Home size={18} />} />
            <Tabbar.Item title="分类" icon={<Category size={18} />} />
            <Tabbar.Item title="发现" icon={<Find size={18} />} />
            <Tabbar.Item title="购物车" icon={<Cart size={18} />} />
            <Tabbar.Item title="我的" icon={<User size={18} />} />
        </Tabbar>
    );
}