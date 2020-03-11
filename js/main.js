$(document).ready(function(){

	$('.radio-btn').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$('.mobile-btn').click(function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$('.fancybox-gal').fancybox({loop: true});
	$('.fancybox').fancybox({touch: false});
	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$('.close-btn').click(function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('.mobile-menu').find('li.nav-drop').removeClass('active');
		$('body').removeClass('no-scroll');
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$('form button[type="submit"]').click(function(){
		if ( $(this).parents('form').find('.policy-text .radio-btn').length ){
			if ( $(this).parents('form').find('.policy-text .radio-btn').hasClass('active') ) {
				$(this).parents('form').find('input').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault(); 
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
				$(this).parents('form').find('textarea').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault(); 
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					} 
				});
			} else {
				$(this).parents('form').find('.policy-text .radio-btn').addClass('error');
				event.preventDefault();
			}
		} else {
			$(this).parents('form').find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).parents('form').find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				} 
			});
		}
	});

	$('.face-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 700
	});

	$('.partners').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.b-select select').chosen({
		disable_search: true
	});

	$(document).on('click','.filter-services li',function(){
		if ( !$(this).hasClass('active') ){
			var el = $(this).attr('data-filter');
			var btn = this;
			$(this).parents('.filter-services').find('li').removeClass('active');
			$(this).addClass('active');
			$('.services-wrap').animate({'opacity':0},300);
			setTimeout(function(){
				$(btn).parents('.services').find('.services-wrap').removeClass('active');
				$(el).addClass('active');
				$('.services-wrap').animate({'opacity':1},300);
			},300);
		}
	});

	function inputId(){
		var i = 0;
		$('.b-input').each(function(){
			i++;
			$(this).find('label').attr('for','inp-'+i);
			if ( $(this).find('input').length ){
				$(this).find('input').attr('id','inp-'+i);
			} else {
				$(this).find('textarea').attr('id','inp-'+i);
			}
		});
	}
	inputId();

	function footerYear(){
		var date = new Date();
		var year = date.getFullYear();
		$('#footer-year').text(year);
	}
	footerYear();

	$(document).on('click','.drop-cat-list li',function(){
		var el = $(this).attr('data-drop');

		if ( !$(this).hasClass('active') ){
			$(this).parents('.drop-cat-list').find('li').removeClass('active');
			$(this).parents('.drop-wrap').find('.drop-cat-wrap').removeClass('active');
			$(this).addClass('active');
			$(el).addClass('active');
		}
	});

	$(document).on('click','li.nav-drop span',function(){
		$(this).parent('li.nav-drop').addClass('active');
	});

	$(document).on('click','.drop-back',function(){
		$(this).parent('.drop').parent('li.nav-drop').removeClass('active');
	});

	$('.anim-squere').mousemove(function(e){
		var sw = $(this).outerWidth();
		var sh = $(this).outerHeight();
		var X = e.pageX;
		var Y = e.pageY;

		if ( $(window).width() > 1024 ){
			$(this).find('.anim-img').css('transform','translate('+(sw/2 - X)*0.05+'px,'+(sh/2 - Y)*0.1+'px)');
		}
	});

	function dropHeight(){
		var hh = $('.header').outerHeight() - 10;
		var st = $(window).scrollTop();
		var dh = hh - st;
		var vg = $('.header-bot').offset().top + $('.header-bot').outerHeight();

		if ( $(window).width() > 1024 ){
			if ( st < vg ){
				$('.li-drop-block').css('height','calc(100vh - '+dh+'px)');
			} else {
				$('.li-drop-block').css('height','100vh');
				$('.li-drop-block').parents('li.li-drop').addClass('no-hover');
				setTimeout(function(){
					$('.li-drop-block').parents('li.li-drop').removeClass('no-hover');
				},100);
			}
		} else {
			$('.li-drop-block').css('height','calc(100vh - 108px)');
		}
	}
	dropHeight();

	function newsScroll(){
		if ( $('.news-fix').length ){
			if ( $(window).width() > 768 ) {
				var vg = $('.news-wrap').offset().top - 30;
				if ( $(window).width() < 1024 ){
					vg = vg - 67;
				}
				var ng = vg + $('.news-wrap').outerHeight() - $('.news-fix').outerHeight();
				var st = $(window).scrollTop();
				$('.news-wrap').css('min-height',$('.news-fix').outerHeight());

				if ( st > vg ) {
					if ( st > ng ) {
						$('.news-fix').removeClass('scroll');
						$('.news-fix').addClass('bottom');
					} else {
						$('.news-fix').addClass('scroll');
						$('.news-fix').removeClass('bottom');
					}
				} else {
					$('.news-fix').removeClass('scroll');
					$('.news-fix').removeClass('bottom');
				}
			} else {
				$('.news-fix').removeClass('scroll');
				$('.news-fix').removeClass('bottom');
				$('.news-wrap').css('min-height','auto');
			}
		}
	}
	newsScroll();

	$(window).scroll(function(){
		newsScroll();
		dropHeight();
	});

	$(window).resize(function(){
		newsScroll();
		dropHeight();
	});

});