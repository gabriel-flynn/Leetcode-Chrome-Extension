let addProblem = document.getElementById('addProblem');

addProblem.onclick = () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'addToLeetCodeList.js'}
      );
    });
  };