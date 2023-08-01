// background.js

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
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
  });
  