
gsap.registerPlugin(ScrollTrigger);

const tla = gsap.timeline({
  scrollTrigger: {
    trigger: '.offerings',
    start: 'top 70%',
    end: 'bottom ',
    toggleActions: 'play none play none'
    // scrub: 1
    // markers: true
  }
})

tla.from(".offerings-header h2", {
  autoAlpha: 0,
  x: 200,
  duration: 1

})
tla.from(".diana", {
  autoAlpha: 0,
  x: 200,
  duration: 1

})

const tlb = gsap.timeline({
  scrollTrigger: {
    trigger: '.offerings',
    start: 'top 70%',
    end: 'bottom ',
    toggleActions: 'play none play none'
    // scrub: 1
    // markers: true
  }
})


const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.offerContainer',
    start: 'top 70%',
    end: 'bottom ',
    toggleActions: 'play none play none'
    // scrub: 1
    // markers: true
  }
})

tl.from(".pregnant", {
  autoAlpha: 0,
  x: 200,
  duration: 1
})
tl.from(".offerContainer p", {
  autoAlpha: 0,
  x: 200,
  duration: 1
})
tl.from(".addOnContainer p", {
  autoAlpha: 0,
  x: 200,
  duration: 1
})

tl.from(".fade", {
  autoAlpha: 0,
  y: 200,
  duration: 1
})
tl.from(".listPosition", {
  autoAlpha: 0,
  y: 200,
  duration: 1
})


const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.inspiration',
    start: 'top 70%',
    end: 'bottom bottom',
    toggleActions: 'play none none none'
    // markers: true
  }
})


tl2.from(".innerText", {
  autoAlpha: 0,
  y: 200,
  duration: 1,
  // delay: 0.2
});

tl2.from(".wrap", {
  autoAlpha: 0,
  x: 200,
  duration: 1
})
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.contact',
    start: 'top 70%',
    end: 'bottom bottom',
    toggleActions: 'play none none none'
    // markers: true
  }
})
tl3.from(".rounded-input", {
  autoAlpha: 0,
  y: 200,
  duration: 1
})

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

const anims = document.querySelectorAll('.anim');
const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px"
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    }
    console.log(entry);
    entry.target.classList.add("loaded");

  });
}, options);

anims.forEach(anim => {
  observer.observe(anim);

})

window.onscroll = function () {
  myFunction()
};
var navbar = document.querySelector('.navbar');


var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}

