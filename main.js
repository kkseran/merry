var swiper = new Swiper('.mySwiper', {
	loop: true,
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
});
var swiper2 = new Swiper('.mySwiper2', {
	loop: true,
	spaceBetween: 10,
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
	},
	thumbs: {
		swiper: swiper,
	},
});

$('#g .drop').click(function () {
	var $this = $(this);
	if ($this.hasClass('on')) {
		$this.removeClass('on');
		$this.find('.num').slideUp();
	} else {
		$this.addClass('on');
		$this.find('.num').slideDown();
	}
});
