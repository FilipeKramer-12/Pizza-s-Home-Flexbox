// Menu Mobile
$('.mobile-btn').click(function(){
	$(this).toggleClass('active');
	$('.mobile-menu').toggleClass('active');
});

// Slider Principal
new SimpleSlide({
	slide: 'principal',
	nav: true,
	time: 2000, 
  });