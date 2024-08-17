import { Button, Loading } from "@nutui/nutui-react-taro";
import styles from "./index.module.scss"

export default ({ nativeType, shape = "square", size = "large", type = "primary", style, onClick, loading, children }) => {
    return (
        <Button nativeType={nativeType} shape={shape} size={size} type={type} style={{ ...style }} className={styles.root}
            onClick={async () => {
                if (loading) return
                if (!onClick) return
                await onClick();
            }}>
            {loading ? <Loading type="circular" /> : children}
        </Button>
    );
}