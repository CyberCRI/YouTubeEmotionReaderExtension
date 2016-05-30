function getAssets(g,ls){
	var o = {};
	
	o.cursorPlayer = 
		renderToCanvas(5,15,function(ctx) {
			var rgb = hslToRgb(0,0.7,0.3);
			ctx.fillStyle = 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
			ctx.fillRect(0,0,5,20);
		})
	
	return o;
}