//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World 233',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goViewTest: function(){
    wx.navigateTo({
      url: '../view/view',
    })
  },
  goWallet: function(){
    wx.navigateTo({
      url: '../wallet/list/list',
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })

      that.goWallet();
    })
  }
})
