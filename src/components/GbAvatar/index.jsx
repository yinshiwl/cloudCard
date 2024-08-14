import { Avatar } from "@nutui/nutui-react-taro";
import GbIcons from "../../components/GbIcons";

export default ({ ...restProps }) => {
    return (
        <Avatar
            size="large"
            background="var(--app-background)"
            color="var(--app-primary-color)"
            icon={<GbIcons name="default-avatar" color="var(--app-primary-color)" size="large" />}
            style={{ lineHeight: 'unset' }}
            {...restProps}
        />
    );
}