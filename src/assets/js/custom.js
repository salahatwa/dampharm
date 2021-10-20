(function($) {
	'use strict';

	// START MENU JS
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 50) {
			$('.main-nav').addClass('menu-shrink');
		} else {
			$('.main-nav').removeClass('menu-shrink');
		}
	});
	// END MENU JS

    // Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});

	// Home Slider JS
	$('.home-slider').owlCarousel({
		items:1,
		loop:true,
		margin:0,
		nav: true,
		dots: true,
		smartSpeed: 1000,
		autoplay:true,
		autoplayHoverPause:true,
		navText: [
			"<i class='icofont-simple-left'></i>",
			"<i class='icofont-simple-right'></i>"
		],
	});

	// Testimonial Slider JS
	$('.testimonial-slider').owlCarousel({
		items:1,
		loop:true,
		margin:0,
		nav: true,
		dots: false,
		smartSpeed: 1000,
		animateOut: 'fadeOut',
		autoplay:true,
		autoplayHoverPause:true,
		navText: [
			"<i class='icofont-simple-left'></i>",
			"<i class='icofont-simple-right'></i>"
		],
	});
	
    // Search Box JS
    $('.search-toggle').addClass('closed');
    $('.search-toggle .search-icon').on('click', function(e) {
        if ($('.search-toggle').hasClass('closed')) {
        $('.search-toggle').removeClass('closed').addClass('opened');
        $('.search-toggle, .search-area').addClass('opened');
        $('#search-terms').focus();
        } else {
        $('.search-toggle').removeClass('opened').addClass('closed');
        $('.search-toggle, .search-area').removeClass('opened');
        }
	});

	// Slick Slider JS
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
		dots: false,
		fade: true,
        asNavFor: '.slider-nav'
    });
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		focusOnSelect: true,
		prevArrow: false,
		nextArrow: false,
		centerMode: true,
		focusOnSelect: true,
		variableWidth: true,
		responsive: [
		    {
		        breakpoint: 3000,
		        setting: {
		            slidesToShow: 3
		        }
		    },
		    {
		        breakpoint: 1400,
		        setting: {
		            slidesToShow: 2
		        }

		    },
		    {
		        breakpoint: 800,
		        setting: {
		            slidesToShow: 1
		        }

		    }
		]
	});

	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Accordion JS
	$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
	$('.accordion a').on('click', function(j) {
		var dropDown = $(this).closest('li').find('p');
		$(this).closest('.accordion').find('p').not(dropDown).slideUp(300);
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.accordion').find('a.active').removeClass('active');
			$(this).addClass('active');
		}
		dropDown.stop(false, true).slideToggle(300);
		j.preventDefault();
	});

	// Timer JS
	let getDaysId = document.getElementById('days');
	if(getDaysId !== null){
		const second = 1000;
		const minute = second * 60;
		const hour = minute * 60;
		const day = hour * 24;
		let countDown = new Date('July 30, 2020 00:00:00').getTime();
		setInterval(function() {
			let now = new Date().getTime();
			let distance = countDown - now;

			document.getElementById('days').innerText = Math.floor(distance / (day)),
			document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
			document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
			document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
		}, second);
	};

	// Wow JS
	new WOW().init();

	// Back to top 
	$('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-hand-drawn-up"></i></div>');
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	}); 
	$('#toTop').on('click', function(){
		$("html, body").animate({ scrollTop: 0 }, 900);
		return false;
	});
	
})(jQuery);

