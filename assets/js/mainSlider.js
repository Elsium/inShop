$(document).ready(function() {
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		appendDots: $('.main__popular__dots'),
	});
});
$('.main__popular__control_prev').on('click', function() {
	$('.slider').slick('slickPrev');
});
$('.main__popular__control_next').on('click', function() {
	$('.slider').slick('slickNext');
});