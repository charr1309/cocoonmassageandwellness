console.log("🚀 app.js is loading...");
const submit = document.getElementById("submit-btn");
const recipientEmail = "shanna@cocoonmassageandwellness.com";

if (submit) {
// Ensure the submit button exists before adding the event listener
submit.addEventListener("click", () => {
  window.location.href = `mailto:${recipientEmail}?subject=Form Submission`;
});

}

const hamMenu = document.querySelector('.ham-menu');
const navBar = document.querySelector('.navbar');
if (hamMenu) {
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  navBar.classList.toggle('active');
});
}
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element-to-animate');
    const texts = document.querySelectorAll('.text-to-animate');

    // ✅ Element Observer: Handles animations for elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('not-visible');
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(el => observer.observe(el));

    // ✅ Text Observer: Handles animations for text elements
    if (texts.length > 0) {
        const textObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('not-visible');
                } else {
                    entry.target.classList.add('not-visible');
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.5 });

        texts.forEach(el => textObserver.observe(el));
    }
});

// ✅ Fixed navbar scroll function with safety check
window.onscroll = function () {
    if (typeof myFunction === 'function') {
        myFunction();
    }
};
var navbar = document.querySelector('.navbar');

if (navbar) {
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}
}
