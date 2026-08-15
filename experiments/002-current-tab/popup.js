chrome.tabs.query(
    {}, 
    (tabs) => {
        let output = "";
        for (let i = 0; i < tabs.length; i++) {
            const tabInfo = `${i+1}. ${tabs[i].title} - ${tabs[i].windowId}`
            output += JSON.stringify(tabInfo, null, 2);
            if(i<tabs.length-1) {
                output += "\n==========\n";
            }
        }
    document.getElementById("output").textContent = output;
    document.getElementById("title").textContent = "Extension";
    }
);

/* chrome.tabs.query(
    {currentWindow: true}, 
    (tabs) => {
        let output = "";
        for (let i = 0; i < tabs.length; i++) {
            output += JSON.stringify(tabs[i], null, 2);
            if(i<tabs.length-1) {
                output += "\n==========\n==========\n";
            }
        }
    document.getElementById("output").textContent = output;
    document.getElementById("title").textContent = "Extension";
    }
);

*/