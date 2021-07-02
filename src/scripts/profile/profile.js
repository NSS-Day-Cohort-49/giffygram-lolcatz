// function that has a form, include the info, map through the messages array, loop through the messages array and 2 event listeners

// As an authenticated user, I would like to view the profile of other users

// Given that a person has provided proper authentication details
// When the person is viewing the post feed
// Then each author should name should be displayed as a clickable affordance

// Given the person wants to view the details of an author
// When the person clicks on the author name
// Then the post list should be replaced with the author's profile

// Given the person has clicked on an author name
// When the author profile is rendered
// Then the person should see the author's first name, last name, total number of posts
// and any messages between the person and the author displayed in descending chronological order

// const sortedMessages = () => { 
        
//     let sortedMessagesArray = messages.sort((a,b) => {
//         return parseInt(a.split("-").join("")) - parseInt(b.split("-").join(""));
//     })};


//     document.addEventListener(
//         "click",
//         (event) => {
//             if (event.target.id.startsWith("messages")) {
//                 const [,gameId] = event.target.id.split("--")
//                 deleteGame(parseInt(gameId))
//             }
//         }
//     )
    
