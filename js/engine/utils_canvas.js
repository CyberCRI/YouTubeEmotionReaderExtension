// Utils Canvas V1.0
function drawLine(ctx, pA , pB, pColor,pLineWidth) {
	ctx.strokeStyle = pColor || 'black';
	ctx.lineWidth = pLineWidth || 1;
	ctx.beginPath();
	ctx.moveTo(pA.x,pA.y);
	ctx.lineTo(pB.x,pB.y);
	ctx.stroke();	
};
function getDrawLine(pA,pB,pColor) {
	var color = pColor || 'black';
	return (function draw(ctx) {
		ctx.strokeStyle = color;
		ctx.beginPath();
		ctx.moveTo(pA.x,pA.y);
		ctx.lineTo(pB.x,pB.y);
		ctx.stroke();	
	});
};

function drawTriangle(ctx, pA, pB, pC, pColor,pStroke) {
	ctx.fillStyle = pColor || 'black';
	ctx.strokeStyle = pStroke || 'black';
    ctx.beginPath();
    ctx.moveTo(pA.x,pA.y);
    ctx.lineTo(pB.x,pB.y);
    ctx.lineTo(pC.x,pC.y);
    ctx.fill();
	if(pStroke) {
		ctx.stroke();
	}
};

function drawCircle(ctx, C,r,pColorFill,pColorStroke){
	ctx.fillStyle = pColorFill || 'black';
	ctx.strokeStyle = pColorStroke || 'black';
	ctx.beginPath();
	ctx.arc(C.x,C.y,r,0,2*Math.PI);
	ctx.fill();
	if(pColorStroke) {
		ctx.stroke();
	}
	ctx.closePath();
}

function renderToCanvas(width, height, renderFunction) {
    var buffer = document.createElement('canvas');
    buffer.width = width;
    buffer.height = height;
    renderFunction(buffer.getContext('2d'));
    return buffer;
};
function drawRect(ctx,p,w,h,color) {
	ctx.fillStyle = color||'black';
	ctx.fillRect(p.x-w/2,p.y-h/2,w,h);
}


function hslToRgb(h, s, l){
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h=0, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h /= 6;
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        
    }

    return [h, s, l];
}

function hsvToRgb(h, s, v) {
    var r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
        default: r = v, g = t, b = p; break;
    }
    return [
        Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255)
    ];
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


function rgbToString(c) {
	return 'rgb('+c[0]+','+c[1]+','+c[2]+')';
}

function replaceColorImg(source,colorToReplace,newColor) { //imgSrc , color en hexa '#ffffff'
	var cSource = hexToRgb(colorToReplace);
	var cNew = hexToRgb(newColor);
	
	var img = renderToCanvas( source.width,source.height,function(ctx) {
			ctx.drawImage(source,0,0);
	});
	var ctx = img.getContext('2d');
	var pixels = ctx.getImageData(0,0,source.width,source.height);
	for(var i=0; i<pixels.data.length; i=i+4){
		if(	pixels.data[i] == cSource.r && 
			pixels.data[i+1] == cSource.g && 
			pixels.data[i+2] == cSource.b &&
			pixels.data[i+3] != 0)
		{
			pixels.data[i] = cNew.r; 
			pixels.data[i+1] = cNew.g;
			pixels.data[i+2] = cNew.b;
		}
	}
	
	ctx.putImageData(pixels, 0, 0);

	
	
	
	return img;
}