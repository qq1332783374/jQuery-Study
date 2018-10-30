;(function(){
	$.fn.tableM = function(options){
		var defaults = {
			
		}
		var options = $.extend(defaults,options);
		this.each(function(){
			var _this = $(this);
			$("input[type=checkbox]").click(function() {
				var _par = $(this).parents("tr");
				if($(this).prop("checked")) {
					_par.addClass("active")
				} else if($(this).prop("checked", false)) {
					$(this).removeAttr("checked")
					_par.removeClass("active")
				}
			})
			return this
		})
		
	}
	
	
})(jQuery)
