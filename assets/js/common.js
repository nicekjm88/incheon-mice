$(function () {
  setTimeout(function () {
    $("#wrap").addClass("intro");
  }, 0);

  //햄버거매뉴(모바일)
  $(".menu-btn").click(function () {
    $(this).toggleClass("active");
    $(this).next().toggleClass("active");
    if ($(window).width() < 767) {
      $("body").toggleClass("fixed");
    }
  });

  //학부바로가기 버튼
  $(".department button").click(function () {
    $(this).next().slideToggle();
    $(this).parent().toggleClass("active");
  });

  //하단 관련사이트
  $(".family-site").click(function () {
    $(this).toggleClass("active");
    $(this).find(".depth-list").slideToggle();
  });

  //상단으로 스무스~
  $(".top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
    return false;
  });

  //모달팝업
  $(".modal-trigger").click(function () {
    $(this).next().addClass("active");
    $("body").addClass("fixed");
  });
  $("#modal .close").click(function () {
    $(this).parents("#modal").removeClass("active");
    $("body").removeClass("fixed");
  });

  //위치 및 연락처 (캠퍼스 2개 )
  // 첫번째 활성화
  $(".locate .map li.first").css("display", "block");
  $(".locate .info > li.first").css("display", "block");

  $(".locate .tab li").click(function () {
    //메뉴 활성화
    $(this).addClass("active").siblings().removeClass("active");
    var area_num = $(this).index();

    //콘텐츠 활성화
    if ($(".locate .tab li").hasClass("active") == true) {
      $(".locate .map > li").siblings().fadeOut().eq(area_num).fadeIn();
      $(".locate .info > li").siblings().fadeOut().eq(area_num).fadeIn();
    }
  });
});

$(window).resize(function () {
  if ($(window).width() < 767) {
    $("#gnb>li>a").click(function () {
      $(this).attr("href", "javascript:void(0)");
      $(this).parent().addClass("active").siblings().removeClass("active");
    });
  }
});

$(window).on("load", function () {
  $(window).trigger("resize");
});
