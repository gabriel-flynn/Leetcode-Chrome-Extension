let addProblem = document.getElementById('addProblem');
let removeProblem = document.getElementById('removeProblem');
let todaysProblems = document.getElementById('todaysProblems');

const pageIsLoaded = (tab) => {
  return new Promise(resolve => {
    chrome.tabs.onUpdated.addListener(function onUpdatedListener(tabId, info) {
      if (tabId === tab.id && info.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(onUpdatedListener);
        resolve();
      }
    });
  });
};

addProblem.onclick = () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.executeScript(
      tabs[0].id,
      {file: 'src/addToLeetCodeList.js'}
    );
  });
 };

removeProblem.onclick = () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.executeScript(
      tabs[0].id,
      {file: 'src/removeFromLeetCodeLists.js'}
    );
  });
};


todaysProblems.onclick = async () => {
  chrome.tabs.query({active: true, currentWindow: true}, async (tabs) => {
    chrome.tabs.update(
        tabs[0].id,
        {url: "https://leetcode.com/list/"});
    await pageIsLoaded(tabs[0]);
    console.log('still loading');
    chrome.tabs.executeScript(
      tabs[0].id,
      {file: 'src/todaysProblems.js'}
    );  
  });
};


