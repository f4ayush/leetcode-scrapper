function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("readystatechange", (event) => {
  if (document.readyState == "complete") {
    const submissionTable = document.querySelector("#submission-list-app");
    const submissionRows = submissionTable.querySelectorAll("tr");
    let count = 0;
    submissionRows.forEach(async (row) => {
      let linkElement = row.querySelector("a.text-success")
      console.log(linkElement.href)
      const response = await chrome.runtime.sendMessage({ message: "create_tab", url: linkElement.href });
      console.log(response)
    })
  }
});


