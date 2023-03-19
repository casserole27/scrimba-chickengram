/*
Scrimba M4 Solo Project: Oldagram 
    Author: Cassie Lewis
    https://clewisdev.com
    Date: March 2023
*/

/****** VARIABLES ******/

import { posts } from './data.js'

    
/****** RENDER POSTS ******/


//! Make an HTML feed using .forEach() to iterate over data.js
//! Use the ${post.element} syntax to display unique data where needed
function getFeed(){
    let html = "";    
    posts.forEach(function(post) {   
   
    html += `
    
        <section class="poster-info-container background-color">

            <img src=${post.avatar} 
                alt="" 
                class="avatar"
                id="post-avatar">

            <div class="poster-text-container">    

            <p 
                id="post-name"
                class="font-weight">
                ${post.name}
            </p>

            <p 
                class="location"
                id="post-location">
                ${post.location}
            </p>

            </div> <!-- close div for poster-text-container-->

        </section>

        <section class="image-container background-color">

            <img src="${post.post}"
                alt="image of ${post.username}" 
                class="post-image"
                id="post-image">

        </section>    

        <footer class="footer-container background-color">

            <div class="icons-container margin-bottom">
            
          
            <img src="images/icon-heart.png" 
                class="icons heart-icon"
                data-like="${post.postid}"
                alt="heart-shaped icon">
             

            <a href="https://www.backyardchickens.com/" target="_blank">
                <img src="images/icon-comment.png" 
                    class="icons"
                    alt="word cloud comment icon">
              </a>
            
            <a href="${post.content}" target="_blank">  
                <img src="images/icon-dm.png" 
                    class="icons"
                    alt="direct message arrow icon">
            </a>

            </div> <!--close icons-container div-->    

            <p class="likes margin-bottom font-weight">
                <span 
                    id="post-likes"> 
                    ${post.likes}</span>
                    likes</p>
            
            <p class="comments">
                <span 
                    class="font-weight"
                    id="post-username">
                    ${post.username}</span>
                    <span id="post-comment">
                    ${post.comment}</span>
            </p>    
        </footer>    
        
    `
})
    return html;
}    

//! Render the HTML into the HTML "main container" of the document
function renderFeed() {
    const mainContainer = document.getElementById("main-container").innerHTML = getFeed();
}

renderFeed();

//!Event delegation to double click heart icons 
document.addEventListener("dblclick", function(e) {
        
    const target = e.target.dataset.like;
    if (target) {
        likeClicks(target);        
    };
});

function likeClicks(postId) {
      
    //! Using .filter(), find the post id that is equal to the target
    //! The [0] at the end is the object index so it's not using the array
    const targetPost = posts.filter(function(post) {
        return post.postid === postId;
    })[0]

    //! Increment and decrement likes
    if (targetPost.isLiked) {
        targetPost.likes--;
               
    } else {
        targetPost.likes++
    }; 
   
    //!This logic prevents the likes from continuing to increment.
    targetPost.isLiked = !targetPost.isLiked;
   
    //! Render feed with the changes
     renderFeed();
}         
