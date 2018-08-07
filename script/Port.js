$(document).ready(function () {
    $('#sections').fullpage({
        resize: false,
        slidesNavigation: false,
        easing: 'easeInOutExpo',
        menu: '#menu',
        //        verticalCentered: 'false',
        anchors: ['1page', '2page', '3page', '4page', '5page'],
        onLeave: function (index, nextIndex, direction) {
            //            if (index == 1) {
            //                $("header").fadeOut();
            //            }
            //            if (nextIndex == 1) {
            //                $("#header").fadeIn();
            //            } else {
            //                $("#header").fadeOut();
            //            }
        },
        afterLoad: function (anchorLink, index) {

            if (index == 4) {
                $("footer").fadeIn();
            } else {
                $("footer").fadeOut();
            }
        }
    });
});

$(document).ready(function () {
    $(".bxslider").bxSlider({
        auto: true,
        pause: 3000,
        pager: false,
        speed: 600,
        infinteloop: true,
    });
});