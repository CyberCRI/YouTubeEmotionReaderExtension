function getAssets(g,ls){
	var o = {};
	var canvasWidth = g.canvasWidth;
	var canvasHeight = g.canvasHeight;
	o.cursorPlayer = 
		renderToCanvas(canvasWidth/100,canvasHeight/2,function(ctx) {
			var rgb = hslToRgb(0,0.7,0.3);
			ctx.fillStyle = 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
			ctx.fillRect(0,0,canvasWidth/100,canvasHeight/2);
		})
	
	return o;
}