// export const likeButton = () => { }

const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "favoriteBlank") {
// Record that the user clicked the favorite button
        const favoriteBlank = document.querySelector("img[name='favoriteBlank']").value

// make an object out of the favorite button input
    const favorteToSendToAPI = {
        id: parseInt(favoriteBlank),
        userId: parseInt("???"),
        postId: parseInt("???")
    }
    
sendFavorite(favoriteToSendToAPI)
    }  
})

// Send Letter code to copy into "provider.js"
export const sendFavorite = (userFavorite) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userFavorite)
        }
    }
return fetch(`${apiURL}/likes`, fetchOptions)





// when the button is clicked, dislpay new html?
// store image src as a varianble? Can i do that?
// if id doesn't exist, display new html, if id does exist, display old html?
// 




// event listener for if the button is clicked
// event listener for if the button is unclicked (reference joe's code for this)
// send clicked data to API - related to postId?????
// rerender once checked - to show yellow star
// allow uncheck - delete post - to API
// rerender once unchecked - to show white star
// create html to display button(s)
// 


// html for blank favorite button

 `<div>
    <img src="./images/favorite-star-blank.svg" name="favoriteBlank" alt="favorite" style="width:20px;height:20px;"/>
    </div>`

    // html for blank favorite button
    `<div>
    <img src="./images/favorite-star-yellow.svg" name="favoriteYellow" alt="favorite" style="width:20px;height:20px;"/>
    </div>`
