chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ author: 'xtyuns' });
    console.log("I'm Installed!");
  });