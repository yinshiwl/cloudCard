import Taro from "@tarojs/taro"

class Utils {
    getNavBarHeight() {
        const systemInfo = Taro.getSystemInfoSync()
        const menuButtonInfo = Taro.getMenuButtonBoundingClientRect()
        const statusBarHeight = systemInfo.statusBarHeight ?? 44

        const menuButtonStatusBarGap = menuButtonInfo.top - statusBarHeight

        const navBarHeight = menuButtonStatusBarGap * 2 + menuButtonInfo.height + statusBarHeight
        return navBarHeight;
    }
}
const utils = new Utils();
export default utils;