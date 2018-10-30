(function(){
	$.fn.color = function(options){
		var def = {
			/*默认的参数*/
			"even":"even",  /*偶数行*/
			"odd":"odd",    /*奇数行*/
			"active":"active",   /*事件样式*/
			"event1":"mouseover"   /*鼠标移入事件*/
		}
		var options = $.extend(def,options);
		this.each(function(){
			/*功能代码*/
			var _this  = $(this);
//			console.log(_this)
			_this.find("tr:even").addClass(options.even);
			_this.find("tr:odd").addClass(options.odd);
			_this.find("tr").bind(options.event1,function(){
				$(this).addClass(options.active).siblings().removeClass(options.active)
			})
		})
		return this;
	}
})(jQuery)
