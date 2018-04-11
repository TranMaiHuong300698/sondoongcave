/*header*/
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop()> $('#navfix').height())
      $('#navfix').addClass('color');
    else
       $('#navfix').removeClass('color');
  });
});
  var i = 0;
  var images = [];
  var time =2000;
  images[0] = 'anh2.jpg';
  images[1] = 'anh3.jpg';
  images[2] = 'anh4.jpg';
  images[3] = 'anh5.jpg';
  images[4] = 'anh8.jpg';
  starImg = $("img.slide:first").attr("i");
  endImg = $("img.slide:last").attr("i");
function changeImage() {
  document.slide.src = images[i];
  if (i<images.length-1)
    i++;
  else
    i=0;
  setTimeout("changeImage()",time);
}
window.onload = changeImage;

/* nội dung */
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
