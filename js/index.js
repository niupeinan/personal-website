$(function(){
	$(window).scroll(function(){
		let top = $(this).scrollTop();
		top>=30?$(".header").css("background","white"):$(".headr").css("background","");
	})
})