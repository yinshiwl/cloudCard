import Taro from "@tarojs/taro"
import dayjs from "dayjs"

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
                token: this.getToken(),
                'accept': 'application/json',
                'content-type': 'application/json',
                ...header
            },
        })
        showLoading && Taro.hideLoading();
        const { data: respData, statusCode } = resp || {};
        if (statusCode !== 200 && !showAlert) {
            console.error(resp)
            return {
                status: statusCode,
                message: '请求错误',
            }
        }
        if (statusCode !== 200) {
            console.error(resp)
            Taro.showToast({
                title: '请求错误',
                icon: 'error',
            });
            return {
                status: statusCode,
                message: '请求错误',
            };
        }
        if (respData?.status !== 0 && showAlert) {
            Taro.showToast({
                title: respData?.message,
                icon: 'error',
            });
        }
        if (respData?.status === 401 && api !== '/api/user/info') {
            this.setToken(null)
        }
        if (respData) return respData;
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
    async onBrowse(id) {
        const resp = await this.request({
            api: '/api/card/browse',
            data: {
                cardId: id
            },
            showLoading: false
        })
        return resp;
    }
    getToken() {
        const token = Taro.getStorageSync('token')
        return token || ""
    }
    setToken(token) {
        Taro.setStorageSync('token', token || null)
    }
    async fileUpload(file) {
        if (!file) return
        const resp = await Taro.uploadFile({
            url: `${YS_API_URL}/api/file/upload`,
            filePath: file,
            name: 'file',
            header: {
                'Content-Type': 'multipart/form-data',
                token: this.getToken(),
            },
        }).then(res => {
            const resp = JSON.parse(res.data)
            return resp?.model?.fileId;
        }).catch(err => {
            console.error('Upload failed:', err);
            throw err;
        });
        return resp
    }
    getFileUrl(fileId) {
        if (!fileId) return null
        return `${YS_API_URL}/api/file/${fileId}`
    }
    formatTime(timestamp, format = 'YYYY-MM-DD HH:mm:ss') {
        // 判断时间戳是否为秒级（10 位）
        if (timestamp.toString().length === 10) {
            timestamp = timestamp * 1000; // 转换为毫秒级时间戳
        }

        // 格式化时间
        const formatted = dayjs(timestamp).format(format);
        return formatted;
    }
}
const utils = new Utils();
export default utils;