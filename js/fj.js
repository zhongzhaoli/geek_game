//定义变量 上下左右
var key_left, key_top, key_right, key_down = false;
//可以发射的状态
var can_create;
//键盘按下事件
window.onkeydown = function(e){
	if(!game_type){
		return;
	}
	//获取按下的代码数
	var key = e.keyCode;
	//左37 上38 右39 下40
	//如果是左 变量为true;
	if(key === 37){
		key_left = true;
	}
	if(key === 38){
		key_top = true;
	}
	if(key === 39){
		key_right = true;
	}
	if(key === 40){
		key_down = true;
	} 
	if(key === 32){
		//如果可以发射
		if(can_create){
			//创建子弹
			create_bullet();
		}
		//设置为不可以发射
		can_create = false;
	}
}
//键盘弹起事件
window.onkeyup = function(e){
	if(!game_type){
		return;
	}
	var key = e.keyCode;
	//如果是左 变量为false;
	if(key === 37){
		key_left = false;
	}
	if(key === 38){
		key_top = false;
	}
	if(key === 39){
		key_right = false;
	}
	if(key === 40){
		key_down = false;
	} 
	if(key === 32){
		//设置为可以发射
		can_create = true;
	}
}
function fj_move(){
	//飞机速度
	var fj_speed = 5;
	//飞机实时坐标 y x
	var fj_top = document.getElementById("fj").offsetTop;
	var fj_left = document.getElementById("fj").offsetLeft;
	//如果按下的是左 就 left -
	//如果按下的是右 就 left +
	//如果按下的是上 就 top -
	//如果按下的是下 就 top +
	if(key_right){
		document.getElementById("fj").style.left = fj_left + fj_speed + "px";
	}
	if(key_left){
		document.getElementById("fj").style.left = fj_left - fj_speed + "px";
	}
	if(key_top){
		document.getElementById("fj").style.top = fj_top - fj_speed + "px";
	}
	if(key_down){
		document.getElementById("fj").style.top = fj_top + fj_speed + "px";
	}
}