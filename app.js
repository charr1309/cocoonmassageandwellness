
const submit = document.getElementById("submit-btn");
const recipientEmail = "shanna@cocoonmassageandwellness.com";

submit.addEventListener("click", () => {
  window.location.href = `mailto:${recipientEmail}?subject=Form Submission`;
});

const hamMenu = document.querySelector('.ham-menu');
const navBar = document.querySelector('.navbar');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  navBar.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.element-to-animate');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              entry.target.classList.remove('not-visible');
            } else {
                entry.target.classList.add('not-visible');
                entry.target.classList.remove('visible');
            }
      });
  }, {
      threshold: 0.5
  });

  elements.forEach(el => {
      observer.observe(el);
  });
});

window.onscroll = function () {
  myFunction()
};
var navbar = document.querySelector('.navbar');


var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}

