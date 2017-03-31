/*------------------------------------
 *Author:FortunaTheme
 *Template:Experta
 *Version:1.0
 *-------------------------------------
 */
(function($) {

    "use strict";

    jQuery(document).ready(function() {


            var themeWindow=$(window);

            var scrollTopBtn = $("#scroll-top-area");

                   scrollTopBtn.on("click", function() {
                       pagebody.animate({
                           scrollTop: 0
                       }, 2000);
                   });

            themeWindow.on("scroll", function() {
                var top2 = themeWindow.scrollTop();
                var pageHeader=$("header");
                var scrollTopArea=$("#scroll-top-area");
                if (top2 < 150) {
                    scrollTopArea.css('display', 'none');
                } else if (top2 >= 150) {
                    scrollTopArea.css('display', 'block');
                }
                var scroll = themeWindow.scrollTop();

                if (scroll >= 70) {
                    pageHeader.addClass("dark-header");
                } else {

                    if (pageHeader.hasClass("dark-header")) {

                        pageHeader.removeClass("dark-header");

                    }

                }
            });


        /*
         * -----------------------------------------------------------------
         *-------------------single-page-nav-plugin------------------------
         * -----------------------------------------------------------------
         */


        // The actual plugin
            var singleNav = jQuery('.navbar-nav');
            singleNav.singlePageNav({
                offset: singleNav.outerHeight(), // Offset from top
                currentClass: 'current',         // Class added to menu link when section is active
                currentThreshold: 250,           // Threshold for triggering current section action
                duration: 250,                   // Duration of scroll animation in milliseconds
                effect: 'swing',                 // Effect for scroll animation
                started: function (){            // Callback at start of animation
                    console.log('Started');
                },
                finished: function (){           // Callback after animation is finished
                    console.log('Finished')
                }
            });



            /*
             * -----------------------------------------------------------------
             *------------------------------Typed.js----------------------------
             * -----------------------------------------------------------------
             */

            var element = $(".element");

            $(function() {
                element.typed({
                    strings: ["developer", "designer", "geek", "MeyerZhao"],
                    typeSpeed: 100,
                    loop: false,
                    callback: function(){
                        lift();
                    }
                });
                function lift(){
                        $(".head-text").addClass('lift-text');
                    }
            });

    });

})(jQuery);