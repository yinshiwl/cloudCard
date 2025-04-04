export default ({
  pages: [
    'pages/index/index',
    'pages/collect/index',
    'pages/user/index',
    'pages/editCardInfo/index',
    'pages/editCard/index',
    'pages/viewCard/index',
    'pages/notify/index',
    'pages/categoryAll/index',
    'pages/channel/index',
    'pages/promotion/index',
    'pages/gameFilter/index',
    'pages/gameDetail/index',
    'pages/income/index',
    'pages/myLink/index',
    'pages/ranking/index',
  ],
  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置的效果展示"
    }
  },
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
        pagePath: 'pages/channel/index'
      },
      {
        pagePath: 'pages/promotion/index'
      },
      {
        pagePath: 'pages/myLink/index'
      },
      {
        pagePath: 'pages/income/index'
      },
      // {
      //   pagePath: 'pages/collect/index'
      // },
      // {
      //   pagePath: 'pages/user/index'
      // }
    ]
  },
  usingComponents: {},
  lazyCodeLoading: "requiredComponents"
})
