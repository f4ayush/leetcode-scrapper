// readDataScript.js

// This is a sample script to read data from the new page
// Replace this with your actual logic to read data from the page

// Example: Read the title of the new page and send it back to the extension
const pageTitle = document.title;
chrome.runtime.sendMessage({ action: "readData", data: pageTitle });
