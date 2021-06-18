$(document).ready(function() {
	let wid = $('.box').css('width');
	wid = parseInt(wid);
	if (wid >= 750) {
		$('.slider').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows: false,
			dots: true,
			appendDots: $('.main__popular__dots'),
		});
	} else {
		$('.slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			appendDots: $('.main__popular__dots'),
		});
	}
});
$('.main__popular__control_prev').on('click', function() {
	$('.slider').slick('slickPrev');
});
$('.main__popular__control_next').on('click', function() {
	$('.slider').slick('slickNext');
});