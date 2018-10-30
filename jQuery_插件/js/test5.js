;(function(){
	$.fn.swiper = function(options){
		var deafults = {
			index:0,
			timer:"null",
			time:1000,
			auto:true
		}
		
		var options = $.extend(deafults,options);
		
		var len = $(this).find("ul li").length
		var _this = $(this)
		//判断下标是否超出
		var core = function(){
			if(options.index>len-1){
				options.index = 0
			}else if(options.index<0){
				options.index = len-1
			}
			_this.find("ul li").eq(options.index).stop().show().siblings().hide()
			
		}
		//点击下一张
		_this.find(".next").bind("click",function(){
			options.index++
			core()
		})
		//上一张
		_this.find(".prev").bind("click",function(){
			options.index--
			core()
		})
		//自动轮播
		var start = function(){
			options.timer = setInterval(function(){
				options.index++
				core()
				
			},options.time)
		}
//		start()
		//设置是否自动轮播
		var autoPlay = function(){
			if(options.auto){
				start()
			}else{
				clearInterval(options.timer)
			}
		}
		autoPlay()
		//移入移出
		_this.hover(function(){
			clearInterval(options.timer)
		},function(){
			if(options.auto){
				start()
			}else{
				clearInterval(options.timer)
			}
		})
		
		
		return this
		
	}
	
	
})(jQuery)
