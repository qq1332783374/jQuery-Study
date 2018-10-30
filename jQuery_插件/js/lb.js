(function(){
	$.fn.myCarousel = function(options){
		var deafults = {
			/*默认事件*/
			"w":".list ul li",
			"b_box":".b_box",
			"next":".center_next",
			"prev":".center_prev",
			"event":"click"
		}
		var options = $.extend(deafults,options);
		this.each(function(){
			var _this = $(this);
			var index = 0 ;
			var w = $(options.w).width();
			var len = $(options.w).length;
			$(options.next).bind(options.event,function(){
				index++;
				tab();
				
			})
			$(options.prev).bind(options.event,function(){
				index--;
				tab();
			})
			function tab(){
				if(index>len-1){
					index = 0 ;
				}
				$(options.b_box).stop().animate({
					"marginLeft":-w*index
				})
				if(index<0){
					index = len-1;
				}
				$(options.b_box).stop().animate({
					"marginLeft":-w*index
				})
			}
		})
		return this ;
	}
})(jQuery)
