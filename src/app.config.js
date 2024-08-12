export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/collect/index',
    'pages/user/index',
    'pages/editCardInfo/index',
    'pages/editCard/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: 'pages/index/index'
      },
      {
        pagePath: 'pages/collect/index'
      },
      {
        pagePath: 'pages/user/index'
      }
    ]
  },
  usingComponents: {}
})
