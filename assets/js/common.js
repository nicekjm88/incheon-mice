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

  //아코디언
  $(".accordion > li .open").on("click", function () {
    $(this).parents("li").toggleClass("is-active");
    $(this).parent().next().slideToggle();
  });

  //aos init
  AOS.init({
    duration: 750,
    easing: 'ease-in-out',
    offset: -50,
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

//all check
(function (global, document) {
  "use strict";

  var checkAll = document.querySelector('[name="checkAll"]');
  var checkItem = document.querySelectorAll('[name="checkItem"]');

  checkAll.setAttribute("id", "check-all");
  checkAll.nextElementSibling.setAttribute("for", "check-all");

  Array.prototype.forEach.call(checkItem, function (item, index) {
    item.setAttribute("id", "agree" + Number(index + 1));
    item.nextElementSibling.setAttribute("for", "agree" + Number(index + 1));

    item.addEventListener("click", function (event) {
      var checkedSum = 0;

      for (var i = 0; i < checkItem.length; i++) {
        if (checkItem[i].checked) {
          checkedSum += 1;
        }
      }

      if (checkedSum === checkItem.length) {
        checkAll.checked = true;
      } else {
        checkAll.checked = false;
      }
    });
  });

  checkAll.addEventListener("click", function () {
    if (this.checked) {
      Array.prototype.forEach.call(checkItem, function (item, index) {
        item.checked = true;
      });
    } else {
      Array.prototype.forEach.call(checkItem, function (item, index) {
        item.checked = false;
      });
    }
  });
})(window, window.document);
