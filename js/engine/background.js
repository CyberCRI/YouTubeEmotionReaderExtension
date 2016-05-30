var Backgrd = function(g,key) {
	this.buffer = document.createElement('canvas');
	this.width = this.buffer.width = g.canvasWidth;
	this.height = this.buffer.height = g.canvasHeight;
	this.ctx = this.buffer.getContext('2d');
	this.draw(key);
};
Backgrd.prototype.render = function(g){
	g.context.drawImage(this.buffer,0,0);
};
Backgrd.prototype.draw = function(key) {
	if(BgLists[key]) {
		BgLists[key](this.ctx,this.width,this.height);
	}
	else {
		BgLists.black(this.ctx,this.width,this.height);
	}
};

var BgLists = { black:function(ctx,w,h) {
						ctx.fillStyle="#000010";
						ctx.fillRect(0,0,w,h);
					},
				green:function(ctx,w,h) {
					ctx.fillStyle="#00ff00";
					ctx.fillRect(0,0,w,h);
				}
				,iceRect:function(ctx,w,h) {
						ctx.fillStyle="#000010";
						ctx.fillRect(0,0,w,h);
						ctx.globalAlpha = 0.5;
						for(var i=3000;i--;) {
							ctx.fillStyle='rgb(0,'+((Math.random()*230+10)|0)+',255)';
							ctx.fillRect(Math.random()*w,Math.random()*h,Math.random()*200,Math.random()*600);
						}
					}
				}