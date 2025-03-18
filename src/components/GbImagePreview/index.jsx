import { Image, ImagePreview } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components"
import { useMemo, useState } from "react";
import styles from "./index.module.scss";
import Taro from "@tarojs/taro";
import utils from "../../common/utils";
import { config } from "../../common/config";
import GbIcons from "../GbIcons";

export default ({ columns = 5, imageList = [], setImageList, uploadLength = 0, uploadIcon, uploadLabel }) => {
    const [init, setInit] = useState(0)
    const [showPreview, setShowPreview] = useState(false)

    const imagePreview = useMemo(() => {
        if (!imageList.length) return []
        return imageList.map(image => {
            return { src: utils.getFileUrl(image) }
        })
    }, [imageList])
    const isUpload = useMemo(() => {
        return uploadLength > 0
    }, [uploadLength])
    return (
        <View className={styles.root} style={{
            "--part-grid-columns": columns,
            "--part-grid-gap": isUpload ? '40rpx' : '10rpx',
        }}>
            {imageList.map((image, index) => (
                <Image
                    key={index}
                    onClick={() => {
                        setShowPreview(true)
                        setInit(index + 1)
                    }}
                    src={utils.getFileUrl(image)}
                    alt={image}
                >
                    {isUpload && <GbIcons name="close_2" size="40rpx" className={styles.delete} onClick={(e) => {
                        e.stopPropagation()
                        setImageList([...imageList.filter(item => item !== image)])
                    }} />}
                </Image>
            ))}
            <Uploader uploadLength={uploadLength} uploadIcon={uploadIcon} uploadLabel={uploadLabel} imageList={imageList} setImageList={setImageList} />
            <ImagePreview
                autoPlay={false}
                images={imagePreview}
                visible={showPreview}
                defaultValue={init}
                onClose={() => setShowPreview(false)}
                indicator
                closeOnContentClick
            />
        </View>
    );
}


function Uploader({ uploadLength = 0, uploadIcon, uploadLabel, imageList = [], setImageList }) {
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