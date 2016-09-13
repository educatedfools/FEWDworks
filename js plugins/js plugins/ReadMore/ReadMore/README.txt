fewdworks readmore arrow

to use:
include the jquery library and the fewdworks fastclick.js and readmore.js files into your project as well as the style.css file

<link rel="stylesheet" href="css/styles.css">
<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script type="application/javascript" src="js/fastclick.js"></script>

<!-- readmore plugin -->
<script type="application/javascript" src="js/readmore.js"></script>
       
        
               <script type="application/javascript">
	               window.addEventListener('load', function () {
		              FastClick.attach(document.body);
	               }, false);
                </script>

in html markup:
fewdworks readmore arrow requires some fairly simple markup within the <body>. An example follows:
<body>
    <main>
          <section class="page_copy">
           <h3>Welcome</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, iste quam ratione! Eos quis ipsa odio distinctio maxime est facilis placeat aut, rerum pariatur in temporibus obcaecati consequatur ipsam voluptates molestias tenetur fugiat, rem, quas deserunt eveniet libero. Repellendus totam quae possimus sint debitis, distinctio cum non hic a, ut quam aliquam, autem dolore. 
           </p>
           <section class="home_more">
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima pariatur ab necessitatibus, cupiditate modi neque vel molestiae exercitationem, voluptate nemo voluptatibus, ea corporis tenetur amet? Natus obcaecati, praesentium id? Velit facere quod officia temporibus, dolorum exercitationem voluptatibus optio nobis minima deserunt neque modi tempora voluptatum rerum aspernatur qui esse, perferendis nemo in tenetur impedit praesentium ut illo.</p>
           </section>
           <a href="#"><div class="more_arrow"><strong><small>READ MORE</small></strong></div></a>
            </section>       
    </main>
    <!-- read more plugin -->
   <script type="application/javascript" src="js/readmore.js"></script>
</body>

css:
fewdworks readmore arrow comes with default styling. these styles will apply as the .css file is required for the readmore arrow effect. Any user with basic css knowledge will be able to edit the appearance of the plugin by manually editing the css.

required jQuery:
none, just include the file in your project below your link to the jQuery library.

options:
fewdworks readmore arrow does not accept any options.