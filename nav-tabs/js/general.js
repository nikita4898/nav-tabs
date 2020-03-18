$(document).ready(function () {
	var blocks = $('.tab-block'),
	nav = $('.page-nav');

	nav.find('a').on('click', function () {
		var id = $(this).attr('href');
		nav.find('a').removeClass('active');
		$(this).addClass('active');
		setTimeout(function () {
			blocks.removeClass('active');
			$(id).addClass("active");
		},100);
		blocks.removeClass('show');
		$(id).addClass("show");
		return false;
	});
});