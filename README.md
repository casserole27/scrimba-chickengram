
 ## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


### Overview

[Scrimba](https://scrimba.com) Module 4 solo project - Oldagram


### The challenge

Requirements:
- create the first post
- use semantic HTML
- add hover effects to the icons
- [Figma design file](https://www.figma.com/file/EudzmSzMLlY25ZYcjenhBv/Oldagram-(Copy)?node-id=0%3A1&t=sxBSELCAFPSgjdKd-0)

Stretch goals:
- use JavaScript to render out all three posts
- increase the likes when double clicking the post

Personal stretch goals:
- responsiveness
- icon functionality
- personal design : Chickengram


### Screenshot

![Chickengram-screenshot](/images/Screenshot%202023-03-21%20at%2021-02-12%20Chickengram.png)

### Links

- [Scrim](https://scrimba.com/scrim/cocf840e8981a3822a7204ebd)
- [Github](https://github.com/casserole27/scrimba-chickengram)
- [Live Site](https://www.clewisdev.com/scrimba-chickengram/)

## My process

- Create Github repository
- Set up basic HTML file 
- Set up basic CSS file
- Set up basic JavaScript file
- Consult Figma design files
- Project work
- Publish live URL
- Check markup and accessibility
(https://validator.w3.org/)
(https://wave.webaim.org/)
- README file


### Built with

- semantic HTML5
- CSS custom properties
- Responsive Web Design
- vanilla JavaScript

### What I learned

- Using JavaScript to render HTML for multiple posts of the same type with different data

- HTML datasets: applying unique identifiers in order to identify data and decrease number of event listeners

```javascript
    <img src="images/icon-heart.png" 
                class="icons heart-icon"
                data-like="${post.postid}"
                  //"Likes" data set that will help look for the selected post ID and increment its likes
                alt="heart-shaped icon">
  ```
  
- Event delegation: this is an event listener on the whole document, 
  but it targets the "data-like" elements from the HTML and runs a function on them.

```javascript
  document.addEventListener("dblclick", function(e) {
        
    const target = e.target.dataset.like;
    if (target) {
        likeClicks(target);        
    };
});

```
- JS .filter() method : find and filter out data

- JS .forEach() method : another way to iterate

```javascript
function getFeed(){
    let html = "";    
    posts.forEach(function(post) {   
      //Iterate through each post of posts, similar to for loop or for of, but we apply the function directly in the method.
    html += `
```

### Continued development

- Accessibility - how to do alt text for rendered images
- Turn heart red

### Useful resources

[Project scrim](https://scrimba.com/learn/frontend/solo-project-oldagram-co2274297820a9405442e3a2a)
[Scrimba help](https://projects.scrimba.com/oldagram)

[.filter method](https://scrimba.com/scrim/coe224f7989e7291a3ed38fe0?pl=pnXvVsP)
[.forEach method](https://scrimba.com/learn/frontend/aside-foreach-ck69yqhD)


## Author

- Website - [C Lewis](https://www.clewisdev.com)
- LinkedIn - [LinkedIn](https://www.linkedin.com/in/clewisdev/)


## Acknowledgments





