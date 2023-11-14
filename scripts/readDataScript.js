document.addEventListener("readystatechange", async (event) => {
    if (document.readyState == "complete") {
        let titleElement = document.querySelector("#submission-app a");
        let problemTitle = titleElement.textContent;
        let problemUrl = titleElement.href;
        let filename = problemTitle.replaceAll(" ", "_") + ".java";
        let codeContainer = document.querySelector(".ace_layer.ace_text-layer");
        let title = `/*\n${problemTitle}\n${problemUrl}\n*/\n`;
        let codeRows = codeContainer.querySelectorAll("div.ace_line_group");

        let code = [...codeRows].map((curr) => {
            return curr.textContent + "\n";
        })

        let totalText = [...title, ...code]
        // const response = await chrome.runtime.sendMessage({ message: "download_file", code, filename });
        // console.log(response)
        var link = document.createElement("a");
        var blob = new Blob(totalText, { type: "text/plain" });
        var url = window.URL.createObjectURL(blob);
        link.setAttribute('download', filename);
        link.href = url;
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
});