

/* ngày */
function openDay(evt, dayName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(dayName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


/*ablum*/
$("#jLightroom").lightroom({
    image_container_selector: ".jlr_item",
    img_selector: "img.jlr_img",
    img_class_loaded: "jlr_loaded",
    img_space: 5,
    img_mode: 'min',
    init_callback: function(elem){$(elem).removeClass("gray_out")}
}).init();


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


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
