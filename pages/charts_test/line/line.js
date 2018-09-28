var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var lineChart = null;
Page({
  data: {
    //模拟数据源集合
    item: [{
        'name': '俄罗斯',
        'value': 'RS',
        'disabled': false
      },
      {
        'name': '美国',
        'value': 'US',
        'disabled': false
      },
      {
        'name': '中国',
        'value': 'CN',
        'disabled': false,
        'checked': true
      },
      {
        'name': '英国',
        'value': 'UK',
        'disabled': false
      },
      {
        'name': '日本',
        'value': 'JP',
        'disabled': true
      },
      {
        'name': '中国',
        'value': 'CN',
        'disabled': false,
        'checked': true
      },
      {
        'name': '英国',
        'value': 'UK',
        'disabled': false
      },
      {
        'name': '日本',
        'value': 'JP',
        'disabled': true
      },
      {
        'name': '中国',
        'value': 'CN',
        'disabled': false,
        'checked': true
      },
      {
        'name': '英国',
        'value': 'UK',
        'disabled': false
      },
      {
        'name': '日本',
        'value': 'JP',
        'disabled': true
      }
    ],
    //屏幕高度
    WindowHeight: 0,
    //屏幕高度
    WindowWidth: 0,
    //已选数据源列表
    SelectedDataSources: []
  },
  ChangeDataSource: function(e) {
    var that = this;
    console.info('你选择了' + e.detail.value);
    var str = e.detail.value;
    var dataSource = str.toString().split(',');
    console.log(str);
    that.setData({
      SelectedDataSources: str
    })
  },
  touchHandler: function(e) {
    console.log(lineChart.getCurrentDataIndex(e));
    lineChart.showToolTip(e, {
      // background: '#7cb5ec',
      format: function(item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  createSimulationData: function() {
    var categories = [];
    var data = [];
    for (var i = 0; i < 12; i++) {
      categories.push('2016-' + (i + 1));
      data.push(Math.random() * (20 - 10) + 10);
    }
    // data[4] = null;
    return {
      categories: categories,
      data: data
    }
  },
  updateData: function() {
    var simulationData = this.createSimulationData();
    var series = [{
      name: '成交量1',
      data: simulationData.data,
      format: function(val, name) {
        return val.toFixed(2) + '万';
      }
    }];
    lineChart.updateData({
      categories: simulationData.categories,
      series: series
    });
  },
  onLoad: function(e) {
    var that = this;
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    var simulationData = that.createSimulationData();
    lineChart = new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: simulationData.categories,
      animation: true,
      // background: '#f5f5f5',
      series: [{
        name: '成交量1',
        data: simulationData.data,
        format: function(val, name) {
          return val.toFixed(2) + '万';
        }
      }, {
        name: '成交量2',
        data: [2, 0, 0, 3, null, 4, 0, 0, 2, 0, 3, 2],
        format: function(val, name) {
          return val.toFixed(2) + '万';
        }
      }],
      xAxis: {
        title: '类别',
        disableGrid: true
      },
      yAxis: {
        title: '成交金额 (万元)',
        format: function(val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });

    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          WindowHeight: res.windowHeight,
          WindowWidth: res.windowWidth
        })
      },
    })
  }
});