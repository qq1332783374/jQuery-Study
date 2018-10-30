(function(){
	$.fn.tab = function(options){
		var defaults = {
			/*默认参数*/
			"event":"click",
			"activeCls":"active"
			
		}
		var options = $.extend(defaults,options);
		this.each(function(){
			/*功能逻辑*/
			var _this = $(this) ;
			_this.find(".tab_nav>li").bind(options.event,function(){
				var index = $(this).index()
				$(this).addClass(options.activeCls).siblings().removeClass(options.activeCls);
				$(".tab_context>div").eq(index).show().siblings().hide();
			})
			
			
		})
		return this ;
	}
	
	
})(jQuery)
