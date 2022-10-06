$("#fullpage").fullpage({
  menu:".offcanvas-body",
  anchors:["","m1st","m2st","","","m3st","","m4st","m5st"],
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