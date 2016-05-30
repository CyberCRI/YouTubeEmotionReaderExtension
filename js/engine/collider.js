var Collider = function(x,y,xw,yw) {
	this.pos = new Vector2(x,y);
	this.width = new Vector2(xw,yw);
};
Collider.prototype.isColliding = function(c) {
	return false;
};
Collider.prototype.drawDebug = function(g,cam) {
	g.context.lineWidth = 1;
	g.context.fillStyle = 'white';
	g.context.strokeStyle = '#00ff00';
	g.context.fillRect(this.pos.x-cam.pos.x-this.width.x,this.pos.y-cam.pos.y-this.width.y,this.width.x*2,this.width.y*2);
	g.context.strokeRect(this.pos.x-cam.pos.x-this.width.x,this.pos.y-cam.pos.y-this.width.y,this.width.x*2,this.width.y*2);
};
Collider.prototype.isOnScreen = function(cam) {
	return ( this.pos.x < cam.pos.x + cam.screenWidth &&
				this.pos.x + 2*this.width.x > cam.pos.x &&
				this.pos.y < cam.pos.y + cam.screenHeight &&
				this.pos.y + 2*this.width.y > cam.pos.y); // a verif // c'est faux en faite
};