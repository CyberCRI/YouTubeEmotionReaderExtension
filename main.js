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
  var videoYT =  document.getElementsByTagName('video')[0];
  var controlBar = document.createElement('canvas');
  controlBar.className = "player-width";
  controlBar.height = 30;
  controlBar.id = "emotion-player";
  var parentGuest = document.getElementById('placeholder-player');
  parentGuest.parentNode.insertBefore(controlBar, parentGuest.nextSibling);

  var game = new Game();
  game.currentState.init(game);
  game.loop();
}