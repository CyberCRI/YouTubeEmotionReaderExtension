// speed en pixel/ms
// la direction est dans la vitesse
// et merci à toi http://bdadam.com/blog/panning-and-scrolling-background-images-using-the-canvas-element.html
var Scrolling = function(g,img,config,speed,alpha,direction,autoscroll){
	this.img = img;
	this.width = config.width;
	this.height = config.height;
	this.pos = new Vector2(0,0); // à définir dans les parametres à l'avenir
	this.speed = speed;
	this.alpha = alpha;
	this.autoscroll = autoscroll;
	this.direction = direction;
	this.count = 0;
	if(this.direction === "+width" || this.direction === "-width"){
		this.imageNumber = Math.ceil(g.canvasWidth / this.width) + 1;
	}
	else if(this.direction === "+height" || this.direction === "-height"){
		this.imageNumber = Math.ceil(g.canvasHeight / this.height) + 1;
	} // bailout?
};
Scrolling.prototype.update = function(g){
	if(this.autoscroll){
		this.count += g.dt;
		if(this.direction === "+width" || this.direction === "-width"){
			this.pos.x = this.count*this.speed.x%this.width;
			// this.pos.y %= this.width;
		}
		else if(this.direction === "+height" || this.direction === "-height"){
			this.pos.y = this.count*this.speed.y%this.height;
			// this.pos.y %= this.height;
		};
	}
};
Scrolling.prototype.render = function(g,context){ // !Attention! passage exceptionnel du context pour gamezone
	context.globalAlpha = this.alpha;
	for(var i=0;i<this.imageNumber;i++){
		// context.drawImage(this.img,this.pos.x += g.dt*this.speed.x%this.width,
		// 					this.pos.y += ((g.dt*this.speed.y)%this.height)-this.height*i);
		if(this.direction === "+width"){
			context.drawImage(this.img,this.pos.x - this.width*i,0);
		}
		else if(this.direction === "-width"){
			context.drawImage(this.img,this.pos.x + this.width*i,0);
		}
		else if(this.direction === "+height"){
			context.drawImage(this.img,0,this.pos.y - this.height*i);
		}else if(this.direction === "-height"){
			context.drawImage(this.img,0,this.pos.y + this.height*i);
		};
	};
	context.globalAlpha = 1;
};
Scrolling.prototype.updateTime = function(g,time){
	this.time = time;
	if(this.direction === "+width" || this.direction === "-width"){
		this.pos.x = this.time*this.speed.x%this.width;
		// this.pos.y %= this.width;
	}
	else if(this.direction === "+height" || this.direction === "-height"){
		this.pos.y = this.time*this.speed.y%this.height;
		// this.pos.y %= this.height;
	};
};