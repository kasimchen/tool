var config = require("../config/common.js");
var toastRepo = require("toast.js");
var userRepo = require("user.js");

function createTraffic(data,callback){

  var userInfo = userRepo.getUserInfo();
  var header = { 'Authorization': 'Bearer' + userInfo.token };

  wx.request({
    url: config.apiHost + '/api/traffic/create',
    data: data,
    header: header,
    method: 'POST',
    dataType: 'json',
    success: function (res) {
      callback(res);
    },
    fail: function (res) { },
    complete: function (res) { },
  })
}

function indexTraffic(callback) {

  var userInfo = userRepo.getUserInfo();

  var header = { 'Authorization': 'Bearer' + userInfo.token };
  wx.request({
    url: config.apiHost + '/api/traffic/index',
    header: header,
    method: 'GET',
    dataType: 'json',
    success: function (res) {
      callback(res);
    },
    fail: function (res) { },
    complete: function (res) { },
  })
}


function detailTraffic(id,callback) {

  var userInfo = userRepo.getUserInfo();
  var header = { 'Authorization': 'Bearer' + userInfo.token };
 

  wx.request({
    url: config.apiHost + '/api/traffic/detail/'+id,
    header: header,
    method: 'GET',
    dataType: 'json',
    success: function (res) {
      callback(res);
    },
    fail: function (res) { },
    complete: function (res) { },
  })
}

module.exports = {
  createTraffic: createTraffic,
  indexTraffic: indexTraffic,
  detailTraffic: detailTraffic
}