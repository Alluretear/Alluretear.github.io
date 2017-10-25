document.addEventListener('visibilitychange', function() {
  var isHidden = document.hidden;
  if (isHidden) {
    document.title = '当焦点不在当前窗口时的网页标题';
  } else {
    document.title = '再变回来或者做点其他的';
  }
});
