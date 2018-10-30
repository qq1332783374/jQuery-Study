$(function() {
	/*加载主体颜色*/
	$.ajax({
		type: "get",
		url: "data/to-do-color.json?" + Math.random(),
		async: true,
		success: function(res) {
			var str = "";
			for(var i = 0; i < res.length; i++) {
				str += '<li style="background: ' + res[i].color + ';"></li>'
			}
			$(".to-do-color ul").html(str);
			/*更换主题颜色*/
			var a = $(".to-do-color ul li");
			$.each(a,function(){
				$(this).click(function(){
					var _this = $(this).index();
					$(this).parents(".to-do").find(".to-do-wait").css("color",res[_this].color);
				})
			})

		}
	});
	
	/*数据初始化*/
	$.ajax({
		type: "get",
		url: "data/to-do.json?"+Math.random(),
		async: true,
		success: function(res) {
			var str = "";
			var len = res.length;
			for(var i = 0; i < len; i++) {
				str += '<li class="to-do-content wait_1"><div class="to-do-body "><p>' + res[i].content + '</p></div><div class="to-do-con-footer "><div class="to-do-time pull-left "><h4>' + res[i].time + '</h4></div><div class="to-do-action pull-right"><a href="javascript:;" class="btn btn-info check">查看</a><a href="javascript:;" class="btn btn-success finish">完成</a></div></div><div class="clear"></div></li>'
			}
			$(".wait ul").html(str);
		}
	});
	
	
	/*时间函数begin*/
	function times() {
		var date = new Date();
		var years = date.getFullYear();   	/*获取年*/
		var months = date.getMonth() + 1; 	/*获取月*/
		var dates = date.getDate();	 		/*获取日*/
		var hours = date.getHours();	 	/*获取时*/
		var min = date.getMinutes() 		/*获取分*/
		var sec = date.getSeconds() 		/*获取秒*/
		var times = years + '-' + months + '-' + dates + ' ' + hours + ':' + min + ':' + sec;
		return times;
	}
	/*时间函数end*/

	/*头部时间*/
	var a = times()
	$(".to-do-header-right").html(a)
	setInterval(function(){
		var a = times()
		$(".to-do-header-right ").html(a)
	},1000)
	


	/*modal begin*/
	function modal(options) {
		var deafults = {
			title:'查看修改' ,
			modal_body:'<div class="check-txt"><h4 class="pull-left">内容:</h4><textarea class="pull-left" cols="64" rows="12"></textarea><div class="clear"></div></div>',
			btn:'<button type="button" name="sure" class="btn btn-info sure">确定</button>'
		}
		
		var options = $.extend(deafults,options);
		var str = '<div class="modal" id="myModal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">'+options.title+'</h4><button type="button" class="close" id="close">x</button></div><div class="modal-body">'+options.modal_body+'</div><div class="modal-footer">'+options.btn+'<button type="button" name="cancel" class="btn btn-danger cancel">取消</button></div></div></div></div>'
		
		$(".modal_box").html(str);
		
	}
	

	function modal_show(res) {
		res.parents().find(".modal").fadeIn();
	}

	function modal_hide(res) {
		res.parents(".modal").fadeOut();
	}
	
	/*colse begin*/
	
	$(document).on("click", "#close", function() {
		modal_hide($(this));
	})
	
	/*colse end*/

	/*cancel begin*/
	
	$(document).on("click", ".cancel", function() {
		modal_hide($(this));
	})
	
	/*cancel end*/
	
	
	/*modal end*/

	
	/*代办事项begin*/
	var waits = 4 ;
	$(".waiting h4 span").html(waits);
	
	/*查看 begin*/
	var _this_check = null ;
	$(document).on("click", ".check", function() {
		modal();
		modal_show($(this));
		_this_check = $(this);
		/*var str = '<div class="check-txt"><h4 class="pull-left">内容:</h4><textarea class="pull-left" cols="64" rows="12"></textarea><div class="clear"></div></div>';
		$(".modal-body").html(str);*/
		var txt = $(this).parents(".to-do-content").find(".to-do-body").text();
		$(".modal textarea").val(txt);
		
	})
	/*查看 end*/
	
	
	/*确定修改 begin*/
	$(document).on("click",".sure",function(){
		var txt = $(this).parents(".modal").find(".check-txt textarea").val();
		$(_this_check).parents(".wait_1").find(".to-do-body").text(txt);
		modal_hide($(this));
	})
	/*确定修改 end*/
	
	/*代办事项end*/
	
	
	/*完成事项 begin*/
	
	var finish = 0 ;
	$(".done h4 span").html(finish);
	
	/*finish begin*/
	
	var _this_finish = null ;
	var _this_li = ""
	$(document).on("click", ".finish", function() {
		modal({
			title:'完成' ,
			modal_body:'<div class="finish-txt"><h4>你确定完成了吗？</h4></div>',
			btn:'<button type="button" name="sure" class="btn btn-info sure_1">确定</button>'
		})
		modal_show($(this));
		_this_finish = $(this);
		_this_li = $(this).parents(".to-do-content").find(".to-do-body").text();
	})
	/*finish end*/
	
	/*确定完成 begin*/
	$(document).on("click",".sure_1",function(){
		var str = '<li class="to-do-content finish_1"><div class="to-do-fin-body"><p>'+_this_li+'</p></div><div class="to-do-fin-footer"><h4>完成时间:<span>'+times($(".to-do-fin-footer h4 span"))+'</span> </h4></div></li>';
		$(".finish_1 ul").append(str);
		modal_hide($(this));
		_this_finish.parents(".wait_1").remove();
		waits--;
		$(".waiting h4 span").html(waits);
		finish++;
		$(".done h4 span").html(finish);
	})
	/*确定完成 end*/
	/*完成事项 end*/
	
	/*添加事项 begin*/
	$(document).on("click",".add",function(){
		var _val = $("input[name=content]").val();
		
		if(_val.length==0){
			alert("请添加事项")
		}else{
			var str = '<li class="to-do-content wait_1"><div class="to-do-body "><p>' + _val + '</p></div><div class="to-do-con-footer "><div class="to-do-time pull-left "><h4>' + times()+ '</h4></div><div class="to-do-action pull-right"><a href="javascript:;" class="btn btn-info check">查看</a><a href="javascript:;" class="btn btn-success finish">完成</a></div></div><div class="clear"></div></li>'
			$(".wait ul").append(str);
			waits++;
			$(".waiting h4 span").html(waits);
			 $("input[name=content]").val("");
		}
	
		
	})
	/*添加事项 end*/
	
})