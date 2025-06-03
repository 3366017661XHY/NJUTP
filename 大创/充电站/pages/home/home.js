// 页面逻辑定义
Page({
  // 跳转至推荐页面
  goToRecommend: function() {
    wx.navigateTo({
      url: '/pages/recommend/recommend'
    })
  }
})