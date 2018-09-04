// pages/writing/index.js
Page({
  //页面参数
  data: {
    //日记Id
    DiaryId: 0,
    //日记内容
    Content: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
  },
  //加载事件
  onLoad: function(options) {
    var that = this;
    that.setData({
      DiaryId: options.DiaryId,
      Content: options.Content
    })
  },
  //下拉刷新
  onPullDownRefresh: function() {

  },
  //取消
  Cancel: function() {
    wx.navigateBack({
      delta: 1,
    })
  },
  //保存
  Save: function(option) {
    var that = this;
    that.setData({
      
    })
  }
})