import {openListOnProblemPage} from './utils/DomUtils'

const removeElementFromLists = async() => {
    
    //Open the list popup
    let event = new MouseEvent("mouseout", {"relatedTarget": document.querySelector("[class^=description] div:nth-child(2) > button:nth-child(4) span")});
    document.dispatchEvent(event);
    
    //Wish there was a better way to do this but leetcode has a delay set for opening the lists popup window
    await openListOnProblemPage();
    const parentDiv = document.querySelector("[class^=desktop]"); //Top Level parent that contains this divs with all the lists
    
    //Click the create list button
    let createListBtn : HTMLElement = parentDiv.querySelector("[class^=btn]"); 
    createListBtn.click();
    
    //Build map of lists created
    let lists = parentDiv.querySelector("[class^=favorites]").children;
    for(let list of lists) {
        const listName = (list as HTMLElement).innerText;
        const dateRegExp = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2}$/;
        if(dateRegExp.test(listName) && !list.classList.item(0)?.includes('unselected'))
            (list as HTMLElement).click();
    }
}
removeElementFromLists();
