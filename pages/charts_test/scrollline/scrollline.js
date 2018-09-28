var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var lineChart = null;
var startPos = null;
Page({
  data: {},
  touchHandler: function(e) {
    lineChart.scrollStart(e);
  },
  moveHandler: function(e) {
    lineChart.scroll(e);
  },
  touchEndHandler: function(e) {
    lineChart.scrollEnd(e);
    lineChart.showToolTip(e, {
      format: function(item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  createSimulationData: function() {
    var categories = [];
    var data = [];
    for (var i = 0; i < 10; i++) {
      categories.push((i + 1) + '月');
      data.push(Math.random() * 10000);
    }
    return {
      categories: categories,
      data: data
    }
  },
  onLoad: function(e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    var simulationData1 = this.createSimulationData();
    var simulationData2 = this.createSimulationData();
    lineChart = new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: simulationData1.categories,
      animation: false,
      series: [{
        name: 'A小组',
        data: simulationData1.data,
        format: function(val, name) {
          return val.toFixed(0) + '个';
        }
      }, {
        name: 'B小组',
        data: simulationData2.data,
        format: function(val, name) {
          return val.toFixed(0) + '个'
        }
      }],
      xAxis: {
        disableGrid: false
      },
      yAxis: {
        title: '销售额(个)',
        format: function(val) {
          return val.toFixed(0);
        },
        min: 0
      },
      width: windowWidth,
      height: 200,
      dataLabel: true,
      dataPointShape: true,
      enableScroll: true,
      extra: {
        lineStyle: 'curve'
      }
    });
  }
});