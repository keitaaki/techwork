var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  speed: 300,
  slidesPerView: 2,
});

$(function() {
  $('.navbar_toggle').on('click', function () {
   $('.menu-trigger').toggleClass('active');
   $('#sp_global_nav').toggleClass('hidden');
   $('#sp_contact_box').toggleClass('hidden');
  });
 });

$(function() {
  $('#sp_sub_menus').on('click', function () {
   $('.sub_menu').toggleClass('hidden');
  });
 });