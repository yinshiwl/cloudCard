import Tabbar from '../../components/Tabbar'
import Navbar from '../../components/Navbar'
import Body from '../../components/Body'
import Page from '../../components/Page'
import Swiper from './parts/Swiper'

export default () => {
  return (
    <Page>
      <Navbar title="云联名片" />
      <Body hasTabbar>
        <Swiper />
      </Body>
      <Tabbar value={0} />
    </Page>
  )
}