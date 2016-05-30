var Map = function(g,manager,cam,tileMap) {
	this.map = tileMap.data;
	this.objectManager = manager; // Manager doit avoir manager.createObject(o);
	this.width = tileMap.width;
	this.height = tileMap.height;
	this.spriteSheet = g.assets.map[tileMap.refSpriteSheet];
	this.spriteSheetWidth =( this.spriteSheet.img.width / this.spriteSheet.tilesWidth)|0;
	this.nHeight = (cam.screenHeight / this.spriteSheet.tilesHeight)|0 +1
	this.nWidth = (cam.screenWidth  / this.spriteSheet.tilesWidth)|0 +1
	for(var i=tileMap.objects.length;i--;){
		this.objectManager.createObject( tileMap.objects[i] );
	}
	this.idMaxWall = 16;
}
Map.prototype.render = function(g,cam) {
	var idStart = this.getIdAtPos(cam.pos);
	var nWidth = this.nWidth;
	var nHeight = this.nHeight;
	var id=0;
	for(var y=0;y<nHeight+2;y++){
		for(var x=0;x<nWidth+1;x++){
			id = idStart+x;
			this.draw(g,cam,id);
		}
		idStart += this.width;
	}
};
Map.prototype.getIdAtPos = function(pos) {
	var id = ((pos.y/this.spriteSheet.tilesHeight)|0)*this.width + (pos.x/this.spriteSheet.tilesWidth)|0;
	return id;
}
Map.prototype.getPosAtId = function(id) {
	var pos = new Vector2( 0,0);
	pos.x = (id%this.width) * this.spriteSheet.tilesWidth; 
	pos.y = ((id/this.width)|0) * this.spriteSheet.tilesHeight;
	//magie le retour
	return pos;
}
Map.prototype.draw = function(g,cam,id) {
	var idTiles = this.map[id];
	var pos = this.getPosAtId(id);
	pos.sub(cam.pos);
	
	var sx = (idTiles% this.spriteSheetWidth)*this.spriteSheet.tilesWidth;
	var sy = ((idTiles/ this.spriteSheetWidth) |0)*this.spriteSheet.tilesWidth;
	g.context.drawImage( this.spriteSheet.img , 
							sx,sy ,this.spriteSheet.tilesWidth ,this.spriteSheet.tilesHeight ,
							pos.x|0 ,pos.y|0 ,this.spriteSheet.tilesWidth ,this.spriteSheet.tilesHeight );
}
Map.prototype.isWall = function(id) {
	return (this.map[id] <= this.idMaxWall);
}
Map.prototype.raycast = function() {
	
};















