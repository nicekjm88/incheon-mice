$(window).scroll(function(){
  if($(window).scrollTop()>500){
    $('.nav-area').addClass('sticky');
  }else{
    $('.nav-area').removeClass('sticky');
  }
});

$(function(){
  //비주얼슬라이드
  $('.visual-slide').bxSlider({
  auto:true,
  speed:1000,
  pause:5000,
  mode:'fade',
  controls:false,
  onSlideAfter:function($slideElement, oldIndex, newIndex){
    $('.visual-slide>li').removeClass('active');
    $('.visual-slide>li').eq(newIndex).addClass('active');
  }
  });
  $(".visual-slide>li.first").addClass("active");

  $('.photo-list').bxSlider({
    auto:false,
    mode:'horizontal',
    controls:true,
    pager:false,
    // pagerType: 'short',
    moveSlides:1,
    maxSlides: 2,
    slideWidth: 280,
    slideMargin: 30,
  });

  //게시판
  $('.brief-list>li>a').click(function(){
    $(this).parent().addClass('active').siblings().removeClass('active');
  });

  //서브레이아웃 네비
	$('.depth1>li>a').click(function(){
		$(this).next().slideToggle();
		$(this).parent().siblings().find('.depth2').slideUp();
		$(this).parent().toggleClass('active').siblings().removeClass('active');
	});

  // Controller 객체 설정
  var controller = new ScrollMagic.Controller();

  // // ////////////////////
  // // // 핀 컨트롤(제어) //
  // // ////////////////////
  var carousel_pin = new ScrollMagic.Scene({
    'triggerElement': '.pin',
    'triggerHook':0
    // 'location': '35%'
  })
  carousel_pin
    .setPin('.pin')
    // .addIndicators()
    .addTo(controller);

  //////////////////////////////
  // 페럴렉스 씬 제어 반복 구문 //
  //////////////////////////////
  var scene_list = '.section1, .section2, .section3'.split(', ');
  scene_list.forEach(function(trigger_el_selector, idx){

    var scene = new ScrollMagic.Scene({
      'triggerElement': trigger_el_selector,
      'triggerHook':0.5, //트리거의 시작지점 0 ~ 1
      'offset':-250,
      // 'reverse': false
    })

    .setClassToggle(trigger_el_selector, 'fade-in')
    // .addIndicators({
    //   'name' : trigger_el_selector
    // })
    .addTo(controller);
  });

  //메인컨텐츠 전체 올라오기
  var tween = TweenMax.to("#contents", 1, {css:{transform:"translateY(-104px)"}});
  var scene = new ScrollMagic.Scene({offset:200 ,duration:500})
      .setTween(tween)
      // .addIndicators(true)
      .addTo(controller);

  //텍스트 애니메이션
  var tween2 = TweenMax.to(".type-animate", 1, {css:{opacity:"1"}});
  var scene = new ScrollMagic.Scene({offset:200 ,duration:500})
      .setTween(tween2)
      .addTo(controller);


  //해당 학부 상징물
  var tween3 = TweenMax.to(".object", 1, {css:{opacity:"1"}});
  var scene = new ScrollMagic.Scene({offset:550 ,duration:600})
      .setTween(tween3)
      .addTo(controller);


});
