import { getUserPendingMessages } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")


//Creating a custom event listener that dispatches/broadcasts a message regarding state changing when triggered
applicationElement.addEventListener(
    "click",
    (event) => {
        if (event.target.id.startsWith("logo")) {
            applicationElement.dispatchEvent(new CustomEvent("logoIsClicked"))
        } else if (event.target.id.startsWith("pendingMessagesCounter")) {
            applicationElement.dispatchEvent(new CustomEvent("pendingMessagesCounterIsClicked"))
        }
    }
)

//This function counts the number of pending messages with the initial value of 0; as it loops through the pending messages array
// with the forEach method (not using map because don't need anything to be return), it is adding 1 to the i variable and returning i;
//it is triggered when the Pending Messages button is clicked
const countPendingMessages = () => {
    let i = 0;
    getUserPendingMessages().forEach(pendingMessage => {
        i++
    });
    return i;  
}

export const  returnNavbar = () => {
    return `<nav>
            <div class="logo_pic">
            <img id="logo" src="../../images/giffy_logo.PNG"/>
            </div>
            <div>
            <button id="pendingMessagesCounter">Pending Messages: ${countPendingMessages()}</button>
            </div>
            <button class="button" id="logoutLink">Log Out</button>
    </nav>`
}


// <button id="logo">Logo</button>