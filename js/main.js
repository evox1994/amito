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

});