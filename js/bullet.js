function create_bullet(){
	var a = document.createElement("img");
	a.src = "./image/img/bullet.png";
	a.className = "bullet";
		//飞机实时坐标 y x
	var fj_top = document.getElementById("fj").offsetTop;
	var fj_left = document.getElementById("fj").offsetLeft;
	a.style.left = fj_left + 20 + "px";
	a.style.top = fj_top + 18 + "px";
	document.getElementById("box").appendChild(a);
} 	 
function bullet_move(){
	var bu_speed = 3;
	var a = document.getElementsByClassName("bullet");
	for(var i = 0; i < a.length; i++){
		var bu_left = a[i].offsetLeft;
		a[i].style.left = bu_left + bu_speed + "px";
	}
}