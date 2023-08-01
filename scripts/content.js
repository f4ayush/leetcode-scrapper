function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const submissionTable = document.querySelector("#submission-list-app");
const submissionRows = submissionTable.querySelectorAll("tr");

/* submissionRows.forEach(row => {
  
}); */
// await sleep(5000);

chrome.browserAction.onClicked.addListener(function (tab) {
  // Send a message to the content script to change the background color
  chrome.tabs.sendMessage(tab.id, { action: "changeColor" });
});

console.log(chrome.browserAction, chrome)
// Listen for click events on the page
document.addEventListener("click", function (event) {
  // Check if the clicked element is an anchor tag (link)
  const clickedElement = event.target;
  if (clickedElement.className === "text-success") {
    // Prevent the link from opening immediately
    event.preventDefault();

    // Get the link URL
    const linkUrl = clickedElement.href;

    // Open a new tab with the link URL
    chrome.tabs.create({ url: linkUrl }, function (newTab) {
      // Once the new tab is opened, inject a content script to read data from the new page
      chrome.tabs.executeScript(newTab.id, { file: "scripts/readDataScript.js" });
    });
  }
});
console.log(submissionTable)
