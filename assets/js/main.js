const aDiv = document.getElementById("a-project1");
const aDiv2 = document.getElementById("a-project2");
const aDiv3 = document.getElementById("a-project3");

aDiv.addEventListener("mouseenter", () => {
	const backDrop = document.getElementById("backDrop1")
	backDrop.style.display = "flex"
});
aDiv.addEventListener("mouseleave", () => {
	const backDrop = document.getElementById("backDrop1")
	backDrop.style.display = "none"
});

aDiv2.addEventListener("mouseenter", () => {
	const backDrop = document.getElementById("backDrop2")
	const text = document.querySelector(".backDrop__text");
	backDrop.style.display = "flex";
	text.style.marginTop = "31%";
});
aDiv2.addEventListener("mouseleave", () => {
	const backDrop = document.getElementById("backDrop2")
	const text = document.querySelector(".backDrop__text");
	backDrop.style.display = "none";
	text.style.marginTop = "37%";
});

aDiv3.addEventListener("mouseenter", () => {
	const backDrop = document.getElementById("backDrop3")
	backDrop.style.display = "flex"
});
aDiv3.addEventListener("mouseleave", () => {
	const backDrop = document.getElementById("backDrop3")
	backDrop.style.display = "none"
});

/*
	Overflow by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 10

		};

	// Breakpoints.
		breakpoints({
			wide:    [ '1081px',  '1680px' ],
			normal:  [ '841px',   '1080px' ],
			narrow:  [ '737px',   '840px'  ],
			mobile:  [ null,      '736px'  ]
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-scroll');

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly-middle').scrolly({
			speed: 1000,
			anchor: 'middle'
		});

		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return (breakpoints.active('<=mobile') ? 70 : 190); }
		});

	// Parallax background.

		// Disable parallax on IE/Edge (smooth scrolling is jerky), and on mobile platforms (= better performance).
			if (browser.name == 'ie'
			||	browser.name == 'edge'
			||	browser.mobile)
				settings.parallax = false;

		if (settings.parallax) {

			var $dummy = $(), $bg;

			$window
				.on('scroll.overflow_parallax', function() {

					// Adjust background position.
						$bg.css('background-position', 'center ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');

				})
				.on('resize.overflow_parallax', function() {

					// If we're in a situation where we need to temporarily disable parallax, do so.
						if (breakpoints.active('<=narrow')) {

							$body.css('background-position', '');
							$bg = $dummy;

						}

					// Otherwise, continue as normal.
						else
							$bg = $body;

					// Trigger scroll handler.
						$window.triggerHandler('scroll.overflow_parallax');

				})
				.trigger('resize.overflow_parallax');

		}

	// Poptrox.
		$('.gallery').poptrox({
			useBodyOverflow: false,
			usePopupEasyClose: false,
			overlayColor: '#0a1919',
			overlayOpacity: 0.75,
			usePopupDefaultStyling: false,
			usePopupCaption: true,
			popupLoaderText: '',
			windowMargin: 10,
			usePopupNav: true
		});

})(jQuery);