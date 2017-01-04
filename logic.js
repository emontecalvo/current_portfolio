$( document ).ready(function() {
	$('.home').on('click', function() {
		$("html, body").animate({ scrollTop: $('#home_section').offset().top }, 2000);
	})

	$('.about').on('click', function() {
		$("html, body").animate({ scrollTop: $('#about_section').offset().top }, 2000);
	})

	$('.projects').on('click', function() {
		$("html, body").animate({ scrollTop: $('#project_section').offset().top }, 2000);
	})
});
