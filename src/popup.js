let addProblem = document.getElementById('addProblem');
let removeProblem = document.getElementById('removeProblem');
let todaysProblems = document.getElementById('todaysProblems');


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

    const urlRegex = /^https:\/\/leetcode.com\/list\/*$/
    if(!urlRegex.test(tabs[0].url)) {
      chrome.tabs.update(
          tabs[0].id,
          {url: "https://leetcode.com/list/?"}
      );
    } else {
      chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'src/todaysProblems.js'}
      );
    }
  });
};


