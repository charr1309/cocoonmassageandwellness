function storePagePosition() {
    var page_y = window.pageYOffset;
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
const toggleButton = document.getElementsByClassName('toggle-button');
const navBarLinks = document.getElementsByClassName('navbar-links');

toggleButton.addEventListener('click', () => {
  navBarLinks.classList.toggle('active')
});

