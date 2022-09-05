$(function () {
  // Controller 객체 설정
  var controller = new ScrollMagic.Controller();

  // // ////////////////////
  // // // 핀 컨트롤(제어) //
  // // ////////////////////
  var carousel_pin = new ScrollMagic.Scene({
    triggerElement: ".pin",
    triggerHook: 0,
    // 'location': '35%'
  });
  carousel_pin
    .setPin(".pin")
    // .addIndicators()
    .addTo(controller);

  //////////////////////////////
  // 페럴렉스 씬 제어 반복 구문 //
  //////////////////////////////
  var scene_list = ".section1, .section2, .section3".split(", ");
  scene_list.forEach(function (trigger_el_selector, idx) {
    var scene = new ScrollMagic.Scene({
      triggerElement: trigger_el_selector,
      triggerHook: 0.5, //트리거의 시작지점 0 ~ 1
      offset: -250,
      // 'reverse': false
    })

      .setClassToggle(trigger_el_selector, "fade-in")
      // .addIndicators({
      //   'name' : trigger_el_selector
      // })
      .addTo(controller);
  });

  //텍스트 애니메이션
  var tween2 = TweenMax.to(".picture-img .img", 1, {
    css: {
      borderRadius: "250px",
      height: "350px",
      width: "350px",
    },
  });
  var scene2 = new ScrollMagic.Scene({
    offset: 300,
    duration: 500,
  })
    // .addIndicators()
    .setTween(tween2)
    .addTo(controller);
});
