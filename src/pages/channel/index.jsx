import { Text, View } from '@tarojs/components';
import Page from '../../components/Page';
import Tabbar from '../../components/Tabbar';
import Body from '../../components/Body';
import Navbar from '../../components/Navbar';
import styles from './index.module.scss';
import InfoCard from './parts/InfoCard';

const Channel = () => {
    return (
        <Page className={styles.root}>
            <Navbar title="渠道中心" titleCenter fontSize="40rpx" ></Navbar>
            <Body hasTabbar>
                <InfoCard />
                <Text className={styles.tips}>注：合作商可获得子渠道收益10%【官方奖励，不影响下级收益】</Text>
            </Body>
            <Tabbar value={1} />
        </Page>
    );
}

export default Channel;