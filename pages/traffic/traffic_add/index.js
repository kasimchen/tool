//index.js
//获取应用实例
var common = require('../../../config/common.js')
var userRepo = require('../../../function/user.js')

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

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      console.log(userInfo);

      that.setData({
        userInfo: userInfo,
      })
    })
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

    var engine_number_str = this.data.engine_number_str;
    var plate_number_str = this.data.plate_number_str;
    var userInfo = this.data.userInfo;
    console.log(userInfo);



  }
})