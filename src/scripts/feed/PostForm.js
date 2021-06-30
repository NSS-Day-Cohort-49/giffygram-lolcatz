

function validateForm() {
   let x = document.forms["myForm"]["fname"].value;
   if (x == "") {
     alert("Name must be filled out");
     return false;
   }
 }
 export const postForm = () => {
    return (
    `<div class="PostForm">
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
    <button id="SaveButton">Save</button>
    <button id="CancelButton">Cancel</button>
</div>
`
)
 } 