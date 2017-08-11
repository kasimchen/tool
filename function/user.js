var config = require("../config/common.js");

var request = require("request.js");

var app = getApp()

function login(){

  app.getUserInfo(function (userInfo) {
    //更新数据

    wx.request({
      url: config.apiHost +'/api/auth/wxLogin',
      data: { userInfo: userInfo},
      header: {},
      method: 'POST',
      dataType: 'json',
      success: function(res) {

      console.log(res);

      },
      fail: function(res) {},
      complete: function(res) {},
    })
  
  })
 
}



module.exports = {
  login: login
  }