
$(".floatingMenu-main").hover(function() {
    $(".active").removeClass("active");
    $(".active2").removeClass("active2");
    $(this).addClass("active");
    $(this).siblings().addClass("active2");
});

$(".floatingMenu-main2").hover(function() {
    $(".active-categorias").removeClass("active-categorias");
    $(".active-categorias2").removeClass("active-categorias2");
    $(this).addClass("active-categorias");
    $(this).siblings().addClass("active-categorias2");
});

/*
$(".teste").hover(function() {
    $(this).addClass("active");
    $(this).siblings().addClass("active");
}, function() {
    $(this).removeClass("active");
    $(this).siblings().removeClass("active");
});*/
