$(document).ready(function() {
	var wHeight = $(window).height();
	var wScroll = $(this).scrollTop();

	createGallery(1);
	createGallery(2);
	createGallery(3);
	createGallery(4);

	$(window).resize(function() {
		wHeight = $(window).height();
		wWidth = $(window).width();
	});

	$(window).scroll(function() {
		// how far I've scrolled
		wScroll = $(this).scrollTop();
		
		$('.logo').css({
			'transform':'translate(0px, ' + wScroll/4 + '%)'
		});

		$('.container').css({
			'background-position':'center -' + wScroll/2 + 'px'
		});

		$('.outer-container').css({
			'background-position':'center -' + wScroll/4 + 'px'
		});

		showBox('#stuttgart');
		showBox('#heidelberg');
		showBox('#mercedes');
		showBox('#weihnachtsmarkt');
	});

	function createGallery(i) {
		$('.gallery-container-' + i).slick({
			infinite:true,
			slidesToShow:2,
			slidesToScroll:1,
			prevArrow: $('.prev-' + i),
			nextArrow: $('.next-' + i),
			responsive: [
				{
					breakpoint:980,
					settings: {
						slidesToShow:1,
						slidesToScroll:1,
						infinite:true
					}
				}
			]
		});
	}

	function showBox(id) {
		if(wScroll > $(id).offset().top - ($(window).height()/1.3)) {
			$(id + ' .box').addClass('is-showing');
		}
	}
});