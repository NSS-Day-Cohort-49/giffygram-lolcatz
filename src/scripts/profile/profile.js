// function that has a form, include the info, map through the messages array, loop through the messages array and 2 event listeners




const sortedMessages = () => { 
        
    let sortedMessagesArray = messages.sort((a,b) => {
        return parseInt(a.neededBy.split("-").join("")) - parseInt(b.neededBy.split("-").join(""));
    })};


    document.addEventListener(
        "click",
        (event) => {
            if (event.target.id.startsWith("")) {
                const [,gameId] = event.target.id.split("--")
                deleteGame(parseInt(gameId))
            }
        }
    )
    
    