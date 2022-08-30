$(document).ready(function(){
	$(window).trigger('resize');

  //비주얼슬라이드
  $('.visual-slide').bxSlider({
  auto:true,
  speed:1000,
  pause:5000,
  mode:'fade',
  controls:true,
  pager:false,
  onSlideAfter:function($slideElement, oldIndex, newIndex){
    $('.visual-slide>li').removeClass('active');
    $('.visual-slide>li').eq(newIndex).addClass('active');
  }
  });
  $(".visual-slide>li.first").addClass("active");


  //section1 공지사항, 자료실 슬라이드
  $('.section1 .list').bxSlider({
  mode:'vertical',
  auto:true,
  speed:1000,
  pause:3000,
  controls:false,
  pager:false,
  infiniteLoop:true
  });


  // section4 포토갤러리 슬라이더
  var gallery = function(){
    $('.section4 .gallery').bxSlider({
      auto:false,
      speed:1000,
      pause:5000,
      controls:true,
      pagerType:'short',
      infiniteLoop:false
    });
  };


    //전공소개 슬라이더
  var info = function()  {
    $('.section5 .info').bxSlider({
      auto:false,
      speed:1000,
      pause:5000,
      controls:true,
      pager:false,
      infiniteLoop:false
    });
  };

  if($(window).width()<767){
		gallery();
    info();
  }


  //section5 전공안내
    // 첫번째 활성화
    $('.section5 .info li.first').css('display', 'block');

    $(".section5 .menu li").click(function() {
      //메뉴 활성화
      $(this).addClass("active").siblings().removeClass("active");
      var area_num = $(this).index();

      //콘텐츠 활성화
      if($('.section5 .menu li').hasClass('active') == true) {
        $('.section5 .info li').siblings().fadeOut().eq(area_num).fadeIn();
      }
    });


	//서브 메뉴 활성화
	$('#snb .depth1 > li').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	$('#snb .depth2 > li').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

});
