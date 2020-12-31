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

// ヘッダーの中のサブメニュー（SP）
$(function () {
  $('#sp_sub_menus').on('click', function () {
    $('.sub_menu').toggleClass('hidden');
  });
});

// ヘッダーの中のサブメニュー（PC）
$(function () {
  $('#pc_global_menus').on('click', function () {
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