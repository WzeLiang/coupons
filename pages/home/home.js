// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  openKan(){
    wx.navigateToMiniProgram({
      appId: 'wx1d82abea555be6e5',
    })
  },
  toEle(){
    
    wx.navigateToMiniProgram({
      appId: 'wxece3a9a4c82f58c9',
      path: 'ele-recommend-price/pages/guest/index?inviterId=a586364',
    })
  },
  toMei(){
    wx.navigateToMiniProgram({
      appId: 'wxde8ac0a21135c07d',
      path: 'dynamic-page/index?scene=fenxiao-third-assist&yaoxin=1&activityId=7&uid=240137908',

    })
    
  },
  toDing(){
    
    wx.navigateToMiniProgram({
      appId: 'wx1e113254eda17715',
      path: 'pages/minePackage/giftReceive/giftReceive?scene=67jpZNuJNm%2C2',
     
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (e) {
    console.log(e)
    let type　= e.target.dataset.type
    let title = type　=="ele"?'快来领饿了么券啦':'快来领美团券啦'
    let shareImg = type　=="ele"?'/static/elm.png':'/static/mt.png'
    return {
      title: title,
      path: '/pages/home/home',
      imageUrl: shareImg,
      success: (res) => {
        console.log("转发成功", res);
      },
      fail: (res) => {
        console.log("转发失败", res);
      }

    }
  }
})