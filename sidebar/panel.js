const t2f_text = document.getElementById("t2f_text");
function text2form() {
    const gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, { t2f_text_value: t2f_text.value } );
    });
}
t2f_text.addEventListener("keyup", text2form, false);