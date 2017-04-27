//轮播图
window.onload = function(){
		var carousel = $(".carousel");
		var banner = $(".banner");
		var banlen = $(".banner a").length;
		var banlenSpan = $(".banner_ico span");
		var carwid = carousel.width();
		var Time;
		var ind = 0;
		
		//复制一个图片
//		$(".banner a:first-child").clone().appendTo(".banner");
//		$(".banner").prepend(".banner a:first-child");

	function aniMate(){
		if(ind==banlen){
			ind=0;
		}
		if(ind==-1){
			ind=banlen-1;
		}
		var l = ind*carwid;
		var zhi = -l+"px";
		banner.animate({marginLeft:zhi},600); 
		banlenSpan.eq(ind).addClass("cur").siblings().removeClass("cur");
	}
	function goLeft(){
		ind++;
		aniMate();
	}
	function goRight(){
		ind--;
		aniMate();
	}
	//点击圆点跳转到对应图片
	banlenSpan.click(function(){
		var b = $(this).index();
		ind=b-1;
		goLeft();
	});
	//左按钮点击轮播
	$(".l_btn").click(function(){
		goLeft();
	});
	//右按钮点击轮播
	$(".r_btn").click(function(){
		goRight();
	});
	
	
	Time = setInterval(goLeft,5000);//添加定时器，让图片自动轮播

	carousel.hover(function(){
		clearInterval(Time);//鼠标移入之后删除定时器，暂停轮播
	},function(){
		Time = setInterval(goLeft,5000);//鼠标移开之后添加定时器，自动轮播
	});
	
}
//产品左右轮播
//function cp_go(){
//		var carousel = $(".box_c_bot");
//		var banner = $(".box_c_bot ul li");
//		var banlen = $(".banner a").length;
//		var carwid = $(".a_img").width();
//		var ind = 0;
//	function aniMate(){
//		console.log(banlen);
//		console.log(ind);
//		if(ind == banlen){
//			ind = 0;
//		}
//		if(ind == -1){
//			ind = banlen-1;
//		}
//		var l = (ind*carwid)-carwid;
//		var zhi = -l+"px";
//		banner.animate({left:zhi},600); 
//	}
//	function goLeft(){
//		ind++;
//		aniMate();
//	}
//	function goRight(){
//		ind--;
//		aniMate();
//	}
//	$(".ll_btn").click(function(){
//		goLeft();
//	});
//	//右按钮点击轮播
//	$(".rr_btn").click(function(){
//		goRight();
//	});
//}
//	cp_go();

$(function(){
		//顶部搜索控制
		$(window).scroll(function(){
		
			var wid = $(window).width();
			var ind = $(document).scrollTop();
			if (wid >900){
				if (ind > 242 && wid > 770) {
					$(".navigation").show();	
				} else{
					$(".navigation").hide();		
				}
			} else{
				$(".navigation").show();
			}
		})
		//回到顶部
		$(".gotop").click(function(){		
				$('html,body').animate({
				scrollTop : '0px'
				}, 200);
		});
		$("#min_nav span").click(function(){
			var a = $("#min_nav span").attr("class");
			if (a == "nnav_sp1") {
				$("#min_nav span").attr("class","nnav_sp2");
			} else{
				$("#min_nav span").attr("class","nnav_sp1");
			}
			$(".min_nnav").fadeToggle();
		});
});

















