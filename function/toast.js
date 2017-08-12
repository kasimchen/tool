function toastSuccess(msg, duration){

  var duration = duration ? duration:3000;

  wx.showToast({
    title: msg,
    icon: 'success',
    duration: duration
  });
}

function toastLoading(title){

  wx.showToast({
    title: title,
    icon: 'loading',
    duration: 3000
  });

}

function toastError(msg, duration) {
  
  var duration = duration ? duration : 3000;

  console.log(duration);
  console.log(msg);

  wx.showToast({
    title: msg,
    image: '../source/images/error.png',
    duration: duration
  });
}

module.exports = {
  toastSuccess: toastSuccess,
  toastError: toastError,
  toastLoading: toastLoading
}