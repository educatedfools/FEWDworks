fewdworks slider:

to use:

include the jquery library and the fewdworksSlider.js file into your project.
<script type="text/javascript" src="/path/to/jquery.js"></script>
<script type="text/javascript" src="/path/to/fewdworksSlider.js"></script>

in html markup:
fewdworksSlider works with <ul> and <li> elements. You don't need class names for container divs, just the list.
<ul>
 <li>...</li>
 <li>...</li>
 <li>...</li>
</ul>

required jQuery:
All that needs to be done is to call the fewdworksSlider(); method in a script tag.
<script>
    $('ul').fewdworksSlider();
</script>

options:
fewdworksSlider will take 3 different options: speed, pause, and transition.
The defaults are:
speed: 1000,
pause: 4000,
transition: 'fade'
To change these defaults you need to place list them in the method call. Example:
<script>
    $('ul').fewdworksSlider({
	speed: 2000,
	pause: 8000,
	transition: 'slide'
    });
</script>
A couple things to note on the options. Speed needs to be lower than pause or it will create a flicker effect and effectively break the slider. transition supports only slide and fade at this time.


