/*
Scrimba M4 Solo Project: Oldagram 
    Author: Cassie Lewis
    https://clewisdev.com
    Date: March 2023
*/

/****** VARIABLES ******/

import { posts } from './data.js'

const mainContainer = document.getElementById("main-container");

let html = ""


/****** RENDER POSTS ******/

for (let i = 0; i < posts.length; i++) {
    html += `
    
        <section class="poster-info-container background-color">

            <img src=${posts[i].avatar} 
                alt="" 
                class="avatar"
                id="post-avatar">

            <div class="poster-text-container">    

            <h1 id="post-name">
                ${posts[i].name}
            </h1>

            <p 
                class="location"
                id="post-location">
                ${posts[i].location}
            </p>

            </div> <!-- close div for poster-text-container-->

        </section>

        <section class="image-container background-color">

            <img src="${posts[i].post}"
                alt="" 
                class="post-image"
                id="post-image">

        </section>    

        <footer class="footer-container background-color">

            <div class="icons-container margin-bottom">
            
            <button id="heart-icon">
                <img src="/images/icon-heart.png" 
                    class="icons"
                    alt="">
            </button>    

            <img src="/images/icon-comment.png" 
                class="icons"
                alt="">
            <img src="/images/icon-dm.png" 
                class="icons"
                alt="">
            
            </div> <!--close icons-container div-->    

            <p class="likes margin-bottom font-weight">
                <span 
                    id="post-likes"> 
                    ${posts[i].likes}</span>
                    likes</p>
            
            <p class="comments">
                <span 
                    class="font-weight"
                    id="post-username">
                    ${posts[i].username}</span>
                    <span id="post-comment">
                    ${posts[i].comment}</span>
            </p>    
        </footer>    
        
    `
}

mainContainer.innerHTML = html;

//! IDEAS FOR INCREASING LIKES
//? pull the value and increment it by one on each dblclick
//? how to get value when it isn't an input, or change to input?
//? only first post can be dblcliked?

/*
const heartIcon = document.getElementById("heart-icon");
let numLikes = document.getElementById("post-likes");

function increaseLikes() {
    console.log(heartIcon);
    console.log(numLikes);
    numLikes++
}

heartIcon.addEventListener("dblclick", increaseLikes);
*/