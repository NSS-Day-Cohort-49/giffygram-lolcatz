document.addEventListener(
   "click",
   (event) => {
         if (event.target.id === "saveButton") {
            window.alert(`This will save`)
         }
   }
)

document.addEventListener(
   "click",
   (event) => {
         if (event.target.id === "showPostForm") {
            const postForm = document.querySelector(".PostForm")
            postForm.classList.remove("isHidden")
            

            //add isHidden class to showPostForm button
            const showPostForm = document.querySelector("#showPostForm")
            showPostForm.classList.add("isHidden")
         }
   }
)


function validateForm() {
   let x = document.forms["myForm"]["fname"].value;
   if (x == "") {
     alert("Name must be filled out");
     return false;
   }
 }
 export const postForm = () => {
    return (
    `<div class="giffButton"><button id="showPostForm">Have a GIF to post?</button></div>
   <div class="PostForm isHidden" >
         <form>
            <fieldset>
                <label for="title">Title:</label>
                <input type="text" name="title" autofocus placeholder="Title" />
             </fieldset>

            <fieldset>
               <label for="gif irl">GIF Url:</label>
               <input type="hyperlink" name="Url" placeholder="GIF Url" />
            </fieldset>

            <fieldset>
               <label for="gif information">Story behind the GIF:</label>
               <input type="story" name="story" placeholder="Story behind the gif" />
          </fieldset>
      </form>
    <button id="saveButton">Save</button>
    <button id="cancelButton">Cancel</button>
</div>
`
)
} 
 