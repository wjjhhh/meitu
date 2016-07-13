//下拉查看信息
$(".detail").click(function(){		
		$(this).parents(".game").find(".gameContent").stop().slideToggle();
		$(this).find("span").toggleClass("rotate");
});
//关闭弹窗
$(".close").click(function(){
	$(".mask").hide();
	$(this).parent().hide();
	return false;
});	
//确定
$(".sure").click(function(){
	$(".mask").hide();
	$(this).parents(".tan").hide();
	return false;
});
//查看
$(".check a").click(function(){
	dialog.show("未通过原因","太6");
	return false;
});
//更新版本
$(".upl").click(function(){
	$(".tan_upLevel,.mask").show();
	return false;	
});
//修改信息
$(".changeI").click(function(){	
	$(".tan_cI,.mask").show();
	return false;
});
//修改信息
$(".guide a").click(function(){
	$(".tab").hide();
	$(".tab")[$(this).index()].style.display="block";
});
// 新手礼包
$(".gift").click(function(){
	$(".tan_gift,.mask").show();
	return false;
});
// 新手礼包补充
$(".sp").click(function(){
	$(".tan_code,.tan_tan").show();
	return false;
});
//新手礼包补充关闭
$(".tan_code .close").click(function(){
	$(".tan_tan").hide();
	$(".mask").show();
});
//下架申请
$(".under").click(function(){
	$(".tan_pull,.mask").show();
	return false;
});

//调用弹框(标题，内容)
var dialog={
	show:function(_title,_content){
		$(".tan_check .title").html(_title);
		$(".tan_check p").html(_content);
		$(".tan_check,.mask").show();
	}
}
//自定义消息弹框1
// var dialog={
// 	classTan:'tan',
// 	classClose:'close',
// 	classTitle:'title',
// 	classContent:'content',
// 	btValue:'确定',
// 	show:function(title,content){		
// 		var divTan=document.createElement("div");
// 		divTan.className=this.classTan;
// 		var divClose=document.createElement("div");
// 		divClose.className=this.classClose;
// 		var divTitle=document.createElement("div");
// 		divTitle.className=this.classTitle;
// 		var _title=document.createTextNode(title);
// 		divTitle.appendChild(_title);				
// 		var divCon=document.createElement("div");
// 		divCon.className=this.classContent;
// 		var p=document.createElement("p");
// 		var _content=document.createTextNode(content);
// 		p.appendChild(_content);
// 		var a=document.createElement("a");
// 		a.href="javascript:void(0)";
// 		a.className="sure";
// 		var _a=document.createTextNode(this.btValue);
// 		a.appendChild(_a);
// 		divCon.appendChild(p);
// 		divCon.appendChild(a);
// 		var temp=document.createDocumentFragment();
// 		temp.appendChild(divClose);
// 		temp.appendChild(divTitle);
// 		temp.appendChild(divCon);
// 		divTan.appendChild(temp);
// 		document.body.appendChild(divTan);
// 		divTan.style.display="block";
// 	}
// };


//函数节流
function throttle(method,delay,duration){console.log(1);
	var timer=null,begin=new Date();
	return function(){
		var context=this,args=arguments,currents=new Date();
		clearTimeout(timer);
		if(currents-begin>=duration){
			method.apply(context,args);
			begin=currents;
		}
		else{
			timer=setTimeout(function(){
				method.apply(context,args);
			},delay);
		}
	}
}
