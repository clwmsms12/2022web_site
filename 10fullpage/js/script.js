$("#fullpage").fullpage({
  menu:".offcanvas-body",
  anchors:["","m1st","m2st","","","m3st","","m4st","m5st"],
  afterLoad:function(anchorslink,index){
    if(index == 1){
        $(".page0 .mainF").addClass("move")
        $(".page0 .newsIcon").addClass("move")
        $(".page0 .youtubeWrap").addClass("move")
    }else{
        $(".page0 .mainF").removeClass("move")
        $(".page0 .newsIcon").removeClass("move")
        $(".page0 .youtubeWrap").removeClass("move")
    }

    if(index == 2){
        $(".page1 .fontLogo").addClass("move")
        $(".page1 .gamer").addClass("move")
        $(".page1 .gamerT").addClass("move")
    }else{
        $(".page1 .fontLogo").removeClass("move")
        $(".page1 .gamer").removeClass("move")
        $(".page1 .gamerT").removeClass("move")
    }

    if(index == 3){
        $(".page2 .btnWrap").addClass("move")
        $(".page2 .redT").addClass("move")
        $(".page2 .store").addClass("move")
    }else{
        $(".page2 .btnWrap").removeClass("move")
        $(".page2 .redT").removeClass("move")
        $(".page2 .store").removeClass("move")
    }

    if(index == 4){
        $(".page3 .btnWrap").addClass("move")
        $(".page3 .yellT").addClass("move")
    }else{
        $(".page3 .btnWrap").removeClass("move")
        $(".page3 .yellT").removeClass("move")
    }

    if(index == 5){
        $(".page4 .btnWrap").addClass("move")
        $(".page4 .aoseT").addClass("move")
        $(".page4 .store").addClass("move")
    }else{
        $(".page4 .btnWrap").removeClass("move")
        $(".page4 .aoseT").removeClass("move")
        $(".page4 .store").removeClass("move")
    }

    if(index == 6){
        $(".page5 .btnWrap").addClass("move")
        $(".page5 .pupleT").addClass("move")
        $(".page5 .store").addClass("move")
    }else{
        $(".page5 .btnWrap").removeClass("move")
        $(".page5 .pupleT").removeClass("move")
        $(".page5 .store").removeClass("move")
    }

    if(index == 7){
        $(".page6 .btnWrap").addClass("move")
        $(".page6 .beT").addClass("move")
    }else{
        $(".page6 .btnWrap").removeClass("move")
        $(".page6 .beT").removeClass("move")
    }
}
});

var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    }
  },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  new WOW().init();


  // $(window).resize(function(){ 
  //   if (window.innerWidth > 760) {


  //   } else {


  //   }
  //   }).resize();