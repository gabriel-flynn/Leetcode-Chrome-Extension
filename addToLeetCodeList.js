{
    const createListsAndAddElement = () => {
        
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
            
            //Build map of lists created
            let lists = parentDiv.querySelector("[class^=favorites]").children;
            let mapOfListNames = new Map();
            for(list of lists) {
                const listName = list.innerText;
                mapOfListNames.set(listName, list);
            }


            //Loop through and set each list up
            //Starter/Default pattern:
            //1st day, 2nd, 4th, 8th, 15th, and 30th
            const daysPattern = [1, 1, 2, 4, 7, 15];
            let date = new Date(Date.now());
            daysPattern.forEach(async daysToAdd => {
                date.setDate(date.getDate() + daysToAdd);
                const listName =`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()%100}`;
                if(!mapOfListNames.has(listName)) {
                    let listNameInput = parentDiv.querySelector("[class^=create-favorite-] span > input");

                    //ListName will be of the form MM/DD/YY -> Would like to provide more 
                    listNameInput.value = listName;
                    let createBtn = parentDiv.querySelector("[class^=create-favorite-block] button");
                    awautcreateBtn.click();
                } else if(list.classList.item(0)?.includes('unselected')) {//If the list exists and this problem isn't added to the list, add it
                        mapOfListNames.get(list).click();
                }
            });
        }, 500)
    }
    createListsAndAddElement();
}