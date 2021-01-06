(function($){
	'use script';

	// WOW JS
	new WOW().init();

	// Menu Responsive
	$(document).ready(function(){
		$('.mobile-menu').click(function(){
			$('.menu ul').slideToggle();
		});
	});

	// Scroll Area
	$(document).ready(function(){
	    $('.scroll-area').click(function(){
	      	$('html').animate({
	        	'scrollTop' : 0,
	      	},700);
	      	return false;
	    });
	    $(window).on('scroll',function(){
	      	var a = $(window).scrollTop();
	      	if(a>400){
	            $('.scroll-area').slideDown(300);
	        }else{
	            $('.scroll-area').slideUp(200);
	        }
	    });
	});


	var mixer = mixitup('.portfolio-item-full');
	var mixer = mixitup('.portF');
	var mixer = mixitup('.portF', {
		selectors: {
			target: '.blog-item'
		},
		animation: {
			duration: 100
		}
	});


	$('.portfolio-single a').magnificPopup({
	  	type: 'image',
	   	gallery: {
	    	enabled: true
	  	},
	  	
	});

	$(document).ready(function(){
	  	$(".our-client-full").owlCarousel({
	  		loop:true,
	  		center:true,
	  		items:1,
	  		autoplay: true,
	  	});
	});

	// WOW JS
	new WOW().init();


	// Sticky Menu
	$(document).ready(function(){
		$(window).on('scroll',function(){
			var scroll = $(window).scrollTop();
			if(scroll < 150){
				$('.header_top').removeClass('sticky');
			}else{
				$('.header_top').addClass('sticky');
			}
		});
	});


	$(window).on("load",function(){
				
		/* Page Scroll to id fn call */
		$(".menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
			highlightSelector:"#navigation-menu a"
		});
		
		/* demo functions */
		$("a[rel='next']").click(function(e){
			e.preventDefault();
			var to=$(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo",to);
		});
		
	});


	$(document).ready(function(){
		let mainNavLinks = document.querySelectorAll(".menu ul li a");
		let mainSections = document.querySelectorAll("main section");

		let lastId;
		let cur = [];

		
		window.addEventListener("scroll", event => { 
		  let fromTop = window.scrollY;

		  	mainNavLinks.forEach(link => {
		    let section = document.querySelector(link.hash);

		   	if (
		      section.offsetTop <= fromTop &&
		      section.offsetTop + section.offsetHeight > fromTop
		    ) {
		      link.classList.add("current");
		    } else {
		      link.classList.remove("current");
		    }
		  	});
		});
	});



}(jQuery));



















