// window.requestAnimFrame = 	(
// 	function(){
// 		return  window.requestAnimationFrame ||
// 				window.webkitRequestAnimationFrame ||
// 				window.mozRequestAnimationFrame    ||
// 				window.oRequestAnimationFrame      ||
// 				window.msRequestAnimationFrame     ||
// 				function(callback, element){
// 						window.setTimeout(callback, 1000 / 60);
// 				};
// 	}
// )();

// //Fonction  d'initialisation
// window.onload = function(){
// 	var game = new Game();
// 	game.currentState.init(game);
// 	game.loop();
// }