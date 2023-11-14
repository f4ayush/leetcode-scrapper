// background.js

// Listen for messages from the content script
/* chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "changeColor") {
    // Execute the content script to change the background color
    chrome.tabs.executeScript({
      code: 'document.body.style.backgroundColor = "pink";'
    });
  } else if (message.action === "readData") {
    // Handle the received data from the new tab
    const data = message.data;
    console.log("Data read from the new page:", data);
  }
}); */


chrome.runtime.onMessage.addListener(
  async function (request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    if (request.message === "create_tab") {
      const tab = await chrome.tabs.create(
        { url: request.url }
      )
      // chrome.scripting.executeScript({ function:()=>{console.log("hiiiiiiiiiiiii")}, target: { tabId: tab.id }, injectImmediately: true })
      sendResponse({ sender: sender.tab });

    } else if (request.message === "close_tab") {
      chrome.tabs.getCurrent(
        (tab)=>{
          chrome.tabs.remove(
           tab.id
          )
        }
      )
      
    }
    // sendResponse({ sender: sender.tab })

  }
);
