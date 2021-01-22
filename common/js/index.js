var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  speed: 300,
  slidesPerView: 2,
});

// ハンバーガーからバツへ
$(function () {
  $('.navbar_toggle').on('click', function () {
    $('.menu-trigger').toggleClass('active');
    $('#sp_global_nav').toggleClass('hidden');
    $('#sp_contact_box').toggleClass('hidden');
  });
});

// スクロールするとついてくるハンバーガーメニュ
$(function () {
  $('.navbar_toggle_open').on('click', function () {
    $('.menu-trigger_open').toggleClass('active');
  });
});

// ヘッダーの中のサブメニュー（PC）
$(function () {
  $('#pc_global_menus').on('click', function () {
    $('.sub_menu').toggleClass('hidden');
    $('.bottom-arrow').toggleClass('hidden');
    $('.top-arrow').toggleClass('hidden');
  });
});

// 別の画面をクリックした際にサブメニューが消える処理
document.addEventListener('click', (e) => {
  if (!e.target.closest('#pc_global_menus')) {
    var obj = document.getElementById("sub_menu_pc");
    obj.classList.add("hidden");
    //別画面をクリックした際に矢印の上下が変わる
    $('.bottom-arrow').removeClass('hidden');
    $('.top-arrow').addClass('hidden');
  }
});

// スクロールしたら、開いていたサブメニューが閉じる処理
$(window).scroll(function () {
  if($(window).scrollTop() > 20) {
    $('#sub_menu_pc').addClass('hidden');
  } 
});

// ヘッダーの中のサブメニュー（SP）
$(function () {
  $('#sp_sub_menus').on('click', function () {
    $('.sub_menu').toggleClass('hidden');
  });
});

//  スクロールしたらついてくるメニューの実装
$(function () {
  var topBtn = $('.contact_box_humber');
  //ボタンを非表示にする
  topBtn.hide();
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      //フェードインで表示
      topBtn.fadeIn();
    } else {
      //フェードアウトで非表示
      topBtn.fadeOut(1);
    }
  });
});


//  スクロールしたらついてくるメニューの実装
$(function () {
  var topBtn = $('.scroll_menu_open');
  var hamburgerBtn = $('.menu-trigger_open');
  //ボタンを非表示にする
  topBtn.hide();
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      //フェードインで表示

    } else {
      //フェードアウトで非表示
      topBtn.fadeOut(1);
      hamburgerBtn.removeClass("active");
    }
  });

  $('#scroll_hamburger').on('click', function () {
    topBtn.fadeToggle();
  });
});

//  スクロールしたらついてくるメニューの実装の中のサブメニュー
$(function () {
  $('#global_menus_open').on('click', function () {
    $('.sub_menu_scroll').toggleClass('hidden');
  });
});


// 上スクロールで表示、下スクロールで非表示にする処理
var startPos = 0, winScrollTop = 0;
$(window).on('scroll', function () {
  winScrollTop = $(this).scrollTop();
  if (winScrollTop >= startPos) {
    if (winScrollTop >= 200) {
      $('.site-header').addClass('hide');
    }
  } else {
    $('.site-header').removeClass('hide');
  }
  startPos = winScrollTop;
});

// スムーススクロール(バナーをクリックしたらflowへ)
$(function(){
  $('a[href^="#end"]').click(function(){
    var speed = 500;
    var header = jQuery(".mens_flow__title").innerHeight(); 
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - header;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});