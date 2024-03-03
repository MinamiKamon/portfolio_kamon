$(function(){
	$(".menu-btn,.gnav li a").on("click",openMenu);
	function openMenu(){
		$(".menu-btn,.gnav").toggleClass("tapped");
	}
	
	$("a[href^='#']").on("click",pageScroll);
	function pageScroll(){
		var targetId = $(this).attr("href");
		var target = $(targetId).offset().top;
		$("html,body").animate({"scrollTop":target},300);
		return false;
	}
	
	$(window).on("load scroll",btnApp)
	function btnApp(){
		var scrl = $(this).scrollTop();
		if(scrl > 400){
			$(".to_top").fadeIn(500);
		}else{
			$(".to_top").fadeOut(500);
		}
	}
	
	//マウス
//	var speed = 0.8;//スピードを決める【遅0.2〜0.8速】ぐらいが妥当
//	$(window).on("mousemove",mouseStalker);
//	$("html,body").on("scroll",mouseStalker);
//	function mouseStalker(e){
//		var x;
//		var y;
//		var xx;
//		var yy;
//		x = xx = e.pageX;
//		y = yy = e.pageY;
//		var sw;
//		var sh;
//		var sx;
//		var sy;
//		setTimeout(function(){
//			sw = $(".stalker").outerWidth();
//			sh = $(".stalker").outerHeight();
//			sx = $(".stalker").offset().left+sw/2;
//			sy = $(".stalker").offset().top+sh/2;
//			
//			xx -= (x-sx)*speed;
//			yy -= (y-sy)*speed;
//			
//			$(".stalker").css({"left":xx,"top":yy});
//		},10);
////		var sw = $(".stalker").outerWidth();
////		var sh = $(".stalker").outerHeight();
////		var sx = $(".stalker").offset().left+sw/2;
////		var sy = $(".stalker").offset().top+sh/2;
//	}
});