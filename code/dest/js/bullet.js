"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bullet = function () {
	function Bullet() {
		_classCallCheck(this, Bullet);

		this.ele = document.createElement("div");
		this.id = parseInt(Math.random() * 100000000);
	}

	_createClass(Bullet, [{
		key: "init",
		value: function init() {
			gameEngine.allBullet[this.id] = this;
			//console.log( gameEngine.allBullet );

			gameEngine.ele.appendChild(this.ele);
			this.ele.className = "bullet";
			this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth / 2 - this.ele.offsetWidth / 2 + "px";
			this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
			return this;
		}
	}, {
		key: "move",
		value: function move() {
			var that = this;
			this.timer = setInterval(function () {
				var y = that.ele.offsetTop - 10;
				if (y < -18) {
					clearInterval(that.timer); //停止移动
					gameEngine.ele.removeChild(that.ele); //移除子弹

					//删除
					delete gameEngine.allBullet[that.id];
				} else {
					that.ele.style.top = y + "px"; //移动
				}
			}, 50);
		}
	}, {
		key: "boom",
		value: function boom() {
			clearInterval(this.timer); //停止移动

			this.ele.className = "bullet-die";

			var that = this;
			//	const dieImgs = ["images2/die1.png", "images2/die2.png"]; 
			//let i = 0;

			var i = 0,
			    dieImgs = ["images2/die1.png", "images2/die2.png"];

			var dieTimer = setInterval(function () {
				if (i >= 1) {
					clearInterval(dieTimer); //停止爆炸
					gameEngine.ele.removeChild(that.ele); //移除子弹
				} else {
					that.ele.style.background = "url(" + dieImgs[++i] + ") no-repeat";
				}
			}, 100);
		}
	}]);

	return Bullet;
}();

//
////子弹Bullet
//function Bullet(){
//	//属性ele
//	this.ele = document.createElement("div");
//	this.id = parseInt(Math.random()*100000000);
//	
//	//方法init
//	this.init =()=>{
//		
//		//添加
//		gameEngine.allBullet[this.id] = this;
//		//console.log( gameEngine.allBullet );
//		
//		gameEngine.ele.appendChild(this.ele);
//		this.ele.className = "bullet";
//		this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - this.ele.offsetWidth/2 + "px";
//		this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
//		return this;
//	}
//	
//	//方法move
//	this.move = ()=>{
//		const that = this;
//		this.timer = setInterval(()=>{
//			let y = that.ele.offsetTop - 10;
//			if (y < -18) {
//				clearInterval(that.timer); //停止移动
//				gameEngine.ele.removeChild(that.ele); //移除子弹
//				
//				//删除
//				delete gameEngine.allBullet[that.id];
//			}
//			else {
//				that.ele.style.top = y + "px"; //移动
//			}
//		}, 50);
//	}
//	
//	//爆炸
//	this.boom = ()=>{
//		clearInterval(this.timer); //停止移动
//		
//		this.ele.className = "bullet-die";
//		
//		const that = this;
//	//	const dieImgs = ["images2/die1.png", "images2/die2.png"]; 
//	//let i = 0;
//		
//		let [i,dieImgs]=[0,["images2/die1.png", "images2/die2.png"]];
//		let dieTimer = setInterval(()=>{
//			if (i >= 1){
//				clearInterval(dieTimer); //停止爆炸
//				gameEngine.ele.removeChild(that.ele); //移除子弹
//			}else {
//				that.ele.style.background = "url("+ dieImgs[++i] +") no-repeat";
//			}
//		}, 100);
//	}
//	
//}
//