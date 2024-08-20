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
    async request({ api, method = 'POST', data, success, fail, header }) {
        const url = `${YS_API_URL}${api}`
        const resp = await Taro.request({
            url,
            method,
            data,
            success,
            fail,
            header: {
                token: Taro.getStorageSync('token'),
                'accept': 'application/json',
                'content-type': 'application/json',
                ...header
            },
        })
        if (resp.data) return resp.data;
        return resp;
    }
    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
}
const utils = new Utils();
export default utils;