var config = require("../config/common.js");

var cacheRepo = require("cache.js");
var toastRepo = require("toast.js");


var app = getApp();

function login(callback){

  var userInfo = getUserInfo();
  console.log(userInfo);
  if (userInfo.expire_at > Date.now() || !userInfo.openid){
    return false;
  }

    //更新数据
    wx.request({
      url: config.apiHost +'/api/auth/wxLogin',
      data: { userInfo: userInfo},
      header: {},
      method: 'POST',
      dataType: 'json',
      success: function(res) {
          if(res.data.code==200){
            setToken(res.data.data.token, res.data.data.expire_at);
            callback();
          }else{
            toastRepo.toastError('登录失败');
          }

      },
      fail: function(res) {},
      complete: function(res) {},
    })
  
 
};


function setToken(token,expire_at) {

  var userInfo = getUserInfo();
  userInfo.token = token;
  userInfo.expire_at = expire_at;
  wx.setStorageSync('userInfo', userInfo);//更新userInfo 

}

function getToken() {

  var userInfo = getUserInfo();
  if(!userInfo.token){
    toastRepo.toastError('登录过期,请重新进入小程序');
    return false;
  }
  return userInfo.token;

}


function getUserInfo() {

  try {

    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    userInfo.openid = user.openid;

    return userInfo;
  } catch (e) {
    console.log(e);
  }

}




module.exports = {
  login: login,
  getToken: getToken,
  setToken: setToken,
  getUserInfo: getUserInfo
  }