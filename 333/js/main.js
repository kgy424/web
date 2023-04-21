$('.Nav ul li').mouseover(function () {
    $(this).find('.subMenu').stop().slideDown();
});

$(".Nav ul li").mouseleave(function () {
    $(this).find(".subMenu").stop().slideUp(500);
});