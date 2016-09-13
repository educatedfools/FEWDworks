(function ($) {
    var $moreToggle = true;
    $('.home_more').css('display', 'none');
    $('.more_arrow').on("click", function (event) {
        if ($moreToggle) {
            $(".home_more").slideDown();
            $(this).css('background-position', '32px -7px');
            $moreToggle = false;
        } else {
            $(".home_more").slideUp();
            $moreToggle = true;
            $(this).css('background-position', '32px 23px');
        }
        event.preventDefault();
    });
})(jQuery);