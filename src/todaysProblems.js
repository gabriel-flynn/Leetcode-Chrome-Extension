/*
 * Difference between todaysProblemsSamePage.js and todaysProblems.js:
 *      todaysProblems.js: executed when the user is not already on the leetcode lists page
 *      todaysProblemsSamePage.js: executed when the user is already on the leetcode lists page
 */

//This file gets injected onto the webpage through the inject.js file so that we are able to access the window object
{
    const todaysProblems = async () => {

        const waitForjQuery = () => {
            return new Promise(resolve => {
                let interval = setInterval(() => {
                    if(window.jQuery) {
                        clearInterval(interval);
                        resolve();
                    }
                }, 1000);
            })
        }

        await waitForjQuery();
       //Top level list div that contains all the lists
        const listDiv = document.querySelector("[class^=list-group]"); 

       //Find the list for today
        let lists = listDiv.children;
        const todaysDate = getTodaysDateString();
        let listIsPresent = false; //keeps track of if we were able to find the list for today
        for(list of lists) {
            const listName = list.innerText;
            if(listName == todaysDate) {
                list.click();
                listIsPresent = true;
                break;
            }
        }
        
        if(!listIsPresent) {
            alert('You have no assigned problems to work through today!');
        }
    }

    const getTodaysDateString = () => {
        const date = new Date(Date.now());
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()%100}`;
    }
    todaysProblems();
}