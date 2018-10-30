;(function(){
	$.fn.font_size = function(options){
		var defaults = {
			size:"30px",
			txt:"变化了"
		}
		var options = $.extend(defaults,options);
		this.each(function(){
			var _this = $(this)  ;
			_this.css("font-size",options.size).html(options.txt)
		})
	}
	
	
	
})(jQuery)
