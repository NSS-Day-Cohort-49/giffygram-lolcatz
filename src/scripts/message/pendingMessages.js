import { getUserPendingMessages } from "../data/provider.js"
import { returnNavbar } from "../nav/Navbar.js"


export const pendingMessages = () => {
   
    return `<h1>Pending Messages</h1>
    ${returnNavbar()}
    ${getUserPendingMessages().map((pendingMessage) => {
        return `<div>
            <p>${pendingMessage.title}<p>
            <p>${pendingMessage.message}</p>
        </div>`
    })}`
}


