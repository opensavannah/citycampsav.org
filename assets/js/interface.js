( function($) {
  'use strict';
$(function(e) {

/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/
	var navbar=$('.js-navbar');
	var navbarAffixHeight=80
	$('.js-target-scroll').on('click', function(e) {
		var target = $(this.hash);
		if (target.length) {
			$('html,body').animate({
				scrollTop: (target.offset().top - navbarAffixHeight + 1)
			}, 1000);
			return false;
		}
	});
	$('body').scrollspy({
			offset:  navbarAffixHeight + 1
		});
	$('.navbar-nav a.js-target-scroll ').on('click',function(){
	  if($('#navigation').removeClass('in')) {
	  }
	  });	
	  

/*------------------------------------------------------------------
	Banner-Slideshow
	-------------------------------------------------------------------*/
	$('#banner .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	autoplay:true,
	animateIn: 'fadeIn',
	animateOut: 'fadeOut', 
    autoplayTimeout:5000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
	});

/*------------------------------------------------------------------
	Gallery-slider
	-------------------------------------------------------------------*/
	$('#gallery .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	dotes:false,
	autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{items:1},
        600:{items:3},
        1000:{items:4}
    }
	});
	
/*------------------------------------------------------------------
	About-Us-Slideshow
	-------------------------------------------------------------------*/
	$('#event_images .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
	});
	
	
/*------------------------------------------------------------------
	Testimonials-Slider
	-------------------------------------------------------------------*/
	$('#event_testimonials .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
	autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{items:1},
        600:{items:2},
        1000:{items:2}
    }
	});
	
/*------------------------------------------------------------------
	Menu
	-------------------------------------------------------------------*/
	$(document).ready(function(){
    $(".nav_toggle").click(function(){
        $("#navigation").toggleClass("show");
    });
	 $(".nav_toggle").click(function(){
        $(".nav_toggle").toggleClass("active");
    });
	});
	
	
 /*-------------------------------------------------------------------------------
  Ajax Form
	-------------------------------------------------------------------------------*/
 
	if ($('#js-ajax-form').length) {
		$('#js-ajax-form').each(function(){
			$(this).validate({
				errorClass: 'error wobble-error',
				submitHandler: function(form){
					$.ajax({
						type: "POST",
						url:"mail.php",
						data: $(form).serialize(),
						success: function() {
							$('.modal').modal('hide');
							$('#success').modal('show');
						},
	
						error: function(){
							$('.modal').modal('hide');
							$('#error').modal('show');
						}
					});
				}
			});
		});
	}
		
	
 /*------------------------------------------------------------------
	Countdown
	-------------------------------------------------------------------*/
  // 2018[year] - 4[month] - 22[day]
  
  $('#countdown').countdown('2018/10/20', function(event) { 
	$(this).html(event.strftime('<span class="countdown-period">%-D <span>Day%!D</span></span> <span class="countdown-period">%H <span>Hours</span></span> <span class="countdown-period">%M <span>Minutes</span></span> <span class="countdown-period">%S <span>Seconds</span></span>'));
  });
  

});


})(jQuery);