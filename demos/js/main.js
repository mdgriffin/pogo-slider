$(document).ready(function () {

	$('#js-main-slider').pogoSlider({
		autoplay: true,
		autoplayTimeout: 5000,
		displayProgess: true,
		preserveTargetSize: true,
		targetWidth: 1000,
		targetHeight: 300,
		responsive: true
	}).data('plugin_pogoSlider');

	var transitionDemoOpts = {
		displayProgess: false,
		generateNav: false,
		generateButtons: false
	}

	$('#demo1').pogoSlider(transitionDemoOpts);
	$('#demo2').pogoSlider(transitionDemoOpts);
	$('#demo3').pogoSlider(transitionDemoOpts);
	$('#demo4').pogoSlider(transitionDemoOpts);
	$('#demo5').pogoSlider(transitionDemoOpts);
	$('#demo6').pogoSlider(transitionDemoOpts);
	$('#demo7').pogoSlider(transitionDemoOpts);
	$('#demo8').pogoSlider(transitionDemoOpts);
	$('#demo9').pogoSlider(transitionDemoOpts);
	$('#demo10').pogoSlider(transitionDemoOpts);
	$('#demo11').pogoSlider(transitionDemoOpts);
	$('#demo12').pogoSlider(transitionDemoOpts);

});