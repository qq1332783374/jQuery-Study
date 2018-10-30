$.center = {
	centerDiv:function(obj){
		obj.css({
			"top":($(window).height()-$(".box").height())/2,
			"left":($(window).width()-$(".box").width())/2
		})
		return obj ;
	}
}
