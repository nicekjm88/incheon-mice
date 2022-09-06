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

  //문의
  $(".quick ul").on("mouseenter", function () {
    $(this).addClass("is-active");
  });
  $(".quick ul").on("mouseleave", function () {
    $(this).removeClass("is-active");
  });
});

//tabs
(function (doc, $) {
  var tabContainer = doc.querySelector('.tab-container');
  if (!tabContainer) return;

  $(tabContainer).on('click', '.tab-button', handleClickEvent);
  $(tabContainer).on('keydown', '.tab-list', handleKeyEvent);

  function handleClickEvent(event) {
    event = event || window.event;
    event.stopPropagation();
    var currTab = event.currentTarget;

    activeTab(currTab);
    activeTabPanel(currTab);
  }

  function activeTab(tab) {
    if (!tab) return;

    $(tab)
      .addClass('tab-button--active')
      .attr({
        'tabindex': '0',
        'aria-selected': 'true'
      })
      .focus()
      .siblings()
      .removeClass('tab-button--active')
      .attr({
        'tabindex': '-1',
        'aria-selected': 'false'
      })
  }

  function activeTabPanel(tab) {
    if (!tab) return;
    $('#' + tab.getAttribute('aria-controls'))
      .attr({
        'tabindex': '0'
      })
      .prop({
        'hidden': false
      })
      .addClass('tab-panel--active')
      .siblings('.tab-panel')
      .attr({
        'tabindex': '-1'
      })
      .prop({
        'hidden': true
      })
      .removeClass('tab-panel--active')
  }

  function handleKeyEvent(event) {
    event = event || window.event;
    event.stopPropagation();
    var keycode = event.keyCode || event.which;

    switch (keycode) {
      case 37: //왼쪽 키보드
        if (event.target.previousElementSibling) {
          $(event.target)
            .attr({
              'tabindex': '-1'
            })
            .prev()
            .attr({
              'tabindex': '0'
            })
            .focus()
        } else {
          $(event.target)
            .attr({
              'tabindex': '-1'
            })
            .siblings(':last')
            .attr({
              'tabindex': '0'
            })
            .focus()
        }
        break;

      case 39: //오른쪽 키보드
        if (event.target.nextElementSibling) {
          $(event.target)
            .attr({
              'tabindex': '-1'
            })
            .next()
            .attr({
              'tabindex': '0'
            })
            .focus()
        } else {
          $(event.target)
            .attr({
              'tabindex': '-1'
            })
            .siblings(':first')
            .attr({
              'tabindex': '0'
            })
            .focus()
        }
        break;
      case 32: //스페이스 키
      case 13: //엔터 키
        event.preventDefault();
        activeTab(event.target);
        activeTabPanel(event.target);
        break;
    }
  }


  $('.tab-button:first-of-type', tabContainer).trigger('click');
})(document, jQuery);

$(window).resize(function () {
  if ($(window).width() < 767) {
    $(".all-menu-list>li").eq(0).addClass("is-active");
    $(".all-menu-list>li>a").click(function () {
      $(this).attr("href", "javascript:void(0)");
      $(this)
        .parent()
        .addClass("is-active")
        .siblings()
        .removeClass("is-active");
    });
  }
});

$(window).on("load", function () {
  $(window).trigger("resize");
});
