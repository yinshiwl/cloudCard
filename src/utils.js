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
    async request({ api, method = 'POST', data, success, fail, header, showLoading = true, showAlert = true }) {
        showLoading && Taro.showLoading({ title: '加载中...', mask: true });
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
        showLoading && Taro.hideLoading();
        if (resp.statusCode !== 200 && !showAlert) {
            console.error(resp)
            return {
                status: resp.statusCode,
                message: '请求错误',
            }
        }
        if (resp.statusCode !== 200) {
            console.error(resp)
            Taro.showToast({
                title: '请求错误',
                icon: 'error',
            });
            return {
                status: resp.statusCode,
                message: '请求错误',
            };
        }
        if (resp?.data?.status !== 0 && showAlert) {
            Taro.showToast({
                title: resp?.data?.message,
                icon: 'error',
            });
        }
        if (resp.data) return resp.data;
        return {
            status: 9999,
            message: '未知错误',
        };
    }
    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    async onLike(id, liked) {
        const resp = await this.request({
            api: '/api/card/like',
            data: {
                cardId: id,
                liked
            },
            showLoading: false
        })
        return resp;
    }
    async onCollect(id, collected) {
        const resp = await this.request({
            api: '/api/card/collect',
            data: {
                cardId: id,
                collected
            },
            showLoading: false
        })
        return resp;
    }
    reloadCardPage() {
        config?.reloadCardPage?.(config?.currentCardPage?.page ?? 1)
    }
}
const utils = new Utils();
export default utils;

export const config = {
    reloadCardPage: null,
    currentCardPage: null,
}