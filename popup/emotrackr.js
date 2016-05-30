/*
Given the name of a beast, get the URL to the corresponding image.
*/
function beastNameToURL(beastName) {
  switch (beastName) {
    case "Pause":
      return "pause"/*chrome.extension.getURL("beasts/frog.jpg")*/;
    case "Play":
      return "play"/*chrome.extension.getURL("beasts/snake.jpg")*/;
    case "Advance":
      return "right"/*chrome.extension.getURL("beasts/turtle.jpg")*/;
  }
}



/*
Listen for clicks in the popup.

If the click is not on one of the beasts, return early.

Otherwise, the text content of the node is the name of the beast we want.

Inject the "emotrackr.js" content script in the active tab.

Then get the active tab and send "emotrackr.js" a message
containing the URL to the chosen beast's image.
*/
document.addEventListener("click", function(e) {

  if (!e.target.classList.contains("beast")) {
    return;
  }


  chrome.tabs.executeScript(null, {
    file: "/content_scripts/emotrackr.js"
  });

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: e.target.textContent});
  });

});


chrome.runtime.onMessage.addListener(receiveTime);
function receiveTime(request, sender, sendResponse){
  document.getElementById("time").innerHTML = request.time;
}