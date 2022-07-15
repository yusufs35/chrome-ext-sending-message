
chrome.runtime.onInstalled.addListener(() => {

  chrome.contextMenus.create({
    title: "Get Element HTML",
    contexts: ["all"],
    id: "myContextMenuId1",
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  chrome.tabs.sendMessage(tab.id, { type: "showEl" }, (resp) => {
    console.log(resp);
  });
});
