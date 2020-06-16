$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.nav-list li').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
});