

$(window).on('load', function () {
    $('.three-imgs').animate({ opacity: 1 }, 500);
})

$(function () {
    $(window).scroll(function () {
        $('.fade_bg').each(function () {

            //要素の位置の取得
            var target = $(this).offset().top;

            //スクロール量を取得
            var scroll = $(window).scrollTop();

            //ウィンドウの高さを取得
            var windowHeight = $(window).height();

            //目的の要素が画面内に少し入ったらクラスを付与する
            if (scroll > target - windowHeight + 580) {
                $(this).addClass('fade');
            }
        });
    });
});

//スムーススクロール
var jmp_posi = "";
var jmp_posi_base = "";
$(window).on('load', function () {
    jmp_posi_base = $('#page-top').css('bottom');
    jmp_posi = parseInt(jmp_posi_base);
})

// TOPに戻るボタン
var topBtn = $('#page-top');
topBtn.hide();
//スクロールが100に達したらボタン表示
$(window).scroll(function () {
    var w = $(window).width();
    btnmove();
    if ($(this).scrollTop() > 100) {
        topBtn.fadeIn();
    } else {
        topBtn.fadeOut();
    }
});
//スムーススクロールでページトップへ
topBtn.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});


$(window).resize(function () {
    btnmove();
})

function btnmove() {
    var win_posi = $(window).scrollTop();
    var win_hgt = $(window).height();
    //	var footer_hgt = $( 'footer' ).outerHeight();
    var footer_hgt = $('.localFooter').outerHeight();
    var dcumt_hgt = $(document).height();
    if (win_posi > dcumt_hgt - (footer_hgt + win_hgt)) {
        if (window.screen.width > 442)
            var movepx = footer_hgt + 120;
        else if (window.screen.width > 337)
            var movepx = footer_hgt + 160;
        else
            var movepx = footer_hgt + 180;


        $('#page-top').css('bottom', movepx + 'px')
    } else {
        $('#page-top').css('bottom', '10px');
    }
}

(function ($) {
    $(document).ready(function ($) {
        // フェードイン
        $(window).scroll(function () {
            $('.fadeIn').each(function () {
                var scroll = $(window).scrollTop(); // 現在のスクロール位置
                var offset = $(this).offset().top; // 対象の上からの位置
                var windowHeight = $(window).height(); // ウィンドウの高さ
                if (scroll > offset - windowHeight + 150) {
                    $(this).addClass("scrollIn");
                }
            });
        });
    });
})(jQuery);
(function ($) {
    $(document).ready(function ($) {
        // フェードイン
        $(window).scroll(function () {
            $('.opening').each(function () {
                var scroll = $(window).scrollTop(); // 現在のスクロール位置
                var offset = $(this).offset().top; // 対象の上からの位置
                var windowHeight = $(window).height(); // ウィンドウの高さ
                if (scroll > offset - windowHeight) {
                    $(this).addClass("active");
                }
            });
        });
    });
})(jQuery);
(function ($) {
    $(document).ready(function ($) {
        // フェードイン
        $(window).scroll(function () {
            $('.opening-1').each(function () {
                var scroll = $(window).scrollTop(); // 現在のスクロール位置
                var offset = $(this).offset().top; // 対象の上からの位置
                var windowHeight = $(window).height(); // ウィンドウの高さ
                if (scroll > offset - windowHeight+200) {
                    $(this).addClass("active-1");
                }
            });
        });
    });
})(jQuery);

//custom


