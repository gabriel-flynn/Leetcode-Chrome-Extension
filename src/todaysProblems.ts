import {waitForDomToRender} from './utils/DomUtils'
import {getTodaysDateString} from './utils/DateUtils'
/*
 * Difference between todaysProblemsSamePage.js and todaysProblems.js:
 *      todaysProblems.js: executed when the user is not already on the leetcode lists page
 *      todaysProblemsSamePage.js: executed when the user is already on the leetcode lists page
 */

//This file gets injected onto the webpage through the inject.js file so that we are able to access the window object

const todaysProblems = async () => {
    //Top level list div that contains all the lists

    let listDiv = await waitForDomToRender("[class^=list-group]")

    //Find the list for today
    let lists = listDiv.children;

    const todaysDate = getTodaysDateString();
    let listIsPresent = false; //keeps track of if we were able to find the list for today
    for(let list of lists) {
        const listName = (list as HTMLElement).innerText;
        if(listName == todaysDate) {
            (list as HTMLElement).click();
            listIsPresent = true;
            break;
        }
    }
    
    if(!listIsPresent) {
        alert('You have no assigned problems to work through today!');
    }
}

todaysProblems();
