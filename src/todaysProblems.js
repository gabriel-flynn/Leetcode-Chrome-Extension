{
    const todaysProblems = () => {

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