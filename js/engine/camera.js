//delete zoom :'(

var Camera = function(screenWidth,screenHeight) {
	this.pos = new Vector2(0,0);
	this.posMin = new Vector2(0,0);
	this.posMax = new Vector2(screenWidth,screenHeight);
	this.screenWidth = screenWidth;
	this.screenHeight = screenHeight;
	this.target = null;
	this.posTarget = null;
	this.bordTarget = null;
};
Camera.prototype.update = function(g) {
	if(this.target) {
		if(this.bordTarget) {
			var posTarget = new Vector2(this.target.x - this.pos.x,this.target.y - this.pos.y);
			var x=this.pos.x,y=this.pos.y;
			if(posTarget.x < this.posTarget.x) {
				x = this.target.x - this.posTarget.x;
			}
			else if( posTarget.x > this.posTarget.x + this.bordTarget.x) {
				x = this.target.x - this.posTarget.x - this.bordTarget.x;
			}
			if(posTarget.y < this.posTarget.y) {
				y = this.target.y - this.posTarget.y;
			}
			else if(posTarget.y > this.posTarget.y + this.bordTarget.y) {
				y = this.target.y - this.posTarget.y - this.bordTarget.y;
			}
		}
		else {
			x = this.target.x - this.posTarget.x;
			y = this.target.y - this.posTarget.y;
			this.setPos(x,y);
		}
		this.setPos(x,y);
	}
};
Camera.prototype.setPos = function(x,y) {
	if(x < this.posMin.x) {
		this.pos.x = this.posMin.x;
	}
	else if(x+this.screenWidth > this.posMax.x) {
		this.pos.x = this.posMax.x-this.screenWidth;
	}
	else {
		this.pos.x = x;
	}
	
	if(y < this.posMin.y) {
		this.pos.y = this.posMin.y;
	}
	else if(y + this.screenHeight > this.posMax.y) {
		this.pos.y = this.posMax.y-this.screenHeight;
	}
	else {
		this.pos.y = y;
	}
};
Camera.prototype.setTarget = function(target,pos,bord) {
	this.target = target;
	this.posTarget = pos;
	if(bord) {
		this.bordTarget = bord;
	}
};