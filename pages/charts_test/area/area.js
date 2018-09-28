var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var areaChart = null;
Page({
  data: {},
  touchHandler: function(e) {
    console.log(areaChart.getCurrentDataIndex(e));
    areaChart.showToolTip(e);
  },
  onLoad: function(e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    areaChart = new wxCharts({
      canvasId: 'areaCanvas',
      type: 'area',
      //横坐标显示类别
      categories: ['1', '2', '3', '4', '5', '6', '7', '8'],
      animation: true,
      //数据列表
      series: [{
        name: '成交量',
        data: [32.3, 45.6, null, 23, 33.67, 34.12, 46.9, 12.45],
        format: function(val) {
          return val.toFixed(2) + '万';
        }
      }, {
        name: '成交量2',
        data: [12, 23, 32.3, 23, 36, 32.12, 33, 11],
        format: function(val) {
          return val.toFixed(2) + '万';
        }
      }],
      //y轴参数
      yAxis: {
        title: '成交金额 (万元)',
        format: function(val) {
          return val.toFixed(2);
        },
        min: 0,
        fontColor: '#8085e9',
        gridColor: '#8085e9',
        titleFontColor: '#f7a35c'
      },
      //x轴参数
      xAxis: {
        fontColor: '#7cb5ec',
        gridColor: '#7cb5ec'
      },
      extra: {
        legendTextColor: '#cb2431' //字体颜色（x轴下方字体）
      },
      width: windowWidth,
      height: 200
    });
  }
});