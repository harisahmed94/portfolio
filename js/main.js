$(document).ready(function () {
	
	// init Isotope

	var $container = $('.portfolio-items').isotope('layout');

	$('.portfolio-filter').on( 'click', 'a', function(e) {
	  e.preventDefault();
	  $('.portfolio-filter li').removeClass('active');
	  $(this).closest('li').addClass('active');
	  var filterValue = $(this).attr('data-filter');
	  $container.isotope({ filter: filterValue });
	});

	/* For the sticky navigation */

	$('.js--section-portfolio').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
			offset: '60px;'
	});

	// Smooth Scrolling

	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	// Mobile Navigation Toggle

	$('.js--nav-icon').click(function(){

		var nav = $('.js--main-nav');
		nav.slideToggle(200);

	});
    
    // Animations on Scroll
    
    $('.js--img-animation').waypoint(function(direction){
        $('.js--img-animation').addClass('animated zoomIn');
    }, {
            offset: '60%'  
    });
    
    
    $('.js--section-animation').waypoint(function(direction){
        $('.js--section-animation').addClass('animated fadeIn slow');
    }, {
            offset: '60%'  
    });

});