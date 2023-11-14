document.addEventListener("readystatechange", async (event) => {
    if (document.readyState == "complete") {
        let titleElement = document.querySelector("#submission-app a");
        let problemTitle = titleElement.textContent;
        let problemUrl = titleElement.href;
        let codeContainer = document.querySelector(".ace_layer.ace_text-layer");
        let title = `/*\n${problemTitle}\n${problemUrl}\n*/\n`;
        let language = document.querySelector("span#result_language").textContent;
        console.log(language)
        let extension = getExtension(language);
        let filename = `${problemTitle.replaceAll(" ", "_")}.${extension}`;

        let codeRows = codeContainer.querySelectorAll("div.ace_line_group");

        let code = [...codeRows].map((curr) => {
            return curr.textContent + "\n";
        })

        let totalText = [...title, ...code]
        
        // console.log(response)
        var link = document.createElement("a");
        var blob = new Blob(totalText, { type: "text/plain" });
        var url = URL.createObjectURL(blob);
        link.setAttribute('download', filename);
        link.href = url;
        document.body.appendChild(link);
        link.click();
        link.remove();
        close();
    }
});

function getExtension(language){
    console.log(language)
    let extension = "";
    switch(language.toLowerCase()){
        case "java":
            extension = "java"
            break;
        case "javascript":
            extension = "js"
            break;
        case "python":
            extension = "py";
            break;
        default:
            extension = "md";
    }

    return extension
}