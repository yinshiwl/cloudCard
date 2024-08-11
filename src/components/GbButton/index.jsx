import { Button } from "@nutui/nutui-react-taro";
import styles from "./index.module.scss"

export default ({ shape = "square", size = "large", type = "primary", style, onClick, children }) => {
    return (
        <Button shape={shape} size={size} type={type} style={{ ...style }} className={styles.root}
            onClick={async () => {
                await onClick();
            }}>
            {children}
        </Button>
    );
}