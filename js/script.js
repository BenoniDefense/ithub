$(document).ready(function() {

   // VARS
   let servicesDroplistToggle = $(".full-services__list-link");



   // DESTROY TILT
   $(window).on("resize load", function() {
      var tiltElements = document.querySelectorAll(`[data-tilt]`);
      var mq = window.matchMedia("(max-width: 768px)");
      if (mq.matches) {
            for (var i = 0, len = tiltElements.length; i < len; i++) {
               tiltElements[i].vanillaTilt.destroy();
            }
      }
   })


   
   // MENU
   $('.header__menu a').on("click", function(e) {
      e.preventDefault();

      $('.menu').toggleClass('active');
   });

   $('.menu__close').on("click", function(e) {
      e.preventDefault();

      $('.menu').removeClass('active');
   });



   // SERVICES DROPLIST
   servicesDroplistToggle.on("click", function(e) {
      e.preventDefault();
      let servicesDroplistArrow = $(this).children('.full-services__list-arrow');
      let servicesDroplist = $(this).siblings(".full-services__droplist");
      let servicesItem = $(this).parent(".full-services__list-item")

      servicesDroplist.toggleClass("active");
      $(this).toggleClass("active");
      servicesDroplistArrow.toggleClass("active");
      servicesItem.toggleClass("active");
   });



   // SLICK SLIDER
   $(".reviews__inner").slick({
      infinite: true,
      dots: true
   });











   
});