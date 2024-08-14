import { Image, ImagePreview } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components"
import { useMemo, useState } from "react";
import styles from "./index.module.scss";

export default ({ }) => {
    const images = useMemo(() => {
        return [
            {
                src: '//fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
            },
            {
                src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
            },
            {
                src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
            },
            {
                src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
            },
            {
                src: '//fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
            }
        ]
    }, [])
    const [init, setInit] = useState(0)
    const [showPreview, setShowPreview] = useState(false)
    return (
        <View className={styles.root}>
            {images.map((image, index) => (
                <Image
                    key={index}
                    onClick={() => {
                        setShowPreview(true)
                        setInit(index + 1)
                    }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }}
                    src={image.src}
                    alt={image.src}
                />
            ))}
            <ImagePreview
                autoPlay={false}
                images={images}
                visible={showPreview}
                defaultValue={init}
                onClose={() => setShowPreview(false)}
                indicator={true}
            />
        </View>
    );
}