var GameplayState = function() {
	
	
};
GameplayState.prototype.init = function(g) {
	document.body.style.cursor = "default";
	this.config = g.data;
	this.bg = new Backgrd(g,'black');
	this.width = g.canvasWidth;
	this.height = g.canvasHeight;
	this.effects = new EffectsManager();
	this.cam = new Camera(g.canvasWidth,g.canvasHeight);
	this.cam.posMax.x = g.canvasWidth;
	this.cam.posMax.y = g.canvasHeight;

	this.currentTime = videoYT.currentTime;
	this.duration = videoYT.duration;
	
	this.player = new Player(g);
};
GameplayState.prototype.update = function(g) {
	// var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	this.currentTime = videoYT.currentTime;
	this.cam.update(g);
	this.player.update(g,this.currentTime,this.duration);
};
GameplayState.prototype.render = function(g) {
	this.bg.render(g);
	this.player.render(g);
	this.effects.draw(g);
};
GameplayState.prototype.onMouse = function(pos,which,g) {
	if(pos.x >= 0 && pos.x <= this.width
	&& pos.y >= 0 && pos.y <= this.height
	&& which){
		this.player.click(pos,this.currentTime);
	}
}
GameplayState.prototype.createObject = function(o) {
	
};