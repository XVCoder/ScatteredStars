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
    //更多（链接）
    MoreList: [],
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
      content: '1、专为批零商企量身定制的移动进销存管理软件。\n2、移动开单、移动送货、移动收款，PDA、手机均可无线打印，并可实现无线远程打印。\n3、实现手机管店，可实时查询销售单、货品、经营状况、库存数量、客户往来账务等数据。让老板身处何地都能一“手”掌控。\n4、支持PC电脑、PDA移动掌上电脑、POS收银机、Pad、手机（安卓/苹果）等多种终端，多种终端可任意组合，方便销售人员随时随地开单、查货、打印、盘点等。\n5、支持一键生成微店，客户可在线选购货品、下单、支付等。\n6、亿订货功能：批发客户用App自主选货、下单、支付等，只能看到自己的拿货价；订货会可用：订货会期间执行优惠价格，不做记忆，收银台自动结算账款。\n7、支持本地服务或阿里云服务器，三层数据安全防护体系，确保数据安全。',
      imageInfos: [{
        name: '',
        imageUrl: 'https://wx.yifarj.com/ydh/about/image013.png'
      }]
    }, {
      title: '联系我们',
      content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;亿发软件始终以“以客户满意为最终目标，为客户创造更多价值”作为核心服务使命，随着客户对信息化服务需求的提升，公司已组建一支高效率的服务团队，并建立一个多方位全过程的服务体系，实行7*24h多方式的技术支持（电话咨询，QQ远程，上门服务），以便随时解决客户日常问题，致力于为客户提供“专业、真诚、高效、智能”的信息化服务。\n\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为配合公司业务，现将进销存软件服务支持介绍如下：\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、产品远程安装，培训\n您购买亿发软件产品后，亿发软件工程师会与客户主动联系通过QQ远程桌面协助你进行产品安装。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、上门安装，培训\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果您所处的城市有我们的代理点，我们可免费上门安装、培训。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;若您身处异地，希望我们提供上门安装、实施服务，你只需支付一点点费用，我们的售后工程师会及时出现在您的面前，并可提供1 - 2次现场培训服务。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、专业培训\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果有需要，您还可以安排公司员工上我公司来进行专业产品培训，培训后我们将进行相关考试，以确保员工学会并熟练操作软件。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、产品升级\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了让您使用亿发软件无后顾之忧，我们承诺同版本软件服务期内免费升级（非定制开发用户）。',
      imageInfos: [{
        name: '',
        imageUrl: 'https://wx.yifarj.com/ydh/about/image006.jpg'
      }]
    }];
    let imageUrls = [];
    for (var i = 0; i < descriptions.length; i++) {
      for (var j = 0; j < descriptions[i].imageInfos.length; j++) {
        imageUrls.push(descriptions[i].imageInfos[j].imageUrl);
      }
    }
    var moreList = [{
      title: '更多亿发产品介绍',
      url: ''
    }, {
      title: '亿发软件使用的行业',
      url: ''
    }, {
      title: '选择你想要的小程序版本',
      url: ''
    }, {
      title: '亿发商城小程序 立即体验',
      url: ''
    }, {
      title: '亿发商家版小程序 立即体验',
      url: ''
    }]
    var qrCode = 'http://yifarj.com/statics/yf/images/wx.jpg';
    var appId = 'wx62dce4ce042030bf';
    var colors = ['#00ccff', '#aedd81', '#fad689', '#b5caa0', '#d0d0d0', '#eb7347'];
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
      MoreList: moreList,
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