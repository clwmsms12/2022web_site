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