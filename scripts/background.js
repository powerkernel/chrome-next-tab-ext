chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'next_tab') {
    chrome.tabs.query({ currentWindow: true }, (tabsArray) => {
      // If only 1 tab is present, do nothing.
      if (tabsArray.length === 1) {
        return;
      }
      // Otherwise switch to the next available tab.
      let activeTabIndex = null;
      tabsArray.forEach((tab, index) => {
        if (tab.active === true) {
          activeTabIndex = index;
        }
      });
      // Obtain the next tab.
      const nextTab = tabsArray[(activeTabIndex + 1) % tabsArray.length];
      // Switch to the next tab.
      chrome.tabs.update(nextTab.id, { active: true });
    });
  }
});
