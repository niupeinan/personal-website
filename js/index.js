window.onload = function(){
	let header = document.querySelector(".header");
	window.onscroll = function(){
		let he = document.body.scrollTop || document.documentElement.scrollTop;
		if(he >= 80){
			header.style.background = "#fff";
		}
		else{
			header.style.background = "rgba(255, 255, 255,0)";
		}
	}	
}