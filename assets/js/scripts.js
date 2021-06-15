$(function() {
	let header = $('.header');
	
	$(window).scroll(function() {
		if($(this).scrollTop() > 1) {
			header.addClass('header_scroll');
		} else {
			header.removeClass('header_scroll');
		}
	});
});

$(function() {
	let header = $('.header');
	let height = header.height();
	
	$(window).scroll(function() {
		if($(this).scrollTop() > 1) {
			header.addClass('header_scroll');
			$('body').css({
				'paddingTop': height+'px'
			});
		} else {
			header.removeClass('header_scroll');
			$('body').css({
				'paddingTop': 0
			})
		}
	});
});