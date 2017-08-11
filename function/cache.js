function setToken(token){

  try {
    wx.setStorageSync('token', token);
  } catch (e) {
    console.log(e.msg);
  }
}

function getToken() {

  try {
    var value = wx.getStorageSync('token')
    return value;
  } catch (e) {
    console.log(e);
  }

}

module.exports = {
  setToken: setToken,
  getToken: getToken,
}