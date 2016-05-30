//v1.3
//Modif:
// .getAlpha() > remplace par atan2()
//ajout:
// .dot(v) > retourne le produit scalaire des vecteurs "this" et "v"
// getProjectOn(v) > Retourne le vecteur image de la projection de this sur v
// getLHNormal() > retourne le vecteur normal (LeftHand)
// getRHNormal() > retourne le vecteur normal (RightHand)
var Vector2 = function(pX, pY) {
	this.x = +pX;
	this.y = +pY;
}

Vector2.prototype.getNormSquare = function() {
	return ((this.x*this.x) + (this.y*this.y));
}

Vector2.prototype.getNorm = function() {
	return Math.sqrt((this.x*this.x) + (this.y*this.y));
}

Vector2.prototype.getNormalize = function() {
	var norm = this.getNorm();
	var newVect = new Vector2(this.x/norm , this.y/norm );
	return newVect;
}
Vector2.prototype.normalize = function() {
	var norm = this.getNorm();
	if(norm > 0) {
		this.x = this.x/norm;
		this.y = this.y/norm;
	}
}
Vector2.prototype.rotate = function(alpha) {
			var sinA = Math.sin(alpha)
			var cosA = Math.cos(alpha)
			var x = this.x * cosA - this.y * sinA; //calcul d1
			var y = this.x * sinA + this.y * cosA; // ^
			this.x = x;
			this.y = y;
}
Vector2.prototype.getSum = function(p) {
	return new Vector2(this.x + p.x,this.y + p.y);
};
Vector2.prototype.sum = function(p) {
	this.x += + p.x;
	this.y += + p.y;
};
Vector2.prototype.getSub = function(p) {
	return new Vector2(this.x - p.x,this.y - p.y);
};
Vector2.prototype.sub = function(p) {
	this.x -= + p.x;
	this.y -= + p.y;
};
Vector2.prototype.scale = function(s) {
	this.x *= s;
	this.y *= s;
};
Vector2.prototype.getScale = function(s) {
	return new Vector2(this.x*s,this.y*s);
};
Vector2.prototype.copy = function() {
	return new Vector2(this.x,this.y);
};
Vector2.prototype.getAlpha = function() {
	// var norm = this.getNorm();
	// var alpha = Math.acos(this.x / norm);
	// alpha = (this.y <0)? 2*Math.PI-alpha:alpha;
	return Math.atan2(this.y,this.x);
};
Vector2.prototype.setAlpha = function(a) {
	if(a) {
		var norm = this.getNorm();
		this.x = Math.cos(a) * norm;
		this.y = Math.sin(a) * norm;
	}
};
Vector2.prototype.set = function(v,y) {
	if(isNaN(v) && isNaN(y)) {
		this.x = v.x;
		this.y = v.y;
	}
	else {
		this.x = v;
		this.y = y;
	}
};
Vector2.prototype.dot = function(v) {
	return this.x * v.x + this.y * v.y;
};
Vector2.prototype.getProjectOn = function(pV) {
	var v = pV.getNormalize();
	var dot = this.dot(v);
	v.scale(dot);
	return v;
}
Vector2.prototype.getLHNormal = function() {
	return new Vector2(this.y,-this.x);
}
Vector2.prototype.getRHNormal = function() {
	return new Vector2(-this.y , this.x);
}
