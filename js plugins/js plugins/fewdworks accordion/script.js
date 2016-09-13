$(document).ready(function () {
    "use strict";
    (function ($) {
        $.fn.accordion = function () {
            var link = $("#accordion a");
            link.on('click', function (event) {
                event.preventDefault();
                var a = $(this).attr("href");
                $(a).slideDown('fast');
                $("#accordion div").not(a).slideUp('fast');
            });
        };
    }(jQuery));
    $('accordion a').accordion();
});