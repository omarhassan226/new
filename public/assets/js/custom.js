/**
	Template Name 	 : Jobick
	File Name	     : custom.js
	Core script to handle the entire theme and core functions

**/
function activeTabs() {
	let tabElement = $(".tabs");
	tabElement.toggleClass("tab-active");
	let arrow = $(".arrow-icon");
	arrow.toggleClass("arrow-icon-up");
}
  
var Jobick  = function(){
	'use strict';

	var screenWidth = $( window ).width();

	/* Header Height ============ */
	var handleResizeElement = function(){
		var headerTop = 0;
		var headerNav = 0;

		$('.header .sticky-header').removeClass('is-fixed');
		$('.header').removeAttr('style');

		if(jQuery('.header .top-bar').length > 0 &&  screenWidth > 991)
		{
			headerTop = parseInt($('.header .top-bar').outerHeight());
		}

		if(jQuery('.header').length > 0 )
		{
			headerNav = parseInt($('.header').height());
			headerNav =	(headerNav == 0)?parseInt($('.header .main-bar').outerHeight()):headerNav;
		}

		var headerHeight = headerNav + headerTop;

		jQuery('.header').css('height', headerHeight);
	}

	/* Resize Element On Resize ============ */
	var handleResizeElementOnResize = function(){
		var headerTop = 0;
		var headerNav = 0;

		$('.header .sticky-header').removeClass('is-fixed');
		$('.header').removeAttr('style');


		setTimeout(function(){

			if(jQuery('.header .top-bar').length > 0 &&  screenWidth > 991)
			{
				headerTop = parseInt($('.header .top-bar').outerHeight());
			}

			if(jQuery('.header').length > 0 )
			{
				headerNav = parseInt($('.header').height());
				headerNav =	(headerNav == 0)?parseInt($('.header .main-bar').outerHeight()):headerNav;
			}

			var headerHeight = headerNav + headerTop;

			jQuery('.header').css('height', headerHeight);

		}, 500);
    }

	/* Load File ============ */
	var handleDzTheme = function(){

		if(screenWidth <= 991 ){
			jQuery('.navbar-nav > li > a, .sub-menu > li > a').unbind().on('click', function(e){
				if(jQuery(this).parent().hasClass('open'))
				{
					jQuery(this).parent().removeClass('open');
				}
				else{
					jQuery(this).parent().parent().find('li').removeClass('open');
					jQuery(this).parent().addClass('open');
				}
			});
		}

		jQuery('.sidenav-nav .navbar-nav > li > a').next('.sub-menu,.mega-menu').slideUp();
		jQuery('.sidenav-nav .sub-menu > li > a').next('.sub-menu').slideUp();

		jQuery('.sidenav-nav .navbar-nav > li > a, .sidenav-nav .sub-menu > li > a').unbind().on('click', function(e){
			if(jQuery(this).hasClass('dz-open')){
				jQuery(this).removeClass('dz-open');
				jQuery(this).parent('li').children('.sub-menu,.mega-menu').slideUp();
			}else{
				jQuery(this).addClass('dz-open');

				if(jQuery(this).parent('li').children('.sub-menu,.mega-menu').length > 0){

					e.preventDefault();
					jQuery(this).next('.sub-menu,.mega-menu').slideDown();
					jQuery(this).parent('li').siblings('li').find('a').removeClass('dz-open');
					jQuery(this).parent('li').siblings('li').children('.sub-menu,.mega-menu').slideUp();
				}else{
					jQuery(this).next('.sub-menu,.mega-menu').slideUp();
				}
			}
		});
	}

	/* Magnific Popup ============ */
	var handleMagnificPopup = function(){
		if(jQuery('.mfp-gallery').length > 0){
			/* magnificPopup function */
			jQuery('.mfp-gallery').magnificPopup({
				delegate: '.mfp-link',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function(item) {
						return item.el.attr('title') + '<small></small>';
					}
				}
			});
			/* magnificPopup function end */
		}

		if(jQuery('.mfp-video').length > 0){
			/* magnificPopup for Play video function */
			jQuery('.mfp-video').magnificPopup({
				type: 'iframe',
				iframe: {
					markup: '<div class="mfp-iframe-scaler">'+
							'<div class="mfp-close"></div>'+
							'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
							'<div class="mfp-title">Some caption</div>'+
							'</div>'
				},
				callbacks: {
					markupParse: function(template, values, item) {
						values.title = item.el.attr('title');
					}
				}
			});
		}

		if(jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').length > 0){
			/* magnificPopup for Play video function end */
			$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		}
	}

	/* Scroll To Top ============ */
	var handleScrollTop = function (){

		var scrollTop = jQuery("button.scroltop");
		/* page scroll top on click function */
		scrollTop.on('click',function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		})

		jQuery(window).bind("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
		/* page scroll top on click function end*/
	}

	/* Header Fixed ============ */
	var handleHeaderFix = function(){
		/* Main navigation fixed on top  when scroll down function custom */
		jQuery(window).on('scroll', function () {
			if(jQuery('.sticky-header').length > 0){
				var menu = jQuery('.sticky-header');
				if ($(window).scrollTop() > menu.offset().top) {
					menu.addClass('is-fixed');
				} else {
					menu.removeClass('is-fixed');
				}
			}
		});
		/* Main navigation fixed on top  when scroll down function custom end*/
	}

	/* Counter Number ============ */
	var handleCounter = function(){
		if(jQuery('.counter').length)
		{
			jQuery('.counter').counterUp({
				delay: 10,
				time: 3000
			});
		}
	}

	/* Video Popup ============ */
	var handleVideo = function(){
		/* Video responsive function */
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		/* Video responsive function end */
	}

	/* BGEFFECT ============ */
	var reposition = function (){
		'use strict';
		var modal = jQuery(this),
		dialog = modal.find('.modal-dialog');
		modal.css('display', 'block');

		/* Dividing by two centers the modal exactly, but dividing by three 
		 or four works better for larger screens.  */
		dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
	}

	var handelResize = function (){
		/* Reposition when the window is resized */
		jQuery(window).on('resize', function() {
			jQuery('.modal:visible').each(reposition);
		});
	}

	/* Box Hover ============ */
	var handleBoxHover = function(){
		jQuery('.box-hover').on('mouseenter',function(){
			var selector = jQuery(this).parent().parent();
			selector.find('.box-hover').removeClass('active');
			jQuery(this).addClass('active');
		});
	}

	/* Current Active Menu ============ */
	var handleCurrentActive = function() {
		for (var nk = window.location,
				o = $("ul.navbar a").filter(function(){
				return this.href == nk;
			})
			.addClass("active").parent().addClass("active");;)
		{
		if (!o.is("li")) break;
			o = o.parent().addClass("show").parent('li').addClass("active");
		}
	}

	/* Select Picker ============ */
	var handleSelectpicker = function(){
		if(jQuery('.default-select').length > 0 ){
			jQuery('.default-select').selectpicker();
		}
	}

	/* Perfect Scrollbar ============ */
	var handlePerfectScrollbar = function() {
		if(jQuery('.deznav-scroll').length > 0){
			const qs = new PerfectScrollbar('.deznav-scroll');
			qs.isRtl = false;
		}
	}

	/* Wow Animation ============ */
	var handleWowAnimation = function(){
		if($('.wow').length > 0){
			var wow = new WOW({
				boxClass:     'wow',      // Animated element css class (default is wow)
				animateClass: 'animated', // Animation css class (default is animated)
				offset:       0,          // Distance to the element when triggering the animation (default is 0)
				mobile:       true       // Trigger animations on mobile devices (true is default)
			});
			wow.init();
		}
	}

	/* Home Search ============ */
	var handleHomeSearch = function() {
		'use strict';
		/* top search in header on click function */
		var quikSearch = jQuery("#quik-search-btn");
		var quikSearchRemove = jQuery("#quik-search-remove");

		quikSearch.on('click',function() {
			jQuery('.dz-quik-search').fadeIn(500);
			jQuery('.dz-quik-search').addClass('On');
		});

		quikSearchRemove.on('click',function() {
			jQuery('.dz-quik-search').fadeOut(500);
			jQuery('.dz-quik-search').removeClass('On');
		});
		/* top search in header on click function End*/
	}




	var pointerEffect = function(){
		/* 
			pointer.js was created by OwL for use on websites, 
			 and can be found at https://seattleowl.com/pointer.
		*/

		const pointer = document.createElement("div")
		pointer.id = "pointer-dot"
		const ring = document.createElement("div")
		ring.id = "pointer-ring"
		document.body.insertBefore(pointer, document.body.children[0])
		document.body.insertBefore(ring, document.body.children[0])

		let mouseX = -100
		let mouseY = -100
		let ringX = -100
		let ringY = -100
		let isHover = false
		let mouseDown = false
		const init_pointer = (options) => {

			window.onmousemove = (mouse) => {
				mouseX = (mouse.clientX != undefined)?mouse.clientX:-100;
				mouseY = (mouse.clientY != undefined)?mouse.clientY:-100;
			}

			window.onmousedown = (mouse) => {
				mouseDown = true
			}

			window.onmouseup = (mouse) => {
				mouseDown = false
			}

			const trace = (a, b, n) => {
				return (1 - n) * a + n * b;
			}
			window["trace"] = trace

			const getOption = (option) => {
				let defaultObj = {
					pointerColor: "#750c7e",
					ringSize: 15,
					ringClickSize: (options["ringSize"] || 15) - 5,
				}
				if (options[option] == undefined) {
					return defaultObj[option]
				} else {
					return options[option]
				}
			}

			const render = () => {
				if(mouseX != undefined){
					ringX = trace(ringX, mouseX, 0.2)
					ringY = trace(ringY, mouseY, 0.2)

					if (document.querySelector(".p-action-click:hover")) {
						pointer.style.borderColor = getOption("pointerColor")
						isHover = true
					} else {
						pointer.style.borderColor = "white"
						isHover = false
					}
					ring.style.borderColor = getOption("pointerColor")
					if (mouseDown) {
						ring.style.padding = getOption("ringClickSize") + "px"
					} else {
						ring.style.padding = getOption("ringSize") + "px"
					}




					pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`

					ring.style.transform = `translate(${ringX - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px, ${ringY - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px)`

					requestAnimationFrame(render)
				}
			}
			requestAnimationFrame(render)
		}

		jQuery('a').on('mousemove',function(e){
			jQuery('#pointer-ring').addClass('active');
		});

		jQuery('a').on('mouseleave',function(e){
			jQuery('#pointer-ring').removeClass('active');
		});

		init_pointer({});
	}


	/* Function ============ */
	return {
		init:function(){
			handleBoxHover();
			handleDzTheme();
			handleHomeSearch();
			handleMagnificPopup();
			handleScrollTop();
			handleHeaderFix();
			handleSelectpicker();
			handleVideo();
			handelResize();
			jQuery('.modal').on('show.bs.modal', reposition);
			handleCurrentActive();
			handlePerfectScrollbar();
			pointerEffect();
			handleResizeElement();
		//	handleSupport();
			setTimeout(function(){
				handleWowAnimation();
			}, 2000);
		},

		load:function(){
			handleCounter();

		},

		resize:function(){
			screenWidth = $(window).width();
			handleDzTheme();
			handleResizeElement();
		}
	}

}();

/* Document.ready Start */
jQuery(document).ready(function() {
    Jobick.init();

	jQuery('.navicon').on('click',function(){
		$(this).toggleClass('open');
	});

});
/* Document.ready END */

/* Window Load START */
 jQuery(window).on('load',function () {
	Jobick .load();

	setTimeout(function(){
		jQuery('#loading-area').fadeOut();
	}, 2500);


});
/*  Window Load END */

/* Window Resize START */
jQuery(window).on('resize',function () {
	Jobick .resize();

});
/*  Window Resize END */



(function ($) {
	"use strict";
  
	//-------------- Click event to scroll to top
	$(window).on('scroll', function () {
	  if ($(this).scrollTop() > 200) {
		$('.scroll-top').fadeIn();
	  } else {
		$('.scroll-top').fadeOut();
	  }
	});
	$('.scroll-top').on('click', function () {
	  $('html, body').animate({ scrollTop: 0 });
	  return false;
	});
  
	// ----------------------------- Lazy Load
	if ($(".lazy-img").length) {
	  $('.lazy-img').Lazy({
		effect: 'fadeIn',
		threshold: 300
	  });
	}
  
  
	// ----------------------------- Counter Function
	var timer = $('.counter');
	if (timer.length) {
	  $('.counter').counterUp({
		delay: 10,
		time: 1200,
	  });
	}
  
	// ------------------------ Navigation Scroll
	$(window).on('scroll', function () {
	  var sticky = $('.sticky-menu'),
		scroll = $(window).scrollTop();
	  if (scroll >= 180) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
  
	});
  
  
	// -------------------- Remove Placeholder When Focus Or Click
	$("input,textarea").each(function () {
	  $(this).data('holder', $(this).attr('placeholder'));
	  $(this).on('focusin', function () {
		$(this).attr('placeholder', '');
	  });
	  $(this).on('focusout', function () {
		$(this).attr('placeholder', $(this).data('holder'));
	  });
	});
  
  
	// ---------------- Grid And List 
	if ($(".product-gallery").length) {
	  $("#list-btn").on("click", function () {
		$(".item").addClass("list-style");
		$(this).addClass("active");
		$("#grid-btn").removeClass("active");
	  });
  
	  $("#grid-btn").on("click", function () {
		$(".item").removeClass("list-style");
		$(this).addClass("active");
		$("#list-btn").removeClass("active");
	  });
	}
  
  
	// ---------------------- Filter More Item Button
	if ($(".more-btn").length) {
	  $(".more-btn").on("click", function () {
		let $more = $(this).siblings('ul').toggleClass("show");
  
		if ($more.hasClass('show')) {
		  $(this).html('<i class="bi bi-dash"></i> Show Less');
		} else {
		  $(this).html('<i class="bi bi-plus"></i> Show More');
		}
	  });
	}
  
  
	// ---------------------- Grid and List Switcher
	if ($(".style-changer-btn").length) {
	  $(".list-btn").on("click", function () {
		$(this).removeClass("active");
		$(".grid-btn").addClass("active");
		$(".grid-style").removeClass("show");
		$(".list-style").addClass("show");
	  });
  
	  $(".grid-btn").on("click", function () {
		$(this).removeClass("active");
		$(".list-btn").addClass("active");
		$(".grid-style").addClass("show");
		$(".list-style").removeClass("show");
	  });
	}
  
  
	// ----------------------------- Select Function
	if ($(".nice-select").length) {
	  $('.nice-select').niceSelect();
	}
  
  
	// ------------------------ Expert Slider One
	if ($(".expert-slider-one").length) {
	  $('.expert-slider-one').slick({
		dots: false,
		arrows: true,
		lazyLoad: 'ondemand',
		prevArrow: $('.prev_a'),
		nextArrow: $('.next_a'),
		centerPadding: '0px',
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
		  {
			breakpoint: 1200,
			settings: {
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 2
			}
		  }
		]
	  });
	}
  
  
	// ------------------------ Expert Slider Two
	if ($(".expert-slider-two").length) {
	  $('.expert-slider-two').slick({
		dots: true,
		arrows: false,
		lazyLoad: 'ondemand',
		centerPadding: '0px',
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: false,
		autoplaySpeed: 3000,
		responsive: [
		  {
			breakpoint: 1200,
			settings: {
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 992,
			settings: {
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 576,
			settings: {
			  slidesToShow: 1
			}
		  }
		]
	  });
	}
  
	// ------------------------ Feedback Slider One
	if ($(".feedback-slider-one").length) {
	  $('.feedback-slider-one').slick({
		dots: false,
		arrows: true,
		lazyLoad: 'ondemand',
		prevArrow: $('.prev_b'),
		nextArrow: $('.next_b'),
		centerPadding: '0px',
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000000,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 1
			}
		  }
		]
	  });
	}
  
  
	// ------------------------ Feedback Slider Two
	if ($(".feedback-slider-two").length) {
	  $('.feedback-slider-two').slick({
		dots: true,
		arrows: false,
		lazyLoad: 'ondemand',
		centerPadding: '0px',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 300000,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 576,
			settings: {
			  slidesToShow: 1
			}
		  }
		]
	  });
	}
  
	// ------------------------ Feedback Slider Three
	if ($(".feedback-slider-three-a").length) {
	  $('.feedback-slider-three-a').slick({
		dots: false,
		arrows: true,
		prevArrow: $('.prev_d'),
		nextArrow: $('.next_d'),
		lazyLoad: 'ondemand',
		centerPadding: '0px',
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		fade: true,
		autoplaySpeed: 300000,
		asNavFor: '.feedback-slider-three-b',
	  });
	}
	if ($(".feedback-slider-three-b").length) {
	  $('.feedback-slider-three-b').slick({
		dots: true,
		arrows: false,
		lazyLoad: 'ondemand',
		centerPadding: '0px',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 300000,
		asNavFor: '.feedback-slider-three-a',
		responsive: [
		  {
			breakpoint: 992,
			settings: {
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 576,
			settings: {
			  slidesToShow: 1
			}
		  }
		]
	  });
	}
  
	// ------------------------ Partner Slider
	if ($(".partner-slider").length) {
	  $('.partner-slider').slick({
		dots: false,
		arrows: false,
		lazyLoad: 'ondemand',
		centerPadding: '0px',
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		responsive: [
		  {
			breakpoint: 1400,
			settings: {
			  slidesToShow: 5
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 4
			}
		  },
		  {
			breakpoint: 576,
			settings: {
			  slidesToShow: 3
			}
		  }
		]
	  });
	}
  
  
	// ------------------------ Category Slider
	if ($(".category-slider-one").length) {
	  $('.category-slider-one').slick({
		dots: false,
		arrows: true,
		lazyLoad: 'ondemand',
		prevArrow: $('.prev_d'),
		nextArrow: $('.next_d'),
		centerPadding: '0px',
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
		  {
			breakpoint: 992,
			settings: {
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 576,
			settings: {
			  slidesToShow: 1
			}
		  }
		]
	  });
	}
  
  
	// ------------------------ Related Job Slider
	if ($(".related-job-slider").length) {
	  $('.related-job-slider').slick({
		dots: false,
		arrows: true,
		lazyLoad: 'ondemand',
		prevArrow: $('.prev_e'),
		nextArrow: $('.next_e'),
		centerPadding: '0px',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
		  {
			breakpoint: 992,
			settings: {
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 1
			}
		  }
		]
	  });
	}
  
  
	// ------------------------ Company Review Slider
	if ($(".company-review-slider").length) {
	  $('.company-review-slider').slick({
		dots: true,
		arrows: false,
		lazyLoad: 'ondemand',
		centerPadding: '0px',
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 1
			}
		  }
		]
	  });
	}
  
	// ------------------------ Candidate Portfolio
	if ($(".candidate-portfolio-slider").length) {
	  $('.candidate-portfolio-slider').slick({
		dots: true,
		arrows: false,
		lazyLoad: 'ondemand',
		centerPadding: '0px',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
		  {
			breakpoint: 992,
			settings: {
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 450,
			settings: {
			  slidesToShow: 1
			}
		  }
		]
	  });
	}
  
	// -----------------------Location Range
	if ($("#locationRange").length) {
	  $('#locationRange').on("mousemove", function () {
		$('#rangeValue').text($('#locationRange').val());
	  });
	}
  
  
	// --------------------------------- Contact Form
	// init the validator
	// validator files are included in the download package
	// otherwise download from http://1000hz.github.io/bootstrap-validator
  
	if ($("#contact-form").length) {
	  $('#contact-form').validator();
	  // when the form is submitted
	  $('#contact-form').on('submit', function (e) {
  
		// if the validator does not prevent form submit
		if (!e.isDefaultPrevented()) {
		  var url = "inc/contact.html";
  
		  // POST values in the background the the script URL
		  $.ajax({
			type: "POST",
			url: url,
			data: $(this).serialize(),
			success: function (data) {
			  // data = JSON object that contact.php returns
  
			  // we recieve the type of the message: success x danger and apply it to the
			  var messageAlert = 'alert-' + data.type;
			  var messageText = data.message;
  
			  // let's compose Bootstrap alert box HTML
			  var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
  
			  // If we have messageAlert and messageText
			  if (messageAlert && messageText) {
				// inject the alert to .messages div in our form
				$('#contact-form').find('.messages').html(alertBox);
				// empty the form
				$('#contact-form')[0].reset();
			  }
			}
		  });
		  return false;
		}
	  });
	}
	// ------------------------ Password Toggler
	if ($(".user-data-form").length) {
	  $(".passVicon").on('click', function () {
		$(".passVicon").toggleClass("eye-slash");
		var input = $(".pass_log_id");
		if (input.attr("type") === "password") {
		  input.attr("type", "text");
		} else {
		  input.attr("type", "password");
		}
  
	  });
	}
	// -------------------------- Dashboard Mobile Sidebar
	if ($(".dash-mobile-nav-toggler").length) {
	  $('.dash-mobile-nav-toggler').on('click', function () {
		$(".dash-aside-navbar").addClass("show");
	  });
	  $('.dash-aside-navbar .close-btn').on('click', function () {
		$(".dash-aside-navbar").removeClass("show");
	  });
	}
  
  
  
	$(window).on('load', function () { // makes sure the whole site is loaded
  
	  // -------------------- Site Preloader
	  $('#ctn-preloader').fadeOut(); // will first fade out the loading animation
	  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	  $('body').delay(350).css({ 'overflow': 'visible' });
  
  
  
	  // ------------------------------- Scroll Animation
	  var wow = new WOW(
		{
		  boxClass: 'wow',      // animated element css class (default is wow)
		  animateClass: 'animated', // animation css class (default is animated)
		  offset: 0,          // distance to the element when triggering the animation (default is 0)
		  mobile: true,       // trigger animations on mobile devices (default is true)
		  live: true,       // act on asynchronously loaded content (default is true)
		}
	  );
	  wow.init();
  
	  // ------------------------------------- Fancybox
	  var fancy = $(".fancybox");
	  if (fancy.length) {
		fancy.fancybox({
		  arrows: true,
		  buttons: [
			"zoom",
			//"share",
			"slideShow",
			//"fullScreen",
			//"download",
			"thumbs",
			"close"
		  ],
		  animationEffect: "zoom-in-out",
		  transitionEffect: "zoom-in-out",
		});
	  }
  
  
  
	  // ----------------------------- isotop gallery
	  if ($("#isotop-gallery-wrapper").length) {
		var $grid = $('#isotop-gallery-wrapper').isotope({
		  // options
		  itemSelector: '.isotop-item',
		  percentPosition: true,
		  masonry: {
			// use element for option
			columnWidth: '.grid-sizer'
		  }
  
		});
  
		// filter items on button click
		$('.isotop-menu-wrapper').on('click', 'li', function () {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
  
		// change is-checked class on buttons
		$('.isotop-menu-wrapper').each(function (i, buttonGroup) {
		  var $buttonGroup = $(buttonGroup);
		  $buttonGroup.on('click', 'li', function () {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$(this).addClass('is-checked');
		  });
		});
	  }
  
  
	});  //End On Load Function
  
	// Price Slider
	if ($(".salary-slider").length) {
	  const rangeInput = document.querySelectorAll(".range-input input"),
		priceInput = document.querySelectorAll(".price-input input"),
		range = document.querySelector(".slider .progress");
	  let priceGap = 10;
  
	  priceInput.forEach((input) => {
		input.addEventListener("input", (e) => {
		  let minPrice = parseInt(priceInput[0].value),
			maxPrice = parseInt(priceInput[1].value);
  
		  if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
			if (e.target.className === "input-min") {
			  rangeInput[0].value = minPrice;
			  range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
			} else {
			  rangeInput[1].value = maxPrice;
			  range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
			}
		  }
		});
	  });
  
	  rangeInput.forEach((input) => {
		input.addEventListener("input", (e) => {
		  let minVal = parseInt(rangeInput[0].value),
			maxVal = parseInt(rangeInput[1].value);
  
		  if (maxVal - minVal < priceGap) {
			if (e.target.className === "range-min") {
			  rangeInput[0].value = maxVal - priceGap;
			} else {
			  rangeInput[1].value = minVal + priceGap;
			}
		  } else {
			priceInput[0].value = minVal;
			priceInput[1].value = maxVal;
			range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
			range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
		  }
		});
	  });
	}
  
  })(jQuery);
  
  
  /*<![CDATA[*/
  var TW_box = document.querySelector("#TW_box"), Cookie_btn = document.querySelector("#Cookie_btn"), ckErrMes = "Cookie can't be set! Please unblock this site from the cookie setting of your browser."; if (null != TW_box) { Cookie_btn.onclick = () => { document.cookie = "CookieConsentByFineshop=Accepted; max-age=2592000; path=/", document.cookie ? TW_box.classList.add("acptd") : alert(ckErrMes) }; let e = document.cookie.indexOf("CookieConsentByFineshop=Accepted"); -1 != e ? TW_box.classList.add("TWhide") : TW_box.classList.remove("TWhide") }
  /*]]>*/
  
  let tabs = document.querySelector(".tabs");
  let tabHeader = tabs?.querySelector(".tab-header");
  let tabHeaderElements = tabs.querySelectorAll(".tab-header > div");
  let tabBody = tabs.querySelector(".tab-body");
  let tabBodyElements = tabs.querySelectorAll(".tab-body > div");
  let tabIndicator = tabs.querySelector(".tab-indicator > div");
  
  for (let i = 0; i < tabHeaderElements.length; i++) {
	tabHeaderElements[i].addEventListener("click", function () {
	  tabHeader.querySelector(".active").classList.remove("active");
	  tabHeaderElements[i].classList.add("active");
	  tabBody.querySelector(".active").classList.remove("active");
	  tabBodyElements[i].classList.add("active");
	  tabIndicator.style.left = `${i * 25}%`;
	});
  }
  
  function activeTabs() {
	let tabElement = $(".tabs");
	tabElement.toggleClass("tab-active");
	let arrow = $(".arrow-icon");
	arrow.toggleClass("arrow-icon-up");
  }
  
  
  function fbs_click() {
	var pageLink = window.location.href;
	var pageTitle = String(document.title).replace(/\&/g, '%26');
	window.open(`http://www.facebook.com/sharer.php?u=${pageLink}&quote=${pageTitle}`, 'sharer', 'toolbar=0,status=0,width=626,height=436');
	return false;
  }
  
  function tbs_click() {
	var pageLink = window.location.href;
	var pageTitle = String(document.title).replace(/\&/g, '%26');
	window.open(`https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageLink}`, 'sharer', 'toolbar=0,status=0,width=626,height=436');
	return false;
  }
  
  function lbs_click() {
	var pageLink = window.location.href;
	var pageTitle = String(document.title).replace(/\&/g, '%26');
	window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${pageLink}`, 'sharer', 'toolbar=0,status=0,width=626,height=436');
	return false;
  }
  
  function pbs_click() {
	var pageLink = window.location.href;
	var pageTitle = String(document.title).replace(/\&/g, '%26');
	window.open(`https://www.pinterest.com/pin/create/button/?url=${pageLink}&description=${pageTitle}`, 'sharer', 'toolbar=0,status=0,width=626,height=436');
	return false;
  }
  
  function sha_click() {
	var pageLink = window.location.href;
	navigator.clipboard.writeText(pageLink);
	return false;
  }
  
  
	
  // Add row
  function addRow(e) {
	const contactRows = document.getElementById("contact-rows");
  
	if (e.target.closest(".add-row")) {
	  const currentRows = contactRows.querySelectorAll(".row");
	  const lastRow = currentRows[currentRows.length - 1];
  
	  // Remove the "Add" button from all rows except the last one
	  currentRows.forEach((row) => {
		const addButton = row.querySelector(".add-row");
		if (addButton) addButton.remove();
	  });
  
	  // Clone the last row
	  const newRow = lastRow.cloneNode(true);
  
	  // Clear inputs in the new row
	  newRow.querySelectorAll("input").forEach((input) => (input.value = ""));
	  newRow.querySelectorAll("select").forEach((select) => (select.value = select.options[0].value));
  
	  // Add the "Add" button back to the new last row
	  const newAddButton = document.createElement("a");
	  newAddButton.href = "javascript:void(0)";
	  newAddButton.className = "dash-btn-one add-row";
	  newAddButton.innerHTML = '<i class="bi bi-plus"></i>Add';
	  newAddButton.setAttribute("onclick", "addRow(event)");
	  const lastCol = newRow.querySelector(".col-md-2:last-child");
	  lastCol.appendChild(newAddButton);
  
	  // Append the new row
	  contactRows.appendChild(newRow);
	}
  }
  
  
  // Remove row
  function removeRow(e) {
	const contactRows = document.getElementById("contact-rows");
	if (e.target.closest(".remove-row")) {
	  const row = e.target.closest(".row");
	  if (contactRows.children.length > 1) {
		row.remove();
  
		// Ensure only the last row has the "Add" button
		const currentRows = contactRows.querySelectorAll(".row");
		const lastRow = currentRows[currentRows.length - 1];
		const hasAddButton = lastRow.querySelector(".add-row");
  
		if (!hasAddButton) {
		  const newAddButton = document.createElement("a");
		  newAddButton.href = "javascript:void(0)";
		  newAddButton.className = "dash-btn-one add-row";
		  newAddButton.innerHTML = '<i class="bi bi-plus"></i>Add';
		  newAddButton.setAttribute("onclick", "addRow(event)");
		  
		  const lastCol = lastRow.querySelector(".col-md-2:last-child");
		  lastCol.appendChild(newAddButton);
		}
	  } else {
		alert("At least one row is required!");
	  }
	}
  }
  
  
  
  function addRowAchievement(event) {
	const contactRows = document.getElementById("achievement-rows");
	const currentRow = event.target.closest(".row");
	
	// Remove all "Add" buttons except for the last row
	const rows = contactRows.querySelectorAll(".row");
	rows.forEach((row) => {
	  const addButton = row.querySelector(".add-row");
	  if (addButton) addButton.remove();
	});
  
	// Clone the current row
	const newRow = currentRow.cloneNode(true);
  
	// Clear inputs in the new row
	newRow.querySelectorAll("input").forEach((input) => (input.value = ""));
  
	// Add a new "Add" button to the last column
	const addButtonContainer = newRow.querySelector(".col-md-2:last-child");
	const newAddButton = document.createElement("a");
	newAddButton.href = "javascript:void(0)";
	newAddButton.className = "dash-btn-one add-row";
	newAddButton.innerHTML = '<i class="bi bi-plus"></i>Add';
	newAddButton.setAttribute("onclick", "addRowAchievement(event)");
	addButtonContainer.appendChild(newAddButton);
  
	// Append the new row
	contactRows.appendChild(newRow);
  }
  
  function removeRowAchievement(event) {
	const contactRows = document.getElementById("achievement-rows");
	const currentRow = event.target.closest(".row");
  
	if (contactRows.children.length > 1) {
	  currentRow.remove();
  
	  // Ensure the last row has an "Add" button
	  const rows = contactRows.querySelectorAll(".row");
	  const lastRow = rows[rows.length - 1];
	  const hasAddButton = lastRow.querySelector(".add-row");
	  
	  if (!hasAddButton) {
		const addButtonContainer = lastRow.querySelector(".col-md-2:last-child");
		const newAddButton = document.createElement("a");
		newAddButton.href = "javascript:void(0)";
		newAddButton.className = "dash-btn-one add-row";
		newAddButton.innerHTML = '<i class="bi bi-plus"></i>Add';
		newAddButton.setAttribute("onclick", "addRowAchievement(event)");
		addButtonContainer.appendChild(newAddButton);
	  }
	} else {
	  alert("At least one row is required!");
	}
  }
  
  
  function addRowNotes(event) {
	const noteRows = document.getElementById("note-rows");
	const currentRow = event.target.closest(".row");
  
	// Remove all "Add" buttons except for the last row
	const rows = noteRows.querySelectorAll(".row");
	rows.forEach((row) => {
	  const addButton = row.querySelector(".add-row");
	  if (addButton) addButton.remove();
	});
  
	// Clone the current row
	const newRow = currentRow.cloneNode(true);
  
	// Clear inputs in the new row
	newRow.querySelectorAll("input").forEach((input) => (input.value = ""));
  
	// Add a new "Add" button to the last column
	const addButtonContainer = newRow.querySelector(".col-md-2:last-child");
	const newAddButton = document.createElement("a");
	newAddButton.href = "javascript:void(0)";
	newAddButton.className = "dash-btn-one add-row";
	newAddButton.innerHTML = '<i class="bi bi-plus"></i>Add';
	newAddButton.setAttribute("onclick", "addRowNotes(event)");
	addButtonContainer.appendChild(newAddButton);
  
	// Append the new row
	noteRows.appendChild(newRow);
  }
  
  function removeRowNotes(event) {
	const noteRows = document.getElementById("note-rows");
	const currentRow = event.target.closest(".row");
  
	if (noteRows.children.length > 1) {
	  currentRow.remove();
  
	  // Ensure the last row has an "Add" button
	  const rows = noteRows.querySelectorAll(".row");
	  const lastRow = rows[rows.length - 1];
	  const hasAddButton = lastRow.querySelector(".add-row");
  
	  if (!hasAddButton) {
		const addButtonContainer = lastRow.querySelector(".col-md-2:last-child");
		const newAddButton = document.createElement("a");
		newAddButton.href = "javascript:void(0)";
		newAddButton.className = "dash-btn-one add-row";
		newAddButton.innerHTML = '<i class="bi bi-plus"></i>Add';
		newAddButton.setAttribute("onclick", "addRowNotes(event)");
		addButtonContainer.appendChild(newAddButton);
	  }
	} else {
	  alert("At least one row is required!");
	}
  }
  
  
  function addJobExperienceRow(event) {
	const jobExperienceRows = document.getElementById("job-experience-rows");
	const currentRow = event.target.closest(".row");
  
	// Remove all "Add" buttons except for the last row
	const rows = jobExperienceRows.querySelectorAll(".row");
	rows.forEach((row) => {
	  const addButton = row.querySelector(".add-row");
	  if (addButton) addButton.remove();
	});
  
	// Clone the current row
	const newRow = currentRow.cloneNode(true);
  
	// Clear inputs and textareas in the new row
	newRow.querySelectorAll("input").forEach((input) => (input.value = ""));
	newRow.querySelectorAll("select").forEach((select) => (select.value = select.options[0].value));
	newRow.querySelectorAll("textarea").forEach((textarea) => (textarea.value = ""));
  
	// Add a new "Add" button to the last column
	const addButtonContainer = newRow.querySelector(".col-md-2:last-child");
	const newAddButton = document.createElement("a");
	newAddButton.href = "javascript:void(0)";
	newAddButton.className = "dash-btn-one add-row";
	newAddButton.innerHTML = '<i class="bi bi-plus"></i>Add';
	newAddButton.setAttribute("onclick", "addJobExperienceRow(event)");
	addButtonContainer.appendChild(newAddButton);
  
	// Append the new row
	jobExperienceRows.appendChild(newRow);
  }
  
  function removeJobExperienceRow(event) {
	const jobExperienceRows = document.getElementById("job-experience-rows");
	const currentRow = event.target.closest(".row");
  
	if (jobExperienceRows.children.length > 1) {
	  currentRow.remove();
  
	  // Ensure the last row has an "Add" button
	  const rows = jobExperienceRows.querySelectorAll(".row");
	  const lastRow = rows[rows.length - 1];
	  const hasAddButton = lastRow.querySelector(".add-row");
  
	  if (!hasAddButton) {
		const addButtonContainer = lastRow.querySelector(".col-md-2:last-child");
		const newAddButton = document.createElement("a");
		newAddButton.href = "javascript:void(0)";
		newAddButton.className = "dash-btn-one add-row";
		newAddButton.innerHTML = '<i class="bi bi-plus"></i>Add';
		newAddButton.setAttribute("onclick", "addJobExperienceRow(event)");
		addButtonContainer.appendChild(newAddButton);
	  }
	} else {
	  alert("At least one row is required!");
	}
  }
  
  
  function addEducationRow(event) {
	const educationRows = document.getElementById("education-certification-rows");
	const currentRow = event.target.closest(".row");
  
	// Remove all "Add" buttons except for the last row
	const rows = educationRows.querySelectorAll(".row");
	rows.forEach((row) => {
	  const addButton = row.querySelector(".add-row");
	  if (addButton) addButton.remove();
	});
  
	// Clone the current row
	const newRow = currentRow.cloneNode(true);
  
	// Clear all input and select fields in the new row
	newRow.querySelectorAll("input").forEach((input) => (input.value = ""));
	newRow.querySelectorAll("select").forEach((select) => (select.value = select.options[0].value));
  
	// Add a new "Add" button to the last column
	const addButtonContainer = newRow.querySelector(".col-md-2:last-child");
	const newAddButton = document.createElement("a");
	newAddButton.href = "javascript:void(0)";
	newAddButton.className = "dash-btn-one add-row";
	newAddButton.innerHTML = '<i class="bi bi-plus"></i>Add';
	newAddButton.setAttribute("onclick", "addEducationRow(event)");
	addButtonContainer.appendChild(newAddButton);
  
	// Append the new row
	educationRows.appendChild(newRow);
  }
  
  function removeEducationRow(event) {
	const educationRows = document.getElementById("education-certification-rows");
	const currentRow = event.target.closest(".row");
  
	if (educationRows.children.length > 1) {
	  currentRow.remove();
  
	  // Ensure the last row has an "Add" button
	  const rows = educationRows.querySelectorAll(".row");
	  const lastRow = rows[rows.length - 1];
	  const hasAddButton = lastRow.querySelector(".add-row");
  
	  if (!hasAddButton) {
		const addButtonContainer = lastRow.querySelector(".col-md-2:last-child");
		const newAddButton = document.createElement("a");
		newAddButton.href = "javascript:void(0)";
		newAddButton.className = "dash-btn-one add-row";
		newAddButton.innerHTML = '<i class="bi bi-plus"></i>Add';
		newAddButton.setAttribute("onclick", "addEducationRow(event)");
		addButtonContainer.appendChild(newAddButton);
	  }
	} else {
	  alert("At least one row is required!");
	}
  }
  
  function addCertificateRow(event) {
	const certificateRows = document.getElementById("certificate-rows");
	const currentRow = event.target.closest(".row");
  
	// Remove all "Add" buttons except for the last row
	const rows = certificateRows.querySelectorAll(".row");
	rows.forEach((row) => {
	  const addButton = row.querySelector(".add-row");
	  if (addButton) addButton.remove();
	});
  
	// Clone the current row
	const newRow = currentRow.cloneNode(true);
  
	// Clear all input fields in the new row
	newRow.querySelectorAll("input").forEach((input) => (input.value = ""));
  
	// Add a new "Add" button to the last column
	const addButtonContainer = newRow.querySelector(".col-md-2:last-child");
	const newAddButton = document.createElement("a");
	newAddButton.href = "javascript:void(0)";
	newAddButton.className = "dash-btn-one add-row";
	newAddButton.innerHTML = '<i class="bi bi-plus"></i>Add';
	newAddButton.setAttribute("onclick", "addCertificateRow(event)");
	addButtonContainer.appendChild(newAddButton);
  
	// Append the new row
	certificateRows.appendChild(newRow);
  }
  
  function removeCertificateRow(event) {
	const certificateRows = document.getElementById("certificate-rows");
	const currentRow = event.target.closest(".row");
  
	if (certificateRows.children.length > 1) {
	  currentRow.remove();
  
	  // Ensure the last row has an "Add" button
	  const rows = certificateRows.querySelectorAll(".row");
	  const lastRow = rows[rows.length - 1];
	  const hasAddButton = lastRow.querySelector(".add-row");
  
	  if (!hasAddButton) {
		const addButtonContainer = lastRow.querySelector(".col-md-2:last-child");
		const newAddButton = document.createElement("a");
		newAddButton.href = "javascript:void(0)";
		newAddButton.className = "dash-btn-one add-row";
		newAddButton.innerHTML = '<i class="bi bi-plus"></i>Add';
		newAddButton.setAttribute("onclick", "addCertificateRow(event)");
		addButtonContainer.appendChild(newAddButton);
	  }
	} else {
	  alert("At least one row is required!");
	}
  }
  
  
  function addLanguageRow(event) {
	const languageRows = document.getElementById("language-rows");
	const currentRow = event.target.closest(".row");
  
	// Remove all "Add" buttons except for the last row
	const rows = languageRows.querySelectorAll(".row");
	rows.forEach((row) => {
	  const addButton = row.querySelector(".add-row");
	  if (addButton) addButton.remove();
	});
  
	// Clone the current row
	const newRow = currentRow.cloneNode(true);
  
	// Clear all input and select fields in the new row
	newRow.querySelectorAll("input").forEach((input) => (input.value = ""));
	newRow.querySelectorAll("select").forEach((select) => (select.value = select.options[0].value));
  
	// Add a new "Add" button to the last column
	const addButtonContainer = newRow.querySelector(".col-md-2:last-child");
	const newAddButton = document.createElement("a");
	newAddButton.href = "javascript:void(0)";
	newAddButton.className = "dash-btn-one add-row";
	newAddButton.innerHTML = '<i class="bi bi-plus"></i>Add';
	newAddButton.setAttribute("onclick", "addLanguageRow(event)");
	addButtonContainer.appendChild(newAddButton);
  
	// Append the new row
	languageRows.appendChild(newRow);
  }
  
  function removeLanguageRow(event) {
	const languageRows = document.getElementById("language-rows");
	const currentRow = event.target.closest(".row");
  
	if (languageRows.children.length > 1) {
	  currentRow.remove();
  
	  // Ensure the last row has an "Add" button
	  const rows = languageRows.querySelectorAll(".row");
	  const lastRow = rows[rows.length - 1];
	  const hasAddButton = lastRow.querySelector(".add-row");
  
	  if (!hasAddButton) {
		const addButtonContainer = lastRow.querySelector(".col-md-2:last-child");
		const newAddButton = document.createElement("a");
		newAddButton.href = "javascript:void(0)";
		newAddButton.className = "dash-btn-one add-row";
		newAddButton.innerHTML = '<i class="bi bi-plus"></i>Add';
		newAddButton.setAttribute("onclick", "addLanguageRow(event)");
		addButtonContainer.appendChild(newAddButton);
	  }
	} else {
	  alert("At least one row is required!");
	}
  }
  
  function addSkillRow(event) {
	const skillRows = document.getElementById("skill-rows");
	const currentRow = event.target.closest(".row");
  
	// Remove all "Add" buttons except for the last row
	const rows = skillRows.querySelectorAll(".row");
	rows.forEach((row) => {
	  const addButton = row.querySelector(".add-row");
	  if (addButton) addButton.remove();
	});
  
	// Clone the current row
	const newRow = currentRow.cloneNode(true);
  
	// Clear all input and select fields in the new row
	newRow.querySelectorAll("input").forEach((input) => (input.value = ""));
	newRow.querySelectorAll("select").forEach((select) => (select.value = select.options[0].value));
  
	// Add a new "Add" button to the last column
	const addButtonContainer = newRow.querySelector(".col-md-2:last-child");
	const newAddButton = document.createElement("a");
	newAddButton.href = "javascript:void(0)";
	newAddButton.className = "dash-btn-one add-row";
	newAddButton.innerHTML = '<i class="bi bi-plus"></i>Add';
	newAddButton.setAttribute("onclick", "addSkillRow(event)");
	addButtonContainer.appendChild(newAddButton);
  
	// Append the new row
	skillRows.appendChild(newRow);
  }
  
  function removeSkillRow(event) {
	const skillRows = document.getElementById("skill-rows");
	const currentRow = event.target.closest(".row");
  
	if (skillRows.children.length > 1) {
	  currentRow.remove();
  
	  // Ensure the last row has an "Add" button
	  const rows = skillRows.querySelectorAll(".row");
	  const lastRow = rows[rows.length - 1];
	  const hasAddButton = lastRow.querySelector(".add-row");
  
	  if (!hasAddButton) {
		const addButtonContainer = lastRow.querySelector(".col-md-2:last-child");
		const newAddButton = document.createElement("a");
		newAddButton.href = "javascript:void(0)";
		newAddButton.className = "dash-btn-one add-row";
		newAddButton.innerHTML = '<i class="bi bi-plus"></i>Add';
		newAddButton.setAttribute("onclick", "addSkillRow(event)");
		addButtonContainer.appendChild(newAddButton);
	  }
	} else {
	  alert("At least one row is required!");
	}
  }
  