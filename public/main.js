$(document).ready(function () {
    (function ($) {
        "use strict";



        $(function () {
            var header = $(".start-style");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 50) {
                    header.removeClass('start-style').addClass("scroll-on");
                } else {
                    header.removeClass("scroll-on").addClass('start-style');
                }
            });
        });
    })(jQuery);



})


window.addEventListener('load', function () {
    $("#payInvoice").click(function () {
        $("#togglerBtnPaypal").slideToggle();
    });




    var $btn = document.getElementsByClassName('btn-main');
    var mouseObj = {
        mouseCoords: null,
        mousetThreshold: 0.12,
        manageMouseLeave: function (event) {
            event.currentTarget.style.boxShadow = "var(--dark)";
            // update btn gradient
            event.currentTarget.style.background = "var(--secondary)";
        },
        manageMouseMove: function (event) {
            var dot, eventDoc, doc, body, pageX, pageY;

            event = event || window.event; // IE-ism
            target = event.currentTarget;
            // (old IE)
            if (event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;

                event.pageX = event.clientX +
                    (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                    (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY +
                    (doc && doc.scrollTop || body && body.scrollTop || 0) -
                    (doc && doc.clientTop || body && body.clientTop || 0);
            }

            // Use event.pageX / event.pageY here

            //normalize
            //bodyRect = document.body.getBoundingClientRect(),
            var elemRect = target.getBoundingClientRect(),//$btn.getBoundingClientRect(),
                mean = Math.round(elemRect.width / 2);
            //offset   = elemRect.top - bodyRect.top;

            //mouseObj.mouseCoords = {mouse_x: event.pageX - elemRect.left , mouse_y:event.pageY - elemRect.top}
            mouseObj.mouseCoords = {
                mouse_true_x: event.pageX - elemRect.left,
                mouse_x: (event.pageX - elemRect.left - mean) * mouseObj.mousetThreshold,
                mouse_y: event.pageY - elemRect.top
            }
            mouseObj.manageButtonShadow(-1, target);
        },
        manageButtonShadow: function (direction, target) {
            if (mouseObj.mouseCoords) {
                mouseObj.mouseCoords.mouse_x = Math.floor(mouseObj.mouseCoords.mouse_x);
                target.style.boxShadow = direction * mouseObj.mouseCoords.mouse_x + "px 8px 0 rgba(0,0,0,0.2)";

                // update btn gradient
                target.style.background = "radial-gradient(at " + mouseObj.mouseCoords.mouse_true_x + "px, #240e35d4 0%, var(--secondary) 80%)";

                //2a3d52

                //45576e
            }
        }
    }

    // init listeners
    for (i = 0; i < $btn.length; i++) {
        $btn[i].addEventListener('mousemove', mouseObj.manageMouseMove, false);
        $btn[i].addEventListener('mouseleave', mouseObj.manageMouseLeave, false);
    }


    (function ($) {




        "use strict";

        $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
            if ($(window).width() > 750) {
                var _d = $(e.target).closest('.nav-item'); _d.addClass('show');
                setTimeout(function () {
                    _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
                }, 1);
            }
        });


    })(jQuery);
});

