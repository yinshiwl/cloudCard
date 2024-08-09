export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    list: [{
      pagePath: 'pages/index/index'
    }, {
      pagePath: 'pages/user/index'
    }]
  },
  usingComponents: {}
})
