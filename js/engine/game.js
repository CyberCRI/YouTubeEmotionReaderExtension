var Game = function() {
	this.idState = {
			gameplay:0
	};
	this.data = {};
	this.listState = [];
	this.listState.push(new GameplayState(this));
	this.currentState = new LoadState(this);  // !!
	
	var canvas = this.canvas = document.getElementById("emotion-player");
	this.tempCanvas = canvas.getBoundingClientRect();
	this.canvasHeight = 30;
	this.canvasWidth = this.tempCanvas.width;
	canvas.width = this.canvasWidth;
	canvas.height = this.canvasHeight
	this.context = canvas.getContext("2d");
	this.dt = 0;
	this.lastTime = Date.now();
	this.initControl(canvas);
};

Game.prototype.loadState = function(pId) {
	this.currentState = this.listState[pId];
	this.currentState.init(this);
};

Game.prototype.start = function() {
this.currentState.init(this);
this.loop();
};

Game.prototype.loop = function() {
	var that = this;
	// requestAnimFrame(function(){ that.loop() });
	var now = Date.now();
	this.dt = now - this.lastTime;
	this.lastTime = now;
	this.dt = (this.dt > 100)? 0:this.dt;
	this.currentState.update(this);
	this.currentState.render(this);
	
		requestAnimFrame(function(){ that.loop() });
};

Game.prototype.initControl = function(canvas) {
	this.gamepads = [];
	var gamepads = this.gamepads;
	window.addEventListener("gamepadconnected", function(e) {
		// console.log('new gamepad connected');
		gamepads.push(navigator.getGamepads()[e.gamepad.index]);
	});
	window.addEventListener("gamepaddisconnected", function(e) {
		// console.log('gamepad '+e.gamepad.index+' disconnected');
		for(var i=0;i<gamepads.length;i++){
			if(gamepads[i].index == e.gamepad.index){
				gamepads.splice(i,1);
			}
		}
	});

	this.keyBoardMap = {left:81,right:68,space:32 };
	this.keyBoardValue = {left:0,right:0,space:0 };
	this.mouse = new Vector2(0,0);
	document.oncontextmenu = function () {
		return false;
	};
	var that = this;
		document.addEventListener('mousedown',function(event) {
		if( that.currentState.onMouse && event.which === 1) { // event.which == 2 pour click du milieu
			var clientRect = canvas.getBoundingClientRect();
			var mouseX = event.clientX-clientRect.left;
			var mouseY = event.clientY-clientRect.top;
			that.currentState.onMouse( {x : mouseX, y : mouseY}, 1, that );
		}
		else if(that.currentState.onMouse && event.which === 3) {
			var clientRect = canvas.getBoundingClientRect();
			var mouseX = event.clientX-clientRect.left;
			var mouseY = event.clientY-clientRect.top;
			that.currentState.onMouse( {x : mouseX, y : mouseY}, 2, that );
		}
	});
	document.addEventListener('mouseup',function(event) {
		if( that.currentState.onMouse) {
			var clientRect = canvas.getBoundingClientRect();
			var mouseX = event.clientX-clientRect.left;
			var mouseY = event.clientY-clientRect.top;
			that.currentState.onMouse( {x : mouseX, y : mouseY}, 0, that );
		}
	});
	document.addEventListener('mousemove' , function(event) {
			var clientRect = canvas.getBoundingClientRect();
			var mouseX = event.clientX-clientRect.left;
			var mouseY = event.clientY-clientRect.top;
			if(mouseX < canvas.width && mouseX >= 0 &&
				mouseY < canvas.height && mouseY >= 0) {
				that.mouse.x = mouseX;
				that.mouse.y = mouseY;
			}
	});
	document.addEventListener('keydown',function(e) {
		for(var key in that.keyBoardMap) {
			if(e.keyCode == that.keyBoardMap[key]) {
				that.keyBoardValue[key] = 1;
			}
		};
		if( that.currentState.onKey) {
			that.currentState.onKey( e.keyCode, 1, that );
		}
	});
	document.addEventListener('keyup',function(e) {
		for(var key in that.keyBoardMap) {
			if(e.keyCode == that.keyBoardMap[key]) {
				that.keyBoardValue[key] = 0;
			}
		};
		if( that.currentState.onKey) {
			that.currentState.onKey( e.keyCode, 0, that );
		}
	});
};