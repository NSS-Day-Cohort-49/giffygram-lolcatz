const apiURL = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
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


export const fetchExternalData = () => {
    return Promise.all([
    fetch(`${apiURL}/users`)
    ])
        .then(responses => {
            return Promise.all(responses.map(response => {
                return response.json()
            }))
        }) 
        .then(externalData => {
            // Store the external state in application state
            applicationState.users = externalData[0]
 
        })
}

export const getUsers = () => {
    return applicationState.users.map(user =>({...user}))
}