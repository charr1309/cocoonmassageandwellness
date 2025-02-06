

gsap.registerPlugin(ScrollTrigger);

gsap.matchMedia({
  
"(min-width: 800px)": function() {
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
const tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: '.wisdomMain-content',
    start: 'top 70%',
    end: 'bottom 50%',
    toggleActions: 'play reverse play restart'
    // scrub: 1
    
  }
})
tl6.from(".part2 .section-left", {
  autoAlpha: 0,
  x: 200,
  duration: 1
})
tl6.from(".part2 .section-right", {
  autoAlpha: 0,
  x: 200,
  duration: 1
})
const tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: '.wisdomMain2-content',
    start: 'top 70%',
    end: 'bottom 50%',
    toggleActions: 'play reverse play restart'
    // scrub: 1
    
  }
})
tl7.from(".part3 .section-left", {
  autoAlpha: 0,
  x: 200,
  duration: 1
})
tl7.from(".part3 .section-right", {
  autoAlpha: 0,
  x: 200,
  duration: 1
})
const tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: '.wisdomMain3-content',
    start: 'top 70%',
    end: 'bottom 50%',
    toggleActions: 'play reverse play restart'
  }
})
tl8.from(".part4 .section-left", {
  autoAlpha: 0,
  x: 200,
  duration: 1
})
tl8.from(".part4 .section-right", {
  autoAlpha: 0,
  x: 200,
  duration: 1
})
const tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: '.top',
    start: 'top 70%',
    end: 'bottom 50%',
    // toggleActions: 'play reverse play restart'
  }
})
tl9.from(".right-side", {
  autoAlpha: 0,
  x: 200,
  duration: 1
})
tl9.from(".left-side", {
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
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.clientLove',
    start: 'top 20%',
    end: 'bottom center',
    toggleActions: 'play reverse restart pause'
  },
  defaults: {
    ease: "power3.out",
    duration: 1
  }
})
const scrubTL = gsap.timeline({
  scrollTrigger: {
    trigger: '.clientLove',
    start: 'top 20%',
    end: '40% top',
    scrub: 3
  }
})
tl4.from(".clientLove p", {
  yPercent: 190,
  opacity: 0
})

scrubTL.from('.clientLove h3', {
  x: 0,
  yPercent: 0
}, "<")
}
},


"(max-width: 768px)": function() { 

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
  const tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: '.wisdomMain-content',
      start: 'top 70%',
      end: 'bottom 50%',
      toggleActions: 'play reverse play restart'
      // scrub: 1
      
    }
  })
  tl6.from(".part2 .section-left", {
    autoAlpha: 0,
    x: 200,
    duration: 1
  })
  tl6.from(".part2 .section-right", {
    autoAlpha: 0,
    x: 200,
    duration: 1
  })
  const tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: '.wisdomMain2-content',
      start: 'top 70%',
      end: 'bottom 50%',
      toggleActions: 'play reverse play restart'
      // scrub: 1
      
    }
  })
  tl7.from(".part3 .section-left", {
    autoAlpha: 0,
    x: 200,
    duration: 1
  })
  tl7.from(".part3 .section-right", {
    autoAlpha: 0,
    x: 200,
    duration: 1
  })
  const tl8 = gsap.timeline({
    scrollTrigger: {
      trigger: '.wisdomMain3-content',
      start: 'top 70%',
      end: 'bottom 50%',
      toggleActions: 'play reverse play restart'
    }
  })
  tl8.from(".part4 .section-left", {
    autoAlpha: 0,
    x: 200,
    duration: 1
  })
  tl8.from(".part4 .section-right", {
    autoAlpha: 0,
    x: 200,
    duration: 1
  })
  const tl9 = gsap.timeline({
    scrollTrigger: {
      trigger: '.top',
      start: 'top 70%',
      end: 'bottom 50%',
      // toggleActions: 'play reverse play restart'
    }
  })
  tl9.from(".right-side", {
    autoAlpha: 0,
    x: 200,
    duration: 1
  })
  tl9.from(".left-side", {
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
  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: '.clientLove',
      start: 'top 20%',
      end: 'bottom center',
      toggleActions: 'play reverse restart pause'
    },
    defaults: {
      ease: "power3.out",
      duration: 1
    }
  })
  var scrubTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.clientLove',
      start: 'top 20%',
      end: '40% top',
      scrub: 3
    }
  })
  tl4.from(".clientLove p", {
    yPercent: 190,
    opacity: 0
  })
  
  scrubTL.from('.clientLove h3', {
    x: 0,
    yPercent: 0
  }, "<")
  var scrubTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.clientLove',
      start: 'top 20%',
      end: '40% top',
      scrub: 3
    }
  })
  tl4.from(".clientLove p", {
    yPercent: 190,
    opacity: 0
  })
  
  scrubTL.from('.clientLove h3', {
    x: 0,
    yPercent: 0
  }, "<")
}
});

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

// const tl10 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.gsap1',
//     start: 'top 70%',
//     end: 'bottom 50%',
//     // toggleActions: 'play reverse play restart'
//   }
// })
// tl10.from(".right-side", {
//   autoAlpha: 0,
//   x: 200,
//   duration: 1
// })
// tl10.from(".left-side", {
//   autoAlpha: 0,
//   x: 200,
//   duration: 1
// })
// const tl11 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.part3',
//     start: 'top 70%',
//     end: 'bottom 50%',
//     // toggleActions: 'play reverse play restart'
//   }
// })
// tl11.from(".right-side", {
//   autoAlpha: 0,
//   x: 200,
//   duration: 1
// })
// tl11.from(".left-side", {
//   autoAlpha: 0,
//   y: 200,
//   duration: 1
// })
// const tl12 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.part4',
//     start: 'top 70%',
//     end: 'bottom 50%',
//     // toggleActions: 'play reverse play restart'
//   }
// })
// tl12.from(".right-side", {
//   autoAlpha: 0,
//   x: 200,
//   duration: 1
// })
// tl12.from(".left-side", {
//   autoAlpha: 0,
//   y: 200,
//   duration: 1
// })
// const lenis = new Lenis()

// function raf(time){
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }