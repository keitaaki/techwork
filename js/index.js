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
  });
});

// 別の画面をクリックした際にサブメニューが消える処理
document.addEventListener('click', (e) => {
  if (!e.target.closest('#pc_global_menus')) {
    var obj = document.getElementById("sub_menu_pc");
    obj.classList.add("hidden");
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

// 施術の流れ tab部分
$(function() {

  var tabMenu = function() {

    /**
     * 変数の指定
     * $tab_area          : tabの親要素のjQueryオブジェクト
     * $content           : tabによって切り替わる要素のjQueryオブジェクト
     * TAB_ACTIVE_CLASS   : tabが選択されたスタイルを変更するclass名
     * CONTENT_SHOW_CLASS : contentを表示させるためのclass名
     * id_arr             : $contentのIDを配列に格納
     */
    var $tab_area          = $('.tabArea');
    var $content           = $('.contents .tab_main');
    var TAB_ACTIVE_CLASS   = 'select';
    var CONTENT_SHOW_CLASS = 'is_show';
    var id_arr             = $content.map(function() { return '#' + $(this).attr('id');}).get();

    /**
     * 該当するhashデータがある場合、hashを返す
     * 該当とは id_arr[] に含まれるもの
     * @return {string} 該当する場合
     * @return {false} 該当しない（存在しない）場合
     */
    var getHash = function() {
      var hash = window.location.hash;
      var index = id_arr.indexOf(hash);

      if (index === -1) {
        return false;
      } else {
        return id_arr[index];
      }
    };

    /**
     * ページ読み込み時に実行
     * 1. hashがあれば、hashをhrefに持つタブのスタイル変更（専用のclass付与）
     * 2. hashがあれば、hashをidに持つコンテンツを表示（専用のclassを付与）
     * 3. hashがなければ、タブの先頭が選択された状態とする
     */
    var initialize = function() {
      var hash = getHash();
      if (hash) {
        $tab_area.find('a[href="'+hash+'"]').addClass(TAB_ACTIVE_CLASS); // 1
        $(hash).addClass(CONTENT_SHOW_CLASS); // 2
        $(window).on('load',function(){
          setTimeout(function(){
            // 移動先を100px上にずらす
            var adjust = 100;
            // スクロールの速度
            var speed = 400; // ミリ秒
            // 移動先を取得
            var target = $(hash);
            // 移動先を調整
            var position = target.offset().top - adjust;
            // スムーススクロール
            $('body,html').animate({scrollTop:position}, speed, 'swing');
          },100);
        });
      } else {
        $tab_area.find('.one_tab:first > a').addClass(TAB_ACTIVE_CLASS); // 3
        $($content[0]).addClass(CONTENT_SHOW_CLASS); // 3
      }
    };

    /**
     * タブのクリックイベント
     * 1. クリックされたタブのhref, 該当するcontentを取得
     * 2. 既にクリック済みの状態であればスキップ
     * 3. 一旦タブ・contentの専用classを全削除
     * 4. クリックしたタブのスタイルを変更、該当するcontentを表示（それぞれ専用のclassを付与）
     */
    var addEvent = function() {
      $tab_area.find('a').on('click', function() {
        // 1
        var href = $(this).attr('href');
        var $targetContent = $(href);

        // 2
        if ($(this).hasClass(TAB_ACTIVE_CLASS)) {
          return false;
        }

        // 3
        $tab_area.find('a').removeClass(TAB_ACTIVE_CLASS);
        $content.removeClass(CONTENT_SHOW_CLASS);

        // 4
        $(this).addClass(TAB_ACTIVE_CLASS);
        $targetContent.addClass(CONTENT_SHOW_CLASS);

        return false;
      });
    };

    return [initialize(), addEvent()];
  };

  // 実行
  tabMenu();
});


$(function () {
  $('.tab_inner').on('click', function () {
    $('.tab_inner').toggleClass('non_selected');
  });
});