fewdworks accordion

to use:
include the jquery library and the fewdworksSlider.js file into your project as well as the style.css file
<link type="text/css" rel="stylesheet" href="style.css">
<script type="text/javascript" src="/path/to/jquery.js"></script>
<script type="text/javascript" src="/path/to/script.js"></script>

in html markup:
fewdworks accordion requires some fairly simple markup. An example follows, you can add more divs to expand the accordion.
<div id="accordion">
    <a href="#one" class="first">Recent Posts</a>
    <div id="one">
        this is some info.
    </div>
    
    <a href="#two">Popular Posts</a>
    <div id="two">
        this is some more info.
    </div>
    
    <a href="#three">Archived Posts</a>
    <div id="three">
        this is even more info.
    </div>
</div>

css:
fewdworks accordion comes with default styling. these styles will apply as the .css file is required for the accordion effect. Any user with basic css knowledge will be able to edit the appearance of the plugin by manually editing the css.

required jQuery:
none, just include the file in your project below your link to the jQuery library.

options:
fewdworks accordion does not accept any options.