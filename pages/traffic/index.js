//index.js
//获取应用实例

var common = require('../../config/common.js')
var userRepo = require('../../function/user.js')
var trafficRepo = require('../../function/traffic.js')
var toastRepo = require('../../function/toast.js')

var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hiddenVideo: false
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据

    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          return false;
        }else{
          userRepo.login(function(){

            trafficRepo.indexTraffic(function (ret) {
              if (ret.data.code == 200) {
                that.setData({
                  list: ret.data.data
                })
              }
            })

          });
        }
      }
    });


  },
  add:function(){
    wx.navigateTo({
      url: "traffic_add/index",
      //接口调用成功的回调方法
      success: function () {
      },
      fail: function () { },
      complete: function () { }
    })
  },
  detail:function(event){

    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: "traffic_detail/detail?id="+id,
      //接口调用成功的回调方法
      success: function () {
      },
      fail: function () { },
      complete: function () { }
    })

  }
})
