/*header*/
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop()> $('#navfix').height())
      $('#navfix').addClass('color');
    else
       $('#navfix').removeClass('color');
  });
});

$(function () {

  var filterList = {

    init: function () {

      // MixItUp plugin
      // http://mixitup.io
      $('#portfoliolist').mixItUp({
        selectors: {
          target: '.portfolio',
          filter: '.filter'
        },
        load: {
          filter: '.toancanh'
        }
      });

    }

  };
  filterList.init();
});

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
