$(function () {
    $('#sections').fullpage({
        resize: false,
        slidesNavigation: true,
        easing: 'easeInOutExpo',
        verticalCentered: false,
        menu: '#menu',
        //        verticalCentered: 'false',
        anchors: ['firstPage', '2ndPage', '3rdPage', '4thPage'],
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