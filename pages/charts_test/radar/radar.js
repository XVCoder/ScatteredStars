var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var radarChart = null;
Page({
  data: {},
  touchHandler: function(e) {
    console.log(radarChart.getCurrentDataIndex(e));
  },
  onReady: function(e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    radarChart = new wxCharts({
      canvasId: 'radarCanvas',
      type: 'radar',
      categories: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8'],
      series: [{
        name: '分布情况',
        data: [90, 110, 125, 95, 87, 122, 78, 123]
      }],
      width: windowWidth,
      height: 200,
      extra: {
        radar: {
          max: 150
        }
      }
    });
  }
});