import { Tabbar } from '@nutui/nutui-react-taro'
import { Star, Home, User } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'
import { useCallback, useMemo } from 'react';

export default ({ value }) => {
    // test
    const iconSize = useMemo(() => {
        return 20;
    }, [])
    const getUrl = useCallback((v) => {
        switch (v) {
            case 0:
                return '/pages/index/index'
            case 1:
                return '/pages/collect/index'
            case 2:
                return '/pages/user/index'
        }
    }, [])
    if (value === undefined || value === null) return null;
    return (
        <Tabbar fixed value={value} style={{ zIndex: 100, background: 'var(--app-card-background)' }} onSwitch={(v) => {
            const url = getUrl(v)
            Taro.switchTab({
                url: url
            })
        }}>
            <Tabbar.Item title="首页" icon={<Home size={iconSize} />} />
            <Tabbar.Item title="收藏" icon={<Star size={iconSize} />} />
            <Tabbar.Item title="我的" icon={<User size={iconSize} />} />
        </Tabbar>
    );
}