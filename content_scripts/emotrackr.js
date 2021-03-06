/*
beastify():
* removes every node in the document.body,
* then inserts the chosen beast
* then removes itself as a listener 
*/

// if(!document.getElementById("emotion-player")){
//   var controlBar = document.createElement('div');
//   controlBar.style = "background-color: black; height:100px;";
//   controlBar.className = "player-width";
//   controlBar.id = "emotion-player";
//   var parentGuest = document.getElementById('placeholder-player');
//   parentGuest.parentNode.insertBefore(controlBar, parentGuest.nextSibling);
// }



function beastify(request, sender, sendResponse) {
  /*removeEverything();*/
  var videoYT =  document.getElementsByTagName('video')[0];
  if(request.action == "Pause"){
    videoYT.pause();
  }
  else if(request.action == "Play"){
    videoYT.play();
  }
  else if(request.action == "Right"){
    videoYT.currentTime++;
    chrome.runtime.sendMessage({time: videoYT.currentTime});
  }

  chrome.runtime.onMessage.removeListener(beastify);
}


/*
Remove every node under document.body
*/
function removeEverything() {
  while (document.body.firstChild) {
    document.body.firstChild.remove();
  }
}

/*
Given a URL to a beast image, create and style an IMG node pointing to
that image, then insert the node into the document.
*/
function insertBeast(beastURL) {
  var beastImage = document.createElement("img");
  beastImage.setAttribute("src", beastURL);
  beastImage.setAttribute("style", "width: 100vw");
  beastImage.setAttribute("style", "height: 100vh");
  document.body.appendChild(beastImage);
}

/*
Assign beastify() as a listener for messages from the extension.
*/
chrome.runtime.onMessage.addListener(beastify);


/*
Given the name of a beast, get the URL to the corresponding image.
*/
function beastNameToURL(beastName) {
  switch (beastName) {
    case "Frog":
      return chrome.extension.getURL("beasts/frog.jpg");
    case "Snake":
      return chrome.extension.getURL("beasts/snake.jpg");
    case "Turtle":
      return chrome.extension.getURL("beasts/turtle.jpg");
  }
}
