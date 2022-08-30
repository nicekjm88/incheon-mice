/*
CSS Browser Selector v0.4.0 (Nov 02, 2010)
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors
*/
function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);

/* ie 버그로 인하여 강제로 탭키 가도록 설정
-------------------------------------------------*/
jQuery(document).ready(function(){
	if(is_IE()){
		jQuery("#gnavigation").prop("tabindex", "0");
		jQuery("#body").prop("tabindex", "0");
		jQuery("#contents").prop("tabindex", "0");
	 }
});
// IE 인지를 반환(IE 라면 true 아니면 false)
function is_IE() {
	if((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || navigator.appName.charAt(0) == "M"){
		return true ;
	}else{
		return false ;
	}
}
//확대 축소
$(document).ready(function() {
	var nowZoom = 1;
	$("#btnFontSizeSubout").click(function(){
		nowZoom /= 1.05;
	    zooms(nowZoom);
	});

	$("#btnFontSizeSubin").click(function(){
		nowZoom *= 1.05;
	    zooms(nowZoom);
	});
});

$(function(){
	//자동으로 테이블 캡션 넣기
	$('.table-wrap').each(function(){
		var tableTitle = $(this).prev().text();
		var thArrayStr = "";
		$(this).find('thead th').each(function(i){
			thArrayStr += ", " + $(this).text();
		});
		$(this).find("table caption").html('<strong>' + tableTitle + '</strong>' + '<span>' + thArrayStr.substring(2) + '에 관한 정보' + '</span>' );
	});

	//대매뉴
	$('#gnb').on('mouseenter focusin', function(){
		$(this).parents('#header').addClass('active');
	});
	$('#header').on('mouseleave', function(){
		$(this).removeClass('active');
	});
	$('#gnb>li:last .depth2>li:last').focusout(function(){
		$(this).parents('#header').removeClass('active');
	});
	$('#header .logo').focusin(function(){
		$('.department').removeClass('active');
		$('.department-list').slideUp();
		$(this).parents('#header').removeClass('active');
	});

	//햄버거매뉴(모바일)
	$('.menu-btn').click(function(){
		$(this).toggleClass('active');
		$(this).next().toggleClass('active');
		if ($(window).width()<767) {
			$('body').toggleClass('fixed');
		}
	});

	//학부바로가기 버튼
	$('.department button').click(function(){
		$(this).next().slideToggle();
		$(this).parent().toggleClass('active');
	});

	//하단 관련사이트
	$('.family-site').click(function(){
		$(this).toggleClass('active');
		$(this).find('.depth-list').slideToggle();
	});

	//상단으로 스무스~
	$('.top').click(function(){
		$('html, body').animate({scrollTop:0},400);
		return false;
	});

	//모달팝업
	$('.modal-trigger').click(function(){
		$(this).next().addClass('active');
		$('body').addClass('fixed');
	});
	$('#modal .close').click(function(){
		$(this).parents('#modal').removeClass('active');
		$('body').removeClass('fixed');
	});

	//위치 및 연락처 (캠퍼스 2개 )
		// 첫번째 활성화
		$('.locate .map li.first').css('display', 'block');
		$('.locate .info > li.first').css('display', 'block');

		$(".locate .tab li").click(function() {
			//메뉴 활성화
			$(this).addClass("active").siblings().removeClass("active");
			var area_num = $(this).index();

			//콘텐츠 활성화
			if($('.locate .tab li').hasClass('active') == true) {
				$('.locate .map > li').siblings().fadeOut().eq(area_num).fadeIn();
				$('.locate .info > li').siblings().fadeOut().eq(area_num).fadeIn();
			}
		});

});

$(window).resize(function(){
	if ($(window).width() < 767) {
		$('#gnb>li>a').click(function(){
			$(this).attr('href','javascript:void(0)');
			$(this).parent().addClass('active').siblings().removeClass('active');
		});
	}
});

$(window).on("load", function(){
	$(window).trigger('resize');
});
