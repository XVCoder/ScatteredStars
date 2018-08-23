// pages/test/index.js
Page({
  //页面的初始数据
  data: {
    //缩略图
    Thumbnail: '',
    //标语
    Slogan: [],
    //描述性文字
    Description: [],
    //小程序APPId
    AppId: [],
  },

  //生命周期函数--监听页面加载
  onLoad: function(options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: '关于亿发批零软件',
    })
    var slogan = ['专为批零企业量身定制的便捷型管理软件', '能充分满足批零企业的“全方位销售一体化”需求', '功能多达200余项，共五个版本'];
    var description = [{
      title: '简介',
      content: ['&nbsp;&nbsp;&nbsp;&nbsp;亿发智能批零管理软件(以下简称亿发软件)是专为批零企业量身定制的便捷型管理软件，能充分满足批零企业的“全方位销售一体化”需求，通过一个系统将订单、商品、客户、库存、资金、支付等信息统一处理;\n&nbsp;&nbsp;&nbsp;&nbsp;同一系统，功能多达200余项的亿发智能批零管理软件，现开发有基础版、超级版、集团版，其中超级版、集团版可根据需求综合选择PC、PDA、POS、PAD、手机等操作终端，以得到最完美的销售与管理模式。']
    }, {
      title: '合作联系',
      content: ['电话：1234-12345678', '时间：工作日 周一到周五、8:30-17:30', '邮箱：12345678@163.com']
    }, {
      title: '',
      content: ['网络出版服务许可证（总）网出证（湘）字第000号', '增值电信业务经营许可证','XXX号']
    }];
    var appId = 'wx62dce4ce042030bf';
    var thumbnail = 'http://5b0988e595225.cdn.sohucs.com/images/20180110/a7e2d504354c479785728cc1fb399ab8.jpeg';
    that.setData({
      Thumbnail: thumbnail,
      Slogan: slogan,
      Description: description,
      AppId: appId,
    })
  },
  //页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function() {

  },
  //用户点击右上角分享
  onShareAppMessage: function() {

  }
})