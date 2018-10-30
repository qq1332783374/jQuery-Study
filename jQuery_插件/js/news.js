(function(){
	$.fn.news = function(options){
		var defaults = {
			"event":"click",
			"up":".up",
			"down":".down",
			"li":".b_news ul li",
			"b_news":".b_news"
		}
		var options = $.extend(defaults,options);
		this.each(function(){
			var _this = $(this);
			var index = $(options.li).index();
			var heights = $(options.li).height();
			var lenghts = $(options.li).length;
			_this.find(options.down).bind(options.event,function(){   /*上一张*/
				index++;
				up_down();
			})
			_this.find(options.up).bind(options.event,function(){    /*下一张*/
				index--;
				up_down();
			})
			function up_down(){
				/*上一张*/
				if(index>lenghts-1){
					index = 0;
				}
				$(options.b_news).stop().animate({
					"marginTop":-heights*index
				})
				
				 /*下一张*/
				if(index<0){
					index = lenghts-1;
				}
				$(options.b_news).stop().animate({
					"marginTop":-index*heights
				})
			}
		})
		return this;
	}
})(jQuery)
