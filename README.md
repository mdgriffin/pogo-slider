# Pogo Slider Jquery Plugin

See http://fluice.com/pogo-slider for demos and further info

## About

Pogo Slider is a jQuery plugin that allows you to create animated image/content sliders. CSS animations are used to transition between slides. A CSS animation can be triggered on element within a slide, after the slide transitions in, and as the slide transitions out.

## Usage

### markup

	<div class="pogoSlider">

		<div class="pogoSlider-slide" data-transition="slideOverLeft" data-duration="1000"  style="background-image:url(img/slide1.jpg);">
			<h2 class="pogoSlider-slide-element" data-in="slideDown" data-out="slideUp" data-duration="750" data-delay="500">Your Content Here!</h2>
		</div>
		<div class="pogoSlider-slide " data-transition="fold" data-duration="1000"  style="background-image:url(img/slide2.jpg);"></div>

	</div><!-- .pogoSlider -->

### Instantiating the plugin and calling the slider methods

	var mySlider = $('.mySlider').pogoSlider(/* opts */).data('plugin_pogoSlider');

	mySlider.pause(); // Pauses the slider on the current slide, only works if autoplay option set to true

	mySlider.resume(); // Resumes the slider back to normal operation

	mySlider.nextSlide(); // Transition to the next slide

	mySlider.prevSlide(); // Transition to the previous slide

	mySlider.toSlide(2); // Transitions to the slide index passes to the method

	mySlider.destroy(); // Destroys the plugin, restoring elements to their default state

### Options

#### autoplay (Boolean)

When set to true, slides transition between one another automatically

#### autoplayTimeout (Integer)

The amount of time between a slide transitioning in ends and slide transition out starts. Only applied when autoplay is set to true

#### displayProgess (Boolean)

Creates a progress bar that displays the amount of time left until the current slide transitions out. Only applied when autoplay is set to true

#### baseZindex (Integer)

Used when setting the z-index of slides. Raise the Number if you need the slider to overlap another element

#### onSlideStart (Function)

Callback function that runs on slide start. Receives the index of the current slide

#### onSlideEnd (Function)

Callback function called on slide end. Receives the index of the current slide

#### onSliderPause (Function)

Callback function called when the slider has been paused, receives index of current slide

#### onSliderResume (Function)

Callback function called when the slider has resumed after being paused. Received the index of the current slide

#### slideTransition (String)

Sets the default slide transitions. Only used if the data-transition property has not been set on the slides element

#### slideTransitionDuration (Integer)

The default slide transitoins duration. Only used if the data-duration property has not been set on the slides element

#### elementTransitionStart (Integer)

The default element transition start time. Only used if the data-start property has not been set on an element

#### elementTransitionDuration (Integer)

The default element transition duration. Only used if the data-duration property has not been set on an element

#### elementTransitionIn (String)

The default element transition in animation. Only used if the data-in property has not been set on an element

#### elementTransitionOut (String)

The default element transition in animation. Only used if the data-out property has not been set on an element

#### generateButton (Boolean)
 
Generates next and previous buttons and sets the click event handlers

#### buttonPosition (String)

Where the buttons should be positionsed. Possible values:

- TopLeft
- TopRight
- BottomLeft
- BottomRight
- CenterHorizontal
- CenterVertical

#### generateNav (Boolean)

Generates a clickable nav item for each slide

#### navPosition (String)

Where the nav will be positioned. Possible values:

- Top
- Bottom
- Left
- Right

#### preserveTargetSize (Boolean)

Sets if the slider and all the elements should be scaled relative to the target size. Preserves the aspect ratio and allows you to style the slider
and all the elements at a target size and have the that styling be preserved even when scaling to smaller devices.

#### responsive (Boolean)

If set to true, sets window resize handler to call the preserveTargetSize method if the slider is resized

#### targetWidth (Integer)

Used with the preserveTargetSize method to allow your slider to appear consistently across different screen sizes

#### targetHeight (Integer)

Used with the preserveTargetSize method to allow your slider to appear consistently across different screen sizes

#### pauseOnHover (Boolean)

Sets events handlers to pause and resume the slider on mouseover


### Slide Transitions

Transitions can be set on each slide with the data-transition attribute. If no transitions is set on the slide, it will fallback to the transition set with slideTransition option

- fade
- slide
- verticalSlide
- slideLeft
- slideRight
- slideUp
- slideDown
- slideRevealLeft
- slideRevealRight
- slideOverLeft
- slideOverRight
- expandReveal
- shrinkReveal
- verticalSplitReveal
- horizontalSplitReveal
- zipReveal
- barRevealDown
- barRevealUp
- barReveal
- blocksReveal
- fold
- foldLeft
- foldRight

### Element Animations

Animations can be set on each element with the data-in and data-out attributes. Falls back to the transition set in the elementTransitionIn and elementTransitionOut settings.

- slideDown
- slideUp
- slideRight
- slideLeft
- expand
- contract
- spin
- sideFall
- horizontal3DFlip
- vertical3DFlip
- 3DPivot
- rollLeft
- rollRight
- glideLeft
- glideRight
- flipX
- flipY

### Creating your own element animations

You can define your own CSS animations to be triggered on an element. Each animation must be namespaced with 'pogoSlider-animation' and have both and in and out variant. The In animation is triggered when the slide transition starts, the Out animation is triggered as the slide transitions out

	.pogoSlider-animation-slideDownIn {
		animation-name: animationInName;
	}

	.pogoSlider-animation-slideDownOut {
		animation-name: animationOutName;
	}