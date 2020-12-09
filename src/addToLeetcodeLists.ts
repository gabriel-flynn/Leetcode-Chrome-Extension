import {generateDays} from './utils/DateUtils'
import {openListOnProblemPage} from './utils/DomUtils'

const createListsAndAddElement = async () => {

    //Open the list popup
    await openListOnProblemPage();
    
    const parentDiv= document.querySelector("[class^=desktop]"); //Top Level parent that contains this divs with all the lists
    
    //Click the create list button
    let createListBtn : HTMLElement = parentDiv.querySelector("[class^=btn]"); 
    createListBtn.click();
    
    //Build map of lists created
    let lists = parentDiv.querySelector("[class^=favorites]").children;
    let mapOfListNames = new Map();
    for(let list of lists) {
        const listName = (list as HTMLElement).innerText;
        mapOfListNames.set(listName, list);
    }
    //Loop through and set each list up
    //Default pattern:
    //1st day, 2nd, 4th, 8th, 15th, and 30th
    const days = generateDays();
    days.forEach(listName => {
        if(!mapOfListNames.has(listName)) {
            let listNameInput : HTMLInputElement = parentDiv.querySelector("[class^=create-favorite-] span > input");

            //ListName will be of the form MM/DD/YY -> Would like to provide more 
            listNameInput.value = listName;
            let createBtn :HTMLElement = parentDiv.querySelector("[class^=create-favorite-block] button");
            createBtn.click();
        } else if(mapOfListNames.get(listName).classList.item(0)?.includes('unselected')) {//If the list exists and this problem isn't added to the list, add it
                mapOfListNames.get(listName).click();
        }
    });
}
createListsAndAddElement();
