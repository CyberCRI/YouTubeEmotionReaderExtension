var Player = function(g) {
	this.img = g.assets.cursorPlayer;
	this.width = g.assets.cursorPlayer.width;
	this.height = g.assets.cursorPlayer.height;
	this.pos = new Vector2(0,0);
	this.containerPlayer = {};
	console.log(g.canvasWidth*0.9);
	console.log(g.canvasHeight);
	this.containerPlayer.width = g.canvasWidth * 0.9;
	this.containerPlayer.height = g.canvasHeight * 0.5;
	this.containerPlayer.pos = new Vector2(g.canvasWidth * 0.05, 0);
};
Player.prototype.update = function(g,currentTime,duration) {
	this.pos.x = this.containerPlayer.pos.x + (this.containerPlayer.width/duration*currentTime);
};
Player.prototype.render = function(g) {
	g.context.drawImage(this.img,this.pos.x,this.pos.y);
};
Player.prototype.click = function(pos,which,currentTime) {
	console.log(pos);
	if(pos.x >= this.containerPlayer.pos.x && pos.x <= this.containerPlayer.width + this.containerPlayer.pos.x
	&& pos.y >= this.containerPlayer.pos.y && pos.y <= this.containerPlayer.height + this.containerPlayer.pos.y){
		console.log(currentTime);
	}
};