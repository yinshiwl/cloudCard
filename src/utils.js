import Taro from "@tarojs/taro"

class Utils {
    getNavBarData() {
        const systemInfo = Taro.getSystemInfoSync()
        const menuButtonInfo = Taro.getMenuButtonBoundingClientRect()
        const statusBarHeight = systemInfo.statusBarHeight ?? 44

        const menuButtonStatusBarGap = menuButtonInfo.top - statusBarHeight

        const navBarHeight = menuButtonStatusBarGap * 2 + menuButtonInfo.height + statusBarHeight
        const paddingX = systemInfo.screenWidth - menuButtonInfo.right
        return { navBarHeight, paddingX, statusBarHeight }
    }
    getOpenerEventChannel() {
        return Taro.getCurrentInstance().page.getOpenerEventChannel();
    }
}
const utils = new Utils();
export default utils;