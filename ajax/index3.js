const btnHam = document.querySelector(".ham-btn");
const btnTimes = document.querySelector(".times-btn");
const navBar = document.getElementById("nav-bar");

btnHam.addEventListener("click", function () {
  if (btnHam.className !== "") {
    btnHam.style.display = "none";
    btnTimes.style.display = "block";
    navBar.classList.add("show-nav");
  }
});

btnTimes.addEventListener("click", function () {
  if (btnHam.className !== "") {
    this.style.display = "none";
    btnHam.style.display = "block";
    navBar.classList.remove("show-nav");
  }
});

// Original
// document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
//   e.preventDefault();
//   document.querySelector('.subscription').classList.add('done');
// });
  

// document.getElementById('postForm').addEventListener('submit', postName);

// Subscribe

// document.getElementById('add-email', 'postForm').addEventListener('mousedown', postName);


// //3
// document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
//   e.preventDefault();
 
//   var name = document.getElementById('name2').value;

//   var xhr = new XMLHttpRequest();
//   xhr.open('POST', 'process3.php', true);
  
//   xhr.onload = function(){
//     console.log(this.responseText)
//     // console.log('submitted');
//   }
//   xhr.send();

//   document.querySelector('.subscription').classList.add('done');
// }); 






//7

// document.getElementById('postForm').addEventListener('mousedown', postName);

document.querySelector('.submit-email').addEventListener('mousedown',

function postName(e){
  e.preventDefault();
 
  var name = document.getElementById('name2').value;

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'process3.php', true);
  
  xhr.onload = function(){
    console.log(this.responseText)
    // console.log('submitted');
  }
  xhr.send();

  document.querySelector('.subscription').classList.add('done');
}); 






// function postName(e){
//   e.preventDefault();

//   var name = document.getElementById('name2').value;

//   var xhr = new XMLHttpRequest();
//   xhr.open('POST', 'process3.php', true);
  
//   xhr.onload = function(){
//     console.log(this.responseText)
//   }
//   xhr.send();
// }
//b


// -----end subscribe



/*
    Social Links:
    
    Facebook: https://www.facebook.com/sharer.php?u=[post-url]
    
    Twitter: https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]

    Reddit: https://reddit.com/submit?url=[post-url]&title=[post-title]
    
    WhatsApp: https://api.whatsapp.com/send?text=[post-title] [post-url]
    
    */

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const redditBtn = document.querySelector(".reddit-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("From Slapn News");

  facebookBtn.setAttribute("href", `https://www.facebook.com/sharer.php?u=${postUrl}`);

  twitterBtn.setAttribute("href", `https://twitter.com/share?url=${postUrl}&text=${postTitle}&via=[via]&hashtags=[hashtags]
      `);

  redditBtn.setAttribute("href", `https://reddit.com/submit?url=${postUrl}&title=${postTitle}`);

  whatsappBtn.setAttribute("href", `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`);

  function init(){
    console.log("hello");
  }

}

init();





