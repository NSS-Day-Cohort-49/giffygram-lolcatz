import { returnNavbar } from "./nav/Navbar.js"

export const GiffyGram = () => {
   
    // Show main main UI\
    return `<h1>Giffygram</h1>
    ${returnNavbar()}
    <button class="button" id="logoutLink">Log Out</button>`
}

