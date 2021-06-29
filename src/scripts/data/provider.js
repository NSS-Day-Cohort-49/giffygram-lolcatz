const apiURL = "http://localhost:3000"
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