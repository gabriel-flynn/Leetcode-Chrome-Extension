let addProblem = document.getElementById('addProblem');
let removeProblem = document.getElementById('removeProblem');
addProblem.onclick = () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'addToLeetCodeList.js'}
      );
    });
  };

removeProblem.onclick = () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.executeScript(
      tabs[0].id,
      {file: 'removeFromLeetCodeLists.js'}
    );
  });
};