import { getPosts } from "../data/provider.js"

export const giffyPosts = () => {
    //invoking and grabbing getPosts 
    const posts = getPosts()
    

let html = `<div>${posts.map(post => {
    return `
    <section name="posts" class ="post" value="${post.id}">
        <h2 class="post_title">"${post.title}"></h2>
        <img class="post_pic" src="${post.imageURL}">
        <div class="post_idea">${post.description}</div>
    </section>`
    }).join("")}</div>`
return html;
}




