import { deletePendingMessage, fetchPendingMessages, getUserPendingMessages } from "./data/provider.js";
import { returnNavbar } from "./nav/Navbar.js"
import { pendingMessages } from "./message/pendingMessages.js";
import { renderApp } from "./main.js";
import { giffyPosts } from "./feed/PostList.js";
import {postForm} from "./feed/PostForm.js"


const applicationElement = document.querySelector(".giffygram")





export const GiffyGram = () => {

    // Show main main UI
    return `<h1>Giffygram</h1>${postForm()}`

}


// this state is basically a flag to let the app know if the user has visited the pendingMessagesPage
// based on the value of this state the event below will behave differently.
const giffyGramPageState = {
    pendingMessagesPage: false
}


// this event listener will trigger when the customEvent "logoIsClicked" is dispatched in the NavBar.js
applicationElement.addEventListener("logoIsClicked", (CustomEvent) => {
    // this condition is checking that the value in the pendingMessagePage in the giffyGramPageState is true
    if (giffyGramPageState.pendingMessagesPage) {
        // if it is true that means the user has visited the pendingMessagesPage so it proceeds to get all the userPendingMessages
        // and forEach pendingMessage it deletes it
        getUserPendingMessages().forEach((pendingMessage) => {
             deletePendingMessage(pendingMessage.id)
        });
        // after deleting each pendingMessage we stick the GiffyGram page inside the applicationElement
        // and then we set the value of pendingMessagePage to false telling the app the user is no longer in the pendingMessagePage
        applicationElement.innerHTML = GiffyGram(); 
        giffyGramPageState.pendingMessagesPage = false; 
        // after all of that you can re-render the app, the two lines above may not be necessary, since renderApp() would reset the state to false.
        renderApp();
    } else {
        console.log('has not visited')
        // if the user hasnt visited the pendingMessagesPage then it just displays the GiffyGram() page
        applicationElement.innerHTML = GiffyGram();
    }
})

// this event listener receives the signal from the custom event listener in navbar and changes the giffyGram state to true and rendering/showing
//the pending messages on the navbar when the counter is cliked
applicationElement.addEventListener("pendingMessagesCounterIsClicked", (CustomEvent) => {
    console.log('clicking on counter')
    giffyGramPageState.pendingMessagesPage = true;
    applicationElement.innerHTML = pendingMessages();
})


export const GiffyGram = () => {
   
    // Show main main UI\
    return `
    <div>
        ${returnNavbar()}
    </div>
    <section>
        ${giffyPosts()}
    </section>
    `
}
