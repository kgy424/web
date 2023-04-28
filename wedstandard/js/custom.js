$(".tit .btn").click(function () {
    // $(".Nav").css({display:"block"})
    // $(".Nav").show(); //위에 css랑 같은 효과
    // $(".Nav").slideDown();
    //$(".Nav").toggle();//버튼에 두 가지 기능을 부여함(열고/닫고)
    //$(".Nav").fadeToggle();//천천히 나타나고 천천히 사라지는 효과
    $(".Nav").slideToggle(); //슬라이드로 나타났다가 사라짐
    $(this).toggleClass("on")
});

// banner
$(document).ready(function () {
    $('.ban').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

});

//tab Menu
let tab_list = $('.tab_Menu');

tab_list.find("ul ul").hide();
tab_list.find("li.active>ul").show();

$(".tab_Menu>ul>li>a").click(function (e) {
    e.preventDefault();
    var $this = $(this);

    //next()는 바로 밑 요소(바로 아래 동생)
    //.parent()s는 내가 클릭한 것의 부모(바로 위)
    //.siblings() 니를 제외한 형제들
    //.find() 하위요소(내 안에 있는 요소들)
    // $this.next().show();
    // $this.parent('li').addClass("active");
    // $this.parent('li').siblings("li").removeClass("active");
    // $this.parent('li').siblings("li").find("ul").hide();

    $this.next().show().parent('li').addClass("active").siblings("li").removeClass("active").find("ul").hide();

})