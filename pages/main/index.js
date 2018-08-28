var util = require('../../utils/util.js');
Page({
  //页面参数
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    //我的日记列表
    MyDiaryList: [],
    //匿名日记列表
    AnonymousDiaryList: [],
  },
  //加载事件
  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    })
    that.RefreshData();
  },
  //刷新页面数据
  RefreshData: function() {
    var that = this;
    var myDiaryList = [{
      id: 0,
      content: '这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试',
      createdTime: util.formatTime(new Date)
    }, {
      id: 1,
      content: '这也是一个测试',
      createdTime: util.formatTime(new Date)
    }];
    var anonymousDiaryList = [{
      id: 0,
      content: '这是一个测试',
      createdTime: util.formatTime(new Date)
    }, {
      id: 1,
      content: '这也是一个测试',
        createdTime: util.formatTime(new Date)
    }];
    that.setData({
      MyDiaryList: myDiaryList,
      AnonymousDiaryList: anonymousDiaryList,
    })
  },
  //下拉刷新
  onPullDownRefresh: function() {

  },
  //滑动切换tab
  bindChange: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });

  },
  //点击tab切换
  switchNav: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  //点击标题加载详情页
  ClickItem: function(option) {

  }
})