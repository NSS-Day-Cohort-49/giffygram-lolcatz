import { getUsers } from "../data/provider.js"

// Event Listener for log-in button listens for id "loginButton".
document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "loginButton") {
        let foundUser = null
        const userState = getUsers()

        const email = document.querySelector("input[name='email']").value
        const password = document.querySelector("input[name='password']").value

        for (const user of userState) {
            if (user.email === email && user.password === password) {
                foundUser = user
            }
        }

        if (foundUser !== null) {
            localStorage.setItem("gg_user", foundUser.id)
            document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
})

// HTML text for Login Form - 
export const LoginForm = () => {
    return `
    <div class="loginForm">
    <form>
    <fieldset>
    <label for="email">Email:</label>
    <input type="text" name="email" autofocus placeholder="Email address" />
    </fieldset>
    <fieldset>
    <label for="password">Password:</label>
    <input type="password" name="password" placeholder="Password" />
    </fieldset>
    </form>
    <button id="loginButton">Login</button>
    </div>
    `
}

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "logoutLink"){
        localStorage.setItem("gg_user", null)    
        document.querySelector(".giffygram").dispatchEvent(new CustomEvent("stateChanged"))
    }
})