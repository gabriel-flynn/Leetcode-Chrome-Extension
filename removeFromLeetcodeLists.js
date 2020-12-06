{
    const removeElementFromLists = () => {
        
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
            for(list of lists) {
                const listName = list.innerText;
                const dateRegExp = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2}$/;
                if(dateRegExp.test(listName) && !list.classList.item(0)?.includes('unselected'))
                    list.click();
            }
        }, 500);
    }
    removeElementFromLists();
}