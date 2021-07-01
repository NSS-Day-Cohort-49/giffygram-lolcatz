import { getUserPendingMessages, getUsers } from "../data/provider.js";



export const DirectMessage = () => {
  
           return `<div class="dm_div">
                <input type="text" placeholder="Title">
                <input type="text" placeholder="Recipient">
                <input type="text" placeholder="Message">
                <button id="sendDm>Send</button>
                <button id="cancelDm">Cancel</button>
                </div>`
};