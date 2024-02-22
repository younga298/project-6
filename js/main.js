$(function () {
    $(".cardwrap").not(":first").hide();

    $('.button:first-of-type').css({ "background-color": "#5fb4c9" })

    $('.button:first-of-type').click(function () {
        $('.button').css({ "background-color": "transparent" })
        $(this).css({ "background-color": "#5fb4c9" })
        $(".cardwrap:nth-of-type(2)").fadeIn('slow');
        $(".cardwrap:nth-of-type(3)").hide();
        $(".cardwrap:nth-of-type(4)").hide();

    });

    $('.button:nth-of-type(3)').click(function () {
        $('.button').css({ "background-color": "transparent" })
        $(this).css({ "background-color": "#5fb4c9" })
        $(".cardwrap:nth-of-type(3)").fadeIn();
        $(".cardwrap:nth-of-type(2)").hide();
        $(".cardwrap:nth-of-type(4)").hide();
    });

    $('.button:nth-of-type(5)').click(function () {
        $('.button').css({ "background-color": "transparent" })
        $(this).css({ "background-color": "#5fb4c9" })
        $(".cardwrap:nth-of-type(4)").fadeIn();
        $(".cardwrap:nth-of-type(2)").hide();
        $(".cardwrap:nth-of-type(3)").hide();
    });


});

//
$(function () {
    $('.char img').mouseenter(function () {
        $(this).stop().animate({
            'width': '120%',
            'height': '120%'
        }, "slow")
    });

    $('.char img').mouseleave(function () {
        $(this).stop().animate({
            'width': '100%',
            'height': '100%'
        }, "slow")
    });

});


$(function () {

    if (window.matchMedia("(min-width: 1217px)").matches) {

        $('.prev').click(function () {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', -1200);
            $('.slide').stop().animate({ marginLeft: 0 }, 800);
        });

        $('.next').click(function () {
            $('.slide').stop().animate({ marginLeft: -1200 }, 800, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });
        });

    } else {

        let w = $(window).innerWidth();

        $('.prev').click(function () {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', -w);
            $('.slide').stop().animate({ marginLeft: 0 }, 800);
        });

        $('.next').click(function () {
            $('.slide').stop().animate({ marginLeft: -w }, 800, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });
        });

    }


});
$(function () {


    $(window).scroll(function () {
        let ws = $(this).scrollTop();

        let box1 = $('.box').eq(0).offset().top;
        if (ws > box1 - 500) {
            $('.box').eq(0).find(".inbox").css({ "opacity": "1", transform: "translateX(0)" });
        };

        let box2 = $('.box').eq(1).offset().top;
        if (ws > box2 - 500) {
            $('.box').eq(1).find(".inbox").css({ "opacity": "1", transform: "translateX(0)" });
        }

        let box3 = $('.box').eq(2).offset().top;
        if (ws > box3 - 500) {
            $('.box').eq(2).find(".inbox").css({ "opacity": "1", transform: "translateX(0)" });
        }
    })
});


$(function () {


    $(window).scroll(function () {
        let wsc = $(this).scrollTop();

        let dir2 = $('.mseeage').eq(0).offset().top;

        if (wsc > dir2 - 600) {
            $('.mseeage').eq(0).css("opacity", "1");
        };

        let dir3 = $('.mseeage').eq(1).offset().top;
        if (wsc > dir3 - 600) {
            $('.mseeage').eq(1).css("opacity", "1");
        }

        let dir4 = $('.mseeage').eq(2).offset().top;
        if (wsc > dir4 - 600) {
            $('.mseeage').eq(2).css("opacity", "1");
        }
    })
});  