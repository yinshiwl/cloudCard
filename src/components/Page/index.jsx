import { Dialog } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";


export default ({ children, ...restProps }) => {
    return (
        <View {...restProps} >
            {children}
            <Dialog id="dialog" closeOnOverlayClick={false} ></Dialog>
        </View>
    );
}