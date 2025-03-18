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