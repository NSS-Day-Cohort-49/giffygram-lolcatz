import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"
// import { fetchExternalData } from "./data/provider.js"
import { fetchUsers } from "./data/provider.js"


const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))

    // fetchExternalData()
    fetchUsers()
        .then(()=> {
            if (!user) {
                applicationElement.innerHTML = GiffyGram()
            } else {
                applicationElement.innerHTML = LoginForm()
            } 
        })
}

renderApp()


applicationElement.addEventListener("stateChanged", (CustomEvent) => {
    renderApp();
})