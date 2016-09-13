(function ($) {
    "use strict";
    $.fn.fewdworksSlider = function (options) {
        var defaults = {
            speed: 1000,
            pause: 4000,
            transition: 'fade'
        },
            options = $.extend(defaults, options);

        this.each(function () {
            var $this = $(this);
            $this.wrap('<div class="slider-wrap"></div>');
            $this.css({
                'width' : '99999px',
                'position' : 'relative',
                'padding' : 0
            });
            if (options.transition === 'slide') {
                $this.children().css({
                    'float' : 'left',
                    'list-style' : 'none'
                });
                $('.slider-wrap').css({
                    'width': $this.children().width(),
                    'overflow' : 'hidden'
                });
            }
            if (options.transition === 'fade') {
                $this.children().css({
                    'width' : $this.children().width(),
                    'position' : 'absolute',
                    'left' : 0
                });
                var i, y;
                for (i = $this.children().length - 1, y = 0; i >= 0; i--, y++) {
                    $this.children().eq(y).css('zIndex', i + 99999);
                }
                fade();
            }//end fade if
                
            if (options.transition === 'slide') {
                slide();
            }
                
            function fade() {
                setInterval(function () {
                    $this.children(':first').animate({'opacity' : 0}, options.speed, function () {
                        $this
                            .children(':first')
                            .css('opacity', 1)
                            .css('zIndex', $this.children(':last').css('zIndex') - 1)
                            .appendTo($this);
                    });
                }, options.pause);
            }
            function slide() {
                setInterval(function () {
                    $this.animate({'left' : '-' + $this.parent().width()}, options.speed, function () {
                        $this
                            .css('left', 0)
                            .children(':first')
                            .appendTo($this);
                    });
                }, options.pause);
            }
        });
    };
})(jQuery);
