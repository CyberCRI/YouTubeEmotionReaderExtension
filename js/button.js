var Button = function(config,img) {
	this.config = config;
	this.pos = config.pos.copy();
	this.width = config.width;
	this.height = config.height;
	this.handler = config.handler;
	this.img = img;
	this.state = this.config.state.normal;
};
Button.prototype.render = function(g,isSelected){
	g.context.drawImage(this.img,this.state.x*this.width,this.state.y*this.height,this.width,this.height,this.pos.x,this.pos.y,this.width,this.height);
};
Button.prototype.isMouseOver = function(mouse){
	return (mouse.x > this.pos.x && mouse.x < this.pos.x + this.width && mouse.y > this.pos.y && mouse.y < this.pos.y + this.height);
};
Button.prototype.activate = function(g){
	this.handler(g);
};
Button.prototype.changeState = function(state){
	this.state = this.config.state[state];
};