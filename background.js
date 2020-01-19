browser.browserAction.onClicked.addListener(() => {
    browser.sidebarAction.open();
    // browser.sidebarAction.toggle();
    // did not work
});

