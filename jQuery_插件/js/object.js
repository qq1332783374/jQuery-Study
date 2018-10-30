(function(){
	$.fn.color = function(options){
		var defaults = {
			//默认的参数值
			"even":"even",
			"odd":"odd",
			"activeCls":"active",
			"event":"mouseover"
			
			
		}
		var options = $.extend(defaults,options)
//		console.log(defaults)
		this.each(function(){
			//功能的逻辑代码
			var _this = $(this)
			_this.find("tr:even").addClass(options.even)
			_this.find("tr:odd").addClass(options.odd)
			_this.find("tr").bind(options.event,function(){
				$(this).addClass(options.activeCls).siblings().removeClass(options.activeCls)
			})
			
//			console.log(this)
		})
		return this ;
	}
	

	
})(jQuery)

	
