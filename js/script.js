
$(document).ready(function () {

	var exampleSlider = $('#example-full-width').pogoSlider({
		autoplay: false,
		onSlideStart: function (slideIndex) {
			$('#js-example-nav button').removeClass('pogoSlider-nav-btn--selected');
			$('#js-example-nav button').eq(slideIndex).addClass('pogoSlider-nav-btn--selected');
		}
	}).data('plugin_pogoSlider');

	$('#js-example-next-btn').on('click', function () {
		exampleSlider.nextSlide();
	});

	$('#js-example-prev-btn').on('click', function () {
		exampleSlider.prevSlide();
	});

	$('#js-example-nav button').on('click', function () {
		exampleSlider.toSlide($(this).data('num'));
	});


	var demos = [];
	var currentDemo = 0;


	var demoOpts = {
		generateNav: false,
		generateButtons: false,
		autoplay: false
	};

	demos.push($('#demo1').pogoSlider(demoOpts).data('plugin_pogoSlider'));
	demos.push($('#demo2').pogoSlider(demoOpts).data('plugin_pogoSlider'));
	demos.push($('#demo3').pogoSlider(demoOpts).data('plugin_pogoSlider'));
	demos.push($('#demo4').pogoSlider(demoOpts).data('plugin_pogoSlider'));
	demos.push($('#demo5').pogoSlider(demoOpts).data('plugin_pogoSlider'));
	demos.push($('#demo6').pogoSlider(demoOpts).data('plugin_pogoSlider'));
	demos.push($('#demo7').pogoSlider(demoOpts).data('plugin_pogoSlider'));
	demos.push($('#demo8').pogoSlider(demoOpts).data('plugin_pogoSlider'));
	demos.push($('#demo9').pogoSlider(demoOpts).data('plugin_pogoSlider'));
	demos.push($('#demo10').pogoSlider(demoOpts).data('plugin_pogoSlider'));
	demos.push($('#demo11').pogoSlider(demoOpts).data('plugin_pogoSlider'));
	demos.push($('#demo12').pogoSlider(demoOpts).data('plugin_pogoSlider'));

	setInterval(function () {

		if (++currentDemo === demos.length) {
			currentDemo = 0;
		}

		demos[currentDemo].nextSlide();

	},1000);


	(function () {

		$('.elementDemos-single').css({
			'-webkit-animation-duration': '1000ms',
			'-moz-animation-duration': '1000ms',
			'animation-duration': '1000ms'
		});

		$('.elementDemos-single').on('click', function () {

			var self = this;
			var $self = $(this);

			/*
			$('.elementDemos-single').each(function () {
				$(this).
			});
			*/

			$self.addClass('pogoSlider-animation-' + $self.data('transition') + 'In');
			
			setTimeout(function () {

				$self.removeClass(function (index,classNames) {
					return (classNames.match (/pogoSlider-animation-[a-zA-Z1-9]+/ig) || []).join(' ');
				});

			},1050);

		});

	})();

});
