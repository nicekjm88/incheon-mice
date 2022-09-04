$(function () {
  // Init controller
  var controller = new ScrollMagic.Controller();

  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#intro",
    duration: $("section").height(),
    reverse: true,
  })
    .setClassToggle(".intro-anchor", "is-active")
    .addTo(controller);
  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#section-1",
    duration: $("section").height(),
    reverse: true,
  })
    .setClassToggle(".anchor1", "is-active")
    .addTo(controller);
  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#section-2",
    duration: $("section").height(),
    reverse: true,
  })
    .setClassToggle(".anchor2", "is-active")
    .addTo(controller);
  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#section-3",
    duration: $("section").height(),
    reverse: true,
  })
    .setClassToggle(".anchor3", "is-active")
    .addTo(controller);
  var scene5 = new ScrollMagic.Scene({
    triggerElement: "#section-4",
    duration: $("section").height(),
    reverse: true,
  })
    .setClassToggle(".anchor4", "is-active")
    .addTo(controller);

  // Change behaviour of controller
  // to animate scroll instead of jump
  controller.scrollTo(function (target) {
    TweenMax.to(window, 0.5, {
      scrollTo: {
        y: target,
        autoKill: true, // Allow scroll position to change outside itself
      },
      ease: Cubic.easeInOut,
    });
  });

  //  Bind scroll to anchor links
  $(document).on("click", "controller-item", function (e) {
    var id = $(this).attr("href");

    if ($(id).length > 0) {
      e.preventDefault();

      // trigger scroll
      controller.scrollTo(id);

      // If supported by the browser we can also update the URL
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, id);
      }
    }
  });

  var motions = document.querySelectorAll(".motion");

  motions.forEach(function (trigger_el_selector, idx) {
    var scene = new ScrollMagic.Scene({
      triggerElement: trigger_el_selector,
      triggerHook: 0.5,
      offset: 0,
      reverse: false,
    })

      .setClassToggle(trigger_el_selector, "onTrans")
      // .addIndicators({
      //   name: "[motions]",
      // })
      .addTo(controller);
  });

  var tween2 = TweenMax.to(".bg-txt.type1", 1, {
    transform: "translate3d(-200px,0,0)",
    XPercent: -100,
  });
  var scene6 = new ScrollMagic.Scene({
    offset: 1000,
    duration: 1000,
  })
    .setTween(tween2)
    // .addIndicators({
    //   name: "[big-txt]",
    // })
    .addTo(controller);

  var tween3 = TweenMax.to(".bg-txt.type2", 1, {
    transform: "translate3d(-200px,0,0)",
    XPercent: -100,
  });
  var scene7 = new ScrollMagic.Scene({
    offset: 2700,
    duration: 1000,
  })
    .setTween(tween3)
    // .addIndicators({
    //   name: "[big-txt]",
    // })
    .addTo(controller);
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 500) {
    $(".history-navigation.vertical").fadeIn();
  } else {
    $(".history-navigation.vertical").fadeOut();
  }
});
