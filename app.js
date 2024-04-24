function storePagePosition() {
    var page_y = window.scrollY;
    localStorage.setItem("page_y", page_y);
  }
  
  
  window.addEventListener("scroll", storePagePosition);
  
  
  var currentPageY;
  
  try {
    currentPageY = localStorage.getItem("page_y");
  
    if (currentPageY === undefined) {
      localStorage.setItem("page_y") = 0;
    }
  
    window.scrollTo( 0, currentPageY );
  } catch (e) {
      // no localStorage available
  }

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

function previous(){
  window.history.go(-1);
}
// const toggleButton = document.getElementsByClassName('toggle-button')[0];
// const navBarLinks = document.getElementsByClassName('navbar-links')[0];
// const navbar = document.getElementsByClassName('navbar')
// const offerings = document.getElementsByClassName('offerings')

// toggleButton.addEventListener('click', () => {
//   navBarLinks.classList.toggle('active')
//   navbar.style.height = "30px";
//   offerings.style.top = "300rem"
// });

//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    // clearTimeout(runNextAuto);
    // runNextAuto = setTimeout(() => {
    //     next.click();
    // }, timeAutoNext)
}
const hamMenu = document.querySelector('.ham-menu');
const navBar = document.querySelector('.navbar');

hamMenu.addEventListener('click', ()=>{
  hamMenu.classList.toggle('active');
  navBar.classList.toggle('active');
});

const anims = document.querySelectorAll('.anim');
const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px"
 };

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      return
    }
      console.log(entry);
      entry.target.classList.add("loaded");
    
  });
},options);

anims.forEach(anim =>{
  observer.observe(anim);

})

window.onscroll = function(){
  myFunction()
};
var navbar = document.querySelector('.navbar');


var sticky = navbar.offsetTop;

function myFunction(){
  if(window.pageYOffset >= sticky){
    navbar.classList.add('sticky')
  }else{
    navbar.classList.remove('sticky');
  }
}


