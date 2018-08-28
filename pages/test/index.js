// pages/test/index.js
Page({
  //页面的初始数据
  data: {
    //缩略图
    Thumbnail: '',
    //标语
    Slogan: [],
    //描述性文字
    Descriptions: [],
    //详情说明文字标题的背景色
    ItemTitleBackColor: [],
    //图片链接
    ImageUrls: [],
    //二维码
    QRCode: '',
    //小程序APPId
    AppId: [],
  },

  //生命周期函数--监听页面加载
  onLoad: function(options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: '关于亿发批零软件',
    })
    var thumbnail = 'http://yifarj.com/statics/yf/images/logo.jpg';
    var slogan = ['专为批零企业量身定制的便捷型管理软件', '能充分满足批零企业的“全方位销售一体化”需求', '功能多达200余项，共五个版本'];
    var descriptions = [{
      title: '亿发智能批零管理软件',
      content: ['1、专为批零商企量身定制的移动进销存管理软件。\n2、移动开单、移动送货、移动收款，PDA、手机均可无线打印，并可实现无线远程打印。\n3、实现手机管店，可实时查询销售单、货品、经营状况、库存数量、客户往来账务等数据。让老板身处何地都能一“手”掌控。\n4、支持PC电脑、PDA移动掌上电脑、POS收银机、Pad、手机（安卓/苹果）等多种终端，多种终端可任意组合，方便销售人员随时随地开单、查货、打印、盘点等。\n5、支持一键生成微店，客户可在线选购货品、下单、支付等。\n6、亿订货功能：批发客户用App自主选货、下单、支付等，只能看到自己的拿货价；订货会可用：订货会期间执行优惠价格，不做记忆，收银台自动结算账款。\n7、支持本地服务或阿里云服务器，三层数据安全防护体系，确保数据安全。'],
      imageInfos: [{
        name: 'xxxxxxxx',
        imageUrl: 'http://t2.hddhhn.com/uploads/tu/201610/198/scx30045vxd.jpg'
      }]
    }, {
      title: '适用于',
      content: ['文体、日用百货、视频、玩具、酒店用品、五金、建材、茶叶、医疗器械、服装鞋帽、家电、母婴、冷链等各行各业的批发和零售企业、商贸公司、连锁企业、商超、直营店、个体店等\n多仓库管理，多店管理，多异地销售的中大型商企'],
      imageInfos: [{
        name: 'xxxxxxxx',
        imageUrl: 'http://t2.hddhhn.com/uploads/tu/201610/198/jnrqtcnyywt.jpg'
      }, {
        name: 'xxxxxxxx',
        imageUrl: 'http://t2.hddhhn.com/uploads/tu/201707/115/51.jpg'
      }]
    }, {
      title: '测试',
      content: ['1、专为批零商企量身定制的移动进销存管理软件。\n2、移动开单、移动送货、移动收款，PDA、手机均可无线打印，并可实现无线远程打印。\n3、实现手机管店，可实时查询销售单、货品、经营状况、库存数量、客户往来账务等数据。让老板身处何地都能一“手”掌控。\n4、支持PC电脑、PDA移动掌上电脑、POS收银机、Pad、手机（安卓/苹果）等多种终端，多种终端可任意组合，方便销售人员随时随地开单、查货、打印、盘点等。\n5、支持一键生成微店，客户可在线选购货品、下单、支付等。\n6、亿订货功能：批发客户用App自主选货、下单、支付等，只能看到自己的拿货价；订货会可用：订货会期间执行优惠价格，不做记忆，收银台自动结算账款。\n7、支持本地服务或阿里云服务器，三层数据安全防护体系，确保数据安全。'],
      imageInfos: []
    }, {
      title: '',
      content: ['1、专为批零商企量身定制的移动进销存管理软件。\n2、移动开单、移动送货、移动收款，PDA、手机均可无线打印，并可实现无线远程打印。\n3、实现手机管店，可实时查询销售单、货品、经营状况、库存数量、客户往来账务等数据。让老板身处何地都能一“手”掌控。\n4、支持PC电脑、PDA移动掌上电脑、POS收银机、Pad、手机（安卓/苹果）等多种终端，多种终端可任意组合，方便销售人员随时随地开单、查货、打印、盘点等。\n5、支持一键生成微店，客户可在线选购货品、下单、支付等。\n6、亿订货功能：批发客户用App自主选货、下单、支付等，只能看到自己的拿货价；订货会可用：订货会期间执行优惠价格，不做记忆，收银台自动结算账款。\n7、支持本地服务或阿里云服务器，三层数据安全防护体系，确保数据安全。'],
      imageInfos: [{
        name: '',
        imageUrl: 'http://t2.hddhhn.com/uploads/tu/201707/115/52.jpg'
      }, {
        name: '',
        imageUrl: 'http://t2.hddhhn.com/uploads/tu/201707/115/58.jpg'
      }, {
        name: '',
        imageUrl: 'http://t2.hddhhn.com/uploads/tu/201707/200/1.jpg'
      }]
    }, {
      title: '123',
      content: [],
      imageInfos: []
      }, {
        title: '123',
        content: [],
        imageInfos: []
      }, {
        title: '123',
        content: [],
        imageInfos: []
      }, {
        title: '123',
        content: [],
        imageInfos: []
      }, {
        title: '123',
        content: [],
        imageInfos: []
      }, {
        title: '123',
        content: [],
        imageInfos: []
      }, {
        title: '123',
        content: [],
        imageInfos: []
      }, {
        title: '123',
        content: [],
        imageInfos: []
      }, {
        title: '123',
        content: [],
        imageInfos: []
      }, {
        title: '123',
        content: [],
        imageInfos: []
      }, {
        title: '123',
        content: [],
        imageInfos: []
      }, {
        title: '123',
        content: [],
        imageInfos: []
      }];
    let imageUrls = [];
    for (var i = 0; i < descriptions.length; i++) {
      for (var j = 0; j < descriptions[i].imageInfos.length; j++) {
        imageUrls.push(descriptions[i].imageInfos[j].imageUrl);
      }
    }
    var qrCode = 'http://yifarj.com/statics/yf/images/wx.jpg';
    var appId = 'wx62dce4ce042030bf';
    var colors = ['#00ccff', '#aedd81', '#fad689', '#b5caa0', '#d0d0d0','#eb7347'];
    let backColors = [];
    for (var i = 0; i < descriptions.length; i++) {
      backColors.push(colors[i % colors.length]);
    }
    that.setData({
      Thumbnail: thumbnail,
      Slogan: slogan,
      Descriptions: descriptions,
      ItemTitleBackColor: backColors,
      ImageUrls: imageUrls,
      QRCode: qrCode,
      AppId: appId,
    })
  },
  //页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function() {

  },
  //用户点击右上角分享
  onShareAppMessage: function() {

  },
  //预览图片
  Preview: function(option) {
    var that = this;
    //预览图片
    wx.previewImage({
      current: option.currentTarget.dataset.url, // 当前显示图片的http链接
      urls: that.data.ImageUrls, // 需要预览的图片http链接列表
    });
  }
})