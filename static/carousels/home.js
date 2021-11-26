$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-chevron-left nav-btn prev-slide'></i>",
      "<i class='fa fa-chevron-right nav-btn next-slide'></i>",
    ],

    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
      },
    },
  });
});
