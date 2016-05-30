var LoadState = function() {
	
};
LoadState.prototype.init = function(g) {
	g.data = getData(g);
	g.config = getConfig(g);
	g.assets = getAssets(g,this);

	this.ready = true;
	
};
LoadState.prototype.update = function(g) {
	if(this.ready){
		g.loadState(0);
	}
};
LoadState.prototype.render = function(g) {
	
};
LoadState.prototype.addImg = function(src) {
	var img=new Image();
	img.src=src;
	// img.onload MAGIIIE
	return img;
};