; (function ($, window, undefined) {
	'use strict';

	$.fn.foundation = function () {
		$.fn.foundationAlerts ? $(this).foundationAlerts() : null;
		$.fn.foundationButtons ? $(this).foundationButtons() : null;
		$.fn.foundationAccordion ? $(this).foundationAccordion() : null;
		$.fn.foundationNavigation ? $(this).foundationNavigation() : null;
		$.fn.foundationTopBar ? $(this).foundationTopBar() : null;
		$.fn.foundationCustomForms ? $(this).foundationCustomForms() : null;
		$.fn.foundationMediaQueryViewer ? $(this).foundationMediaQueryViewer() : null;
		$.fn.foundationTabs ? $(this).foundationTabs({ callback: $.foundation.customForms.appendCustomMarkup }) : null;
		$.fn.foundationTooltips ? $(this).foundationTooltips() : null;
		$.fn.foundationMagellan ? $(this).foundationMagellan() : null;
		$.fn.foundationClearing ? $(this).foundationClearing() : null;
		$.fn.placeholder ? $(this).find('input, textarea').placeholder() : null;
	};

	var $doc = $(document),
		Modernizr = window.Modernizr;

	$(document).ready(function () {
		$doc.foundation();
	});

	// UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
	// $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
	// $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
	// $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
	// $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

	// Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
	if (Modernizr.touch && !window.location.hash) {
		$(window).load(function () {
			setTimeout(function () {
				window.scrollTo(0, 1);
			}, 0);
		});
	}

})(jQuery, this);