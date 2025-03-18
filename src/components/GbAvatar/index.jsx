import { Avatar } from "@nutui/nutui-react-taro";

export default ({ ...restProps }) => {
    return (
        <Avatar
            size="large"
            background="var(--app-background)"
            color="var(--app-primary-color)"
            style={{ lineHeight: 'unset' }}
            {...restProps}
        />
    );
}