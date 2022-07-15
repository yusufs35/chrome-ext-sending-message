//content script
let clickedEl = null;

document.addEventListener(
  "contextmenu",
  function (event) {
    clickedEl =  event.target.outerHTML ;
  },
  true
);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "showEl") {
    console.log(clickedEl);
    sendResponse(clickedEl);
  } else {
    sendResponse(clickedEl);
  }
});
