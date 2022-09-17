let addWelcome = document.getElementById("addWelcome");

addWelcome.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: setAddWelcome,
    });
});


function setAddWelcome() {
    var div = document.getElementsByTagName("div")[0];
    document.body.appendChild(div);
    div.insertAdjacentHTML("afterbegin", '<h1>Welcome</h1>');
}
