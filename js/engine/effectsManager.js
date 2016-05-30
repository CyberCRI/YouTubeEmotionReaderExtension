//effectsManager
var EffectsManager = function() {
	this.effects = [];
}
EffectsManager.prototype.draw = function(g) {
	for(var i=0;i<this.effects.length;i++) {
		if(!this.effects[i].draw(g)) {
			this.effects.splice(i,1);
			i--;
		}
	}
}
EffectsManager.prototype.add = function(obj) {
	this.effects.push(obj);
}

var WhiteScreen = function(timer) {
	this.timer = (timer)?timer: 5;
}
WhiteScreen.prototype.draw = function(g) {
	g.context.fillStyle = "rgba(200,200,200,"+this.timer/8+")";
	g.context.fillRect(0,0,g.canvasWidth,g.canvasHeight);
	if(this.timer == 0 ) { return false; } else { this.timer--; return true;}
};

var RedScreen = function(timer) {
	this.timer = (timer)?timer: 5;
}
RedScreen.prototype.draw = function(g) {
	g.context.fillStyle = "rgba(200,0,0,"+this.timer/8+")";
	g.context.fillRect(0,0,g.canvasWidth,g.canvasHeight);
	if(this.timer == 0 ) { return false; } else { this.timer--; return true;}
};