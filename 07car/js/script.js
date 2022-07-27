$(window).scroll(function(){
    let scrollY = window.pageYOffset;

    if(scrollY > 10){
        $("#header").addClass("fixed");
    }else{
        $("#header").removeClass("fixed");
    }
})

$(".navbar>ul>li").hover(function(){
    $(this).addClass("on");
},function(){
    $(this).removeClass("on");
});

let on = true
$(".toggle").click(function(){
    if(on == true){
        $(".toggle").addClass("active")
        $(".Mmenu").addClass("active")
        on = false;
    }else{
        $(".toggle").removeClass("active")
        $(".Mmenu").removeClass("active")
        on = true;
    }
})
$(".navbar>ul").clone().appendTo(".clone")

$(".clone>ul>li>a").click(function(e){
    e.preventDefault();

    $(".clone>ul>li>a").parent().find(".submenu").hide()  //#3

    if( $(this).hasClass("active") ){                 //#4
        $(".clone>ul>li>a").removeClass("active");
    }else{
        $(this).parent().find(".submenu").show();
        $(".clone>ul>li>a").removeClass("active")
        $(this).addClass("active");

    }
})

var swiper = new Swiper(".swiper01", {});