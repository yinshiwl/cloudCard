import Tabbar from '../../components/Tabbar'
import Navbar from '../../components/Navbar'
import Body from '../../components/Body'
import CardList from '../../components/CardList'
import Page from '../../components/Page'
import useCardPage from '../../common/hooks/useCardPage'
import Empty from './parts/Empty'

export default () => {
  const { cardPage, getCardPage } = useCardPage();
  return (
    <Page>
      <Navbar title="云联名片" />
      <Body hasTabbar>
        {cardPage?.data?.length === 0 ? <Empty /> : <CardList currentPage={cardPage} loadData={getCardPage} />}
      </Body>
      <Tabbar value={0} />
    </Page>
  )
}