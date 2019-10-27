(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300
		});

	// Nav.

		// Toggle.
			$(
				'<div id="navToggle">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<a href="#" class="btn"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

								// ===== Fade in Element ====
				$window.scroll(function() {
				    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
				        $('#return-to-top').fadeIn(200);    // Fade in the arrow
				    } else {
				        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
				    }
				});


				$window.scroll(function() {
				    if ($(this).scrollTop() >= 45) {
				      $('#header-wrapper').addClass('headerChange');
				      //$('.logoSwitch').attr("src","images/MCG.svg");
				    } else {
				      $('#header-wrapper').removeClass('headerChange');
				      //$('.logoSwitch').attr("src","images/MCG-white.svg");
				    }
				});


				// ===== Scroll to Top ====
				$('#return-to-top').click(function() {      // When arrow is clicked
				    $('body,html').animate({
				        scrollTop : 0                       // Scroll to top of body
				    }, 500);
				});

				var pContainerHeight = $('body').height();

				$window.scroll(function(){
				  var wScroll = $(this).scrollTop();
				  if (wScroll <= pContainerHeight) {
				    $('.logo').css({
				      'transform' : 'translate(0px, '+ wScroll /3 +'%)'
				    });
				  }
				});

})(jQuery);
