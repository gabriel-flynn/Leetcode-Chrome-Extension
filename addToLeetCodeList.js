let createListsAndAddElement = () => {
    
   // let listOfLists = Array.from(parentDiv.children);
    //Open the list popup
    let event = new MouseEvent("mouseout", {"relatedTarget": document.querySelector("[class^=description] div:nth-child(2) > button:nth-child(4) span")});
    document.dispatchEvent(event);
    
    //Wish there was a better way to do this but leetcode has a delay set for opening the lists popup window
    setTimeout(() => {
        const parentDiv = document.querySelector("[class^=desktop]"); //Top Level parent that contains this divs with all the lists
        
        //Click the create list button
        let createListBtn = parentDiv.querySelector("[class^=btn]"); 
        createListBtn.click();
        
        
        
        let listNameInput = parentDiv.querySelector("[class^=create-favorite-] span > input");
        //Update the text
        listNameInput.value = "doesThisWork";
        let createBtn = parentDiv.querySelector("[class^=create-favorite-block] button");
        createBtn.click();
    
        parentDiv.forEach((element) => {
            console.log(element);
        });
    }, 500)
   
}

createListsAndAddElement();