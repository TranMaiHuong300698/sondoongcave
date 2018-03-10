/* chỉnh màu cho phần chứa logo và menu*/
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop()> $('#navfix').height())
      $('#navfix').addClass('color');
    else
       $('#navfix').removeClass('color');
  });
});
/*ẩn/hiện phần quảng cáo*/
$(document).ready(function(){
    $("input[value='hien']").click(function(){
        $("#abc").slideDown();
    })
    $("input[value='an']").click(function(){
        $("#abc").slideUp();
    })
})
