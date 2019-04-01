//游戏状态 开始或者没开始
var game_type = 0;
//开始游戏函数
function start_game(){
	//状态改为1（开始了）
	game_type = 1;
	//让按钮隐藏
	document.getElementById("start_btn").style.display = "none";
	//让飞机显示
	document.getElementById("fj").style.display = "block";
}
//计时器的回调函数
function step(){
	//如果游戏是开始了 那就运行 背景移动函数
	if(game_type){
		bg_move();
		fj_move();
		bullet_move();
	}

	//循环调用自己
	window.requestAnimationFrame(step);
}
//背景移动函数
function bg_move(){
	//获取背景移动div的x坐标
	var bg_position = document.getElementById("img_div").offsetLeft;
	//如果x坐标小于等于-1000
	if(bg_position <= -1000){
		//变为0
		bg_position = 0;	
	}
	//x坐标-3
	bg_position-=3;
	//让背景x坐标为我们-3后的坐标
	document.getElementById("img_div").style.left = bg_position + "px";
	//第一次是0 然后 -3 -6 -9 -12 -15 -18 -21 造成移动的效果
}
//帧数计时器
window.requestAnimationFrame(step);





