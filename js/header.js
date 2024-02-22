$(function () {
    $('#menu>li').mouseover(function () {
        $(this).children('.second').stop().slideDown();
    }).mouseout(function () {
        $('.second').stop().slideUp();
    });
});
$(function () {

    $(".headerright").click(function () {

        $("#menu").slideToggle();

    });

});