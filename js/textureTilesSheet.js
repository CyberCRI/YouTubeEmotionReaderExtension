//texture
function getTilesSheet( width,height,tileSize) {
	return renderToCanvas(width*tileSize,height*tileSize, function(ctx) {
		var posX = 0;
		var posY = 0;
		for(var j = 0;j < height ; j++) {
			for(var i = 0;i < width ; i++) {
				posX = i*tileSize;
				posY = j*tileSize;
				var red = 50+(150*Math.random())|0;
				// var red = 0;
				var green = (205/width)*i+(50*Math.random())|0;
				// var green = (205/width)*i;
				var blue = (200/height)*j;
				ctx.fillStyle = 'rgba('+red+','+green+','+blue+',1)';
				ctx.fillRect(posX,posY,tileSize,tileSize);
			}
		}
	});
}