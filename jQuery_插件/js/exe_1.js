;(function(){
	$.fn.color = function(options){
		var defaults = {
			_color:"red",
			txt:"变化了"
		}
		var options = $.extend(defaults,options);
		
		this.each(function(){
			var _this = $(this)
			$(".btn").click(function(){
				_this.css("background",options._color)
				_this.html(options.txt)
			})
		})
		return this
	}
	
	
	
})(jQuery)
