/*---- back to top----*/
$(document).ready(function(){
  $(window).scroll(function(){
    var top = $(this).scrollTop();
    if(top > 100){
      $("#top").fadeIn('slow');
    }else {
      $("#top").fadeOut('slow');
    }
  });
  $("#top").click(function(){
    $("body").animate({scrollTop:0},1000);
  });
});
