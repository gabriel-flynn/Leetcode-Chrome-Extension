{
    const removeElementFromLists = () => {

       //Top level list div that contains all the lists
        const listDiv = document.querySelector("[class^=list-group]"); 

       //Find the list for today
        let lists = listDiv.children;
        const todaysDate = getTodaysDateString();
        for(list of lists) {
            const listName = list.innerText;
            if(listName == todaysDate)
                list.click();
        }
    }

    const getTodaysDateString = () => {
        const date = new Date(Date.now());
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()%100}`;
    }
    removeElementFromLists();
}