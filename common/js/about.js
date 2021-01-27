// スムーススクロール(faq)
//ページ内リンクスムーススクロール
$('a[href^="#about_faq"]').on('click', function () {
  var header = jQuery("header").innerHeight();
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - header;
  $("html, body").animate({scrollTop: position}, 550, "swing");
  return false;
});
$('a[href^="#epitation_faq"]').on('click', function () {
  var header = jQuery("header").innerHeight();
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - header;
  $("html, body").animate({scrollTop: position}, 550, "swing");
  return false;
});
$('a[href^="#bbl_faq"]').on('click', function () {
  var header = jQuery("header").innerHeight();
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - header;
  $("html, body").animate({scrollTop: position}, 550, "swing");
  return false;
});
$('a[href^="#hifu_faq"]').on('click', function () {
  var header = jQuery("header").innerHeight();
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - header;
  $("html, body").animate({scrollTop: position}, 550, "swing");
  return false;
});
$('a[href^="#whitening_faq"]').on('click', function () {
  var header = jQuery("header").innerHeight();
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - header;
  $("html, body").animate({scrollTop: position}, 550, "swing");
  return false;
});