import { View } from "@tarojs/components"
import Taro from "@tarojs/taro"
import { useMemo } from "react"
import styles from "./index.module.scss"
import config from "../../../../../config"
import utils from "../../../../common/utils"

const Uploader = ({ uploadLength = 0, uploadIcon, uploadLabel, imageList = [], setImageList }) => {
    const showUpload = useMemo(() => {
        if (!uploadLength) return false
        return imageList.length < uploadLength
    }, [imageList, uploadLength])
    if (!showUpload) return null
    return (
        <View className={styles.uploadWrapper} onClick={() => {
            Taro.chooseImage({
                count: uploadLength - imageList.length,
                success(res) {
                    Taro.showLoading({ title: '上传中...', mask: true });
                    const tempFiles = res.tempFiles;
                    let beyondSize = 0
                    const uploadTasks = tempFiles.map(({ path: filePath, size }) => {
                        if (size > config.uploadMaxSize) {
                            beyondSize += 1;
                            return null;
                        }
                        return utils.fileUpload(filePath);
                    });
                    Promise.all(uploadTasks.filter((x => x)))
                        .then(results => {
                            Taro.hideLoading();
                            if (beyondSize) {
                                Taro.showToast({
                                    title: `${beyondSize}张图超过${config.uploadMaxSize / 1024 / 1024}M`,
                                    icon: 'none',
                                });
                            }
                            setImageList([...imageList, ...results])
                        })
                }
            })
        }}>
            <View className={styles.upload} >
                {uploadIcon}
                {uploadLabel}
            </View>
        </View>
    );
}

export default Uploader;