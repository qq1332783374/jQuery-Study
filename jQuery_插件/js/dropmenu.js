(function(){
	$.fn.dropmenu = function(options){
		var defaults={
			/*默认参数*/
			"event":"click",
			"dropbtn":".dropbtn",
			"dropdownmenu":".dropdown-menu"
		}
		var options = $.extend(defaults,options);
		this.each(function(){
			var _this = $(this) ;
			_this.find(options.dropbtn).bind(options.event,function(){
				$(options.dropdownmenu).toggle()
			})
			
		})
		return this ;
	}
	
	
})(jQuery)
