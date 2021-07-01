const apiURL = "http://localhost:3000"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    pendingMessages: {},
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    users: [],
    posts: [],
    likes: [],
    messages: []
}   


// export const fetchExternalData = () => {
//     return Promise.all([
//     fetch(`${apiURL}/users`) // problem here
//     ])
//         .then(responses => {
//             return Promise.all(responses.map(response => {
//                 return response.json()
//             }))
//         }) 
//         .then(externalData => {
//             // Store the external state in application state
//             applicationState.users = externalData[0]
 
//         })
// }


export const fetchUsers = () => {
    return fetch(`${apiURL}/users`)
        .then(response => response.json())
        .then(
            (users) => {
                applicationState.users = users
            }
        )
}

export const getUsers = () => {
    return applicationState.users.map(user => ({...user}))
}



// Post Http Request
export const sendMessage = (messageContent) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageContent)
    }

    return fetch(`${apiURL}/messages`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            alert("Your Message Has Been Sent! :D");
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })
};


export const savePendingMessage = (messageContent) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageContent)
    }

    return fetch(`${apiURL}/pendingMessages`, fetchOptions)
        .then(response => response.json());
};

// get fetch calls

export const fetchMessages = () => {
    return fetch(`${apiURL}/messages`)
        .then(response => response.json())
        .then(
            (messagesData) => {
                applicationState.messages = messagesData
            }
        );
};


export const getMessages = () => {
    return applicationState.messages.map(message => ({...message}))
};


// you use this function to retrieve the pendingMessages from the /unreadMessages array in the giffygram.json
export const fetchPendingMessages = () => {
    return fetch(`${apiURL}/unreadMessages`)
        .then(response => response.json())
        .then(
            (pendingMessageData) => {
                applicationState.pendingMessages = pendingMessageData
            }
        )
}


// you use this function to get all the pending messages from the pendingMessages property in the applicationState
export const getUserPendingMessages = () => {
    // you get the value from the gg_user key in the local storage which is a number
    // you also parseInt it because you need to make it a number, if its only localStorage.getItem("gg_user") it gets a string.
    const userId =  parseInt(localStorage.getItem("gg_user"));
    // you filter through all the pendingMessages and for each pendingMessage you set a condition
    return applicationState.pendingMessages.filter((pendingMessage) => {
        // if the userId you got from localStorage is the same as this pendingMessage.userId then return that pendingMessage
        if (userId === pendingMessage.userId) {
            // when you return this pending message it gets added to the new array which we are returning above.
            return pendingMessage
        }
    });
}


// you use this function to delete pending messages
// delete post 
export const deletePendingMessage = (messageId) => {
    const fetchOptions = {
        method: "DELETE"
    }
    // this url string inside the fetch needs to specify where in the database the call will go to delete the pending messages
    return fetch(`${apiURL}/unreadMessages/${messageId}`, fetchOptions)
   
}
