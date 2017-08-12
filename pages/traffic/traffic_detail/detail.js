//index.js
//获取应用实例
var common = require('../../../config/common.js')
var userRepo = require('../../../function/user.js')
var trafficRepo = require('../../../function/traffic.js')


var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hiddenVideo: false,
  },


  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (option) {
   
    var that = this;
    trafficRepo.detailTraffic(option.id,function (ret) {
      if (ret.data.code == 200) {

        that.setData({
          detail: ret.data.data
        })

      } else {
        toastRepo.toastError(ret.data.msg);
      }

    })

  },
  
})