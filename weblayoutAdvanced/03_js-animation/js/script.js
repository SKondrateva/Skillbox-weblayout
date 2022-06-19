console.clear();

setTimeout(()=> {
  gsap.from(".hero-reveal",
  {
    opacity: 0,
    y: 100,
    duration: 1
  });
}, 200)
setTimeout(()=> {
  gsap.to(".hero-descr-pop",
  {
    opacity: 1,
    duration: 1.5
  });
}, 1500)
setTimeout(()=> {
gsap.to(".photo-1",
{
  duration: 1,
  opacity: 1
});
}, 1700)
setTimeout(()=> {
  gsap.to(".photo-2",
  {
    opacity: 1,
    duration: 1.5
  });
}, 2300)
setTimeout(()=> {
  gsap.to(".photo-3",
  {
    opacity: 1,
    duration: 1.5
  });
}, 2500)
setTimeout(()=> {
  gsap.to(".photo-descr-pop",
  {
    opacity: 1,
    duration: 1.5
  });
}, 2500);

let burgerOpen = document.querySelector('.burger')
let close = document.querySelector('.close')

burgerOpen.addEventListener('click', () => tl.play())
close.addEventListener('click', () => tl.reverse())

let tl = gsap.timeline({
  paused: true
})

tl.fromTo(".menu", {
  display: "none",
  y: 100,
  opacity: 0
},
{
  display: "block",
  y: 0,
  opacity: 1,
  duration: 0.7,
  ease:"circle"
});

tl.from(".menu__top", {
  delay: 0.2,
  opacity: 0,
  duration: 0.5,
  ease:"circle"
},'-=0.5');

tl.from(".nav__list", {
  delay: 0.3,
  opacity: 0,
  y: -25,
  duration: 0.5,
  ease:"circle"
},'-=0.5');

tl.from(".social, .menu__right, .sub-menu", {
  delay: 0.4,
  opacity: 0,
  y: 25,
  duration: 0.5,
  ease:"circle"
},'-=0.2');

