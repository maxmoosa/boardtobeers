$(function(){
	$(".a-box").click(function(){
 	 $(".about").addClass("active");
 	 $(".b-box").addClass("active");
 	 $(".c-box").addClass("active");
 	 $(".d-box").addClass("active");
 	 $(".kickstart").removeClass("active");
 	 $(".contact").removeClass("active");
 	 $(".merch").removeClass("active");
	});
});

$(function(){
	$(".b-box").click(function(){
	  $(".kickstart").toggleClass("active");
	  $(".about").removeClass("active");
	  $(".contact").removeClass("active");
	  $(".merch").removeClass("active");
	 

	});
});

$(function(){
	$(".c-box").click(function(){
	  $(".contact").toggleClass("active");
	  $(".about").removeClass("active");
	  $(".kickstart").removeClass("active");
	  $(".merch").removeClass("active");
	  

	});
});

$(function(){
	$(".d-box").click(function(){
	  $(".merch").toggleClass("active");
	  $(".contact").removeClass("active");
	  $(".about").removeClass("active");
	  $(".kickstart").removeClass("active");
	  

	});
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
       }
    }
})
});
