import { Button } from "@nutui/nutui-react-taro";
import styles from "./index.module.scss"

export default ({ nativeType, shape = "square", size = "large", type = "primary", style, onClick, children }) => {
    return (
        <Button nativeType={nativeType} shape={shape} size={size} type={type} style={{ ...style }} className={styles.root}
            onClick={async () => {
                onClick && await onClick();
            }}>
            {children}
        </Button>
    );
}