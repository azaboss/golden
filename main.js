$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 80) {
        $('.header').addClass('fixed');
        $('.header_wrapper').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
        $('.header_wrapper').removeClass('fixed');
    }
});
$(function(){
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();
		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;
		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 800,'swing');
		nav.removeClass('show')
	})

	let nav = $('#nav');
	let navToggle = $('#navToggle');
	navToggle.on("click",function(event){
		nav.toggleClass("show");
	})
});
$(document).ready( function() {
    /* Check width on page load*/
    if ( $(window).width() <991.98) {
     $('.header').addClass('fixed');
    }
    else {}
 });

 $(window).resize(function() {
    /*If browser resized, check width again */
    if ($(window).width() < 991.98) {
     $('.header').addClass('fixed');
    }
    else {$('.header').removeClass('fixed');}
 });