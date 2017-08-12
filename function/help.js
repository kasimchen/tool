 
 /**车牌正则**/
function isVehicleNumber(number) {
      var result = false;
      if (number.length == 7){
        var express = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Za-z]{1}[A-Za-z]{1}[A-Za-z0-9]{4}[A-Za-z0-9挂学警港澳]{1}$/;
        result = express.test(number);
      }
      return result;
  }

 /**发动机正则**/
function isEngineNumber(number) {
   var result = false;

     var express = /^[a-zA-Z0-9]{6,10}$/;
     result = express.test(number);
   
   return result;
 }

module.exports = {
  isVehicleNumber: isVehicleNumber,
  isEngineNumber: isEngineNumber
}