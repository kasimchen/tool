//index.js
//获取应用实例
var common = require('../../../config/common.js')
var userRepo = require('../../../function/user.js')
var trafficRepo = require('../../../function/traffic.js')
var toastRepo = require('../../../function/toast.js')
var helpRepo = require('../../../function/help.js')



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
  onLoad: function () {
    console.log('onLoad')
    var that = this


    that.setData({
      hidden:true,
      current_select: common.licencePlate[0],
      select_option_item: common.licencePlate,
      plate_number_str :'',
      engine_number_str:''
    })

    userRepo.login();

  },
  selectAddr:function(){
    this.setData({
      hidden: false,
    })
  },
  cancelSelectAddr:function(){
    this.setData({
      hidden: true,
    })
  },
  selectAddrSuccess:function(event){
    var name = event.currentTarget.dataset.item;

    this.setData({
      hidden: true,
      current_select:name
    }) 

  },
  plateNumberInput:function(e){

    var value = e.detail.value;
    this.setData({
      plate_number_str: value,
    })

  },
  engineNumberInput:function(e){
    var value = e.detail.value;
    this.setData({
      engine_number_str: value,
    })

  },
  search:function(){

    var plate_number_str = this.data.current_select+this.data.plate_number_str;
    var engine_number_str = this.data.engine_number_str;
    var area = this.data.current_select;

    if(helpRepo.isVehicleNumber(plate_number_str)==false){
      toastRepo.toastError('车牌号格式错误');
      return false;
    }
    if (helpRepo.isEngineNumber(engine_number_str)==false){
      toastRepo.toastError('发动机号格式错误');
      return false;
    }

    toastRepo.toastLoading('查询中');

    //填入数据
    trafficRepo.createTraffic({
        engine_number: engine_number_str,
        plate_number: plate_number_str,
        area: area
    }, function (ret){
        if(ret.data.code==200){

          wx.navigateTo({
            url: "../index",
            //接口调用成功的回调方法
            success: function () {
              toastRepo.toastSuccess(ret.data.msg);
             },
            fail:function () { },
            complete:function () { }
          })

        }else{
          toastRepo.toastSuccess(ret.data.msg);
        }

    })


    //跳转



  }
})