import { useMemo } from "react";
import { IconFont } from "@nutui/icons-react-taro";

// https://www.iconfont.cn/
export default ({ name, size = 'default', color = 'default', ...restProps }) => {
    const sizeA = useMemo(() => {
        switch (size) {
            case 'large':
                return 'var(--nutui-font-text-large)'
            case 'default':
                return 'var(--nutui-font-text)'
            case 'small':
                return 'var(--nutui-font-text-small)'
            case 'xs':
                return 'var(--nutui-font-text-xs)'
            case 'mini':
                return 'var(--nutui-font-text-mini)'
            default:
                return size
        }
    }, [size])
    const colorA = useMemo(() => {
        switch (color) {
            case 'default':
                return 'var(--app-text-color)'
            case 'primary':
                return 'var(--app-text-color-primary)'
            default:
                return color
        }
    }, [color])
    return (
        <IconFont fontClassName="iconfont" classPrefix="icon" name={name} size={sizeA} color={colorA} style={{ lineHeight: sizeA }} {...restProps} />
    );
}