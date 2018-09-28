var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var pieChart = null;
Page({
  data: {
  },
  touchHandler: function (e) {
    console.log(pieChart.getCurrentDataIndex(e));
  },
  onLoad: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '扇区1',
        data: 0.78,
      }, {
        name: '扇区2',
        data: 0.88,
      }],
      width: windowWidth,
      height: 300,
      dataLabel: true,
    });
  }
});