//menu
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;

burger.setAttribute("aria-expanded", isBurgerOpen());

burger?.addEventListener('click', () => {
  burger.setAttribute("aria-expanded", !isBurgerOpen());
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger-active');
  nav?.classList.toggle('nav-header-visible');
});

function isBurgerOpen() {
  return burger.classList.contains("burger-active")
}


navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
  burger?.classList.remove('burger-active');
  nav?.classList.remove('nav-header-visible');
  })
})

//search
const searchOpen = document.querySelector('.search-button');
const search =  document.querySelector('.search');
const searchClose = document.querySelector('.search__close');

searchOpen.addEventListener('click', () => {
  search.classList.add('search--open');
});

searchClose.addEventListener('click', () => {
  search.classList.remove('search--open');
});

//slider
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  a11y: {
    paginationBulletMessage: 'Переключение на cлайд {{index}}'
  }
});

//how we work
document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('tabs__btn').forEach(function(btn) {
      btn.classList.remove('tabs__btn--active')
    });
      e.currentTarget.classList.add('tabs__btn--active');

      document.querySelectorAll('.how-we-work__tab-item').forEach(function(tabContent) {
        tabContent.classList.remove('how-we-work__tab-item--active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__tab-item--active');
  });
});

const tabs_list = document.querySelector('.how-we-work__steps');

const tabs_btns = document.querySelectorAll('.tabs__btn')

tabs_list.addEventListener('click', function onClick(event) {
  tabs_btns.forEach(tab => tab.style.color = "#333333");
  event.target.style.color = '#E1670E';
});

function firstStep() {
  document.getElementById('workImage')
  .src="img/Rectangle18.jpg";
}

function secondStep() {
  document.getElementById('workImage')
  .src="img/Rectangle21.jpg";
}

function thirdStep() {
  document.getElementById('workImage')
  .src="img/Rectangle19.jpg";
}

function fourthStep() {
  document.getElementById('workImage')
  .src="img/Rectangle20.jpg";
}

//FAQ
$( function() {
  $( ".faq__list" ).accordion({
     icons: false,
     heightStyle: "content",
     collapsible: true,
     active: false
   });
 } );






