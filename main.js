window.requestAnimFrame = 	(
	function(){
		return  window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame    ||
				window.oRequestAnimationFrame      ||
				window.msRequestAnimationFrame     ||
				function(callback, element){
						window.setTimeout(callback, 1000 / 60);
				};
	}
)();
if(document.getElementById("placeholder-player")){
	var parentGuest = document.getElementById('placeholder-player');


	var videoYT =  document.getElementsByTagName('video')[0];
	var controlBar = document.createElement('canvas');
	controlBar.width = 500;
	controlBar.height = 50;
	controlBar.id = "emotion-player";
	parentGuest.parentNode.insertBefore(controlBar, parentGuest.nextSibling);

	var containerVidEmotion = document.createElement('div');
	containerVidEmotion.id = "container";
	var videoel = document.createElement('video');
	videoel.id = "videoel";
	videoel.preload = "auto";
	videoel.loop = true;
	var canvasOverlay = document.createElement('canvas');
	canvasOverlay.id = "overlay";
	containerVidEmotion.appendChild(videoel);
	containerVidEmotion.appendChild(canvasOverlay);
	parentGuest.parentNode.insertBefore(containerVidEmotion, parentGuest.nextSibling);

	var game = new Game();
	game.currentState.init(game);
	game.loop();
}