/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link'),
  navMenu = document.getElementById('nav-menu');

function linkAction() {
  /*Remove menu mobile*/
  navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// Lazy Loading
const lazyImgs = document.querySelectorAll('img[data-src]');
// const labelAll = document.querySelectorAll('product_label_shipping');
function preloadImg(img) {
  const src = img.getAttribute('data-src');
  if (!src) {
    return;
  }
  img.src = src;
}
const imgOptions = {
  threshold: 1,
  rootMargin: '0px 0px -300px 0px',
};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImg(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

lazyImgs.forEach((img) => {
  imgObserver.observe(img);
});

// Implementation of responsive slider on product items

$slickVar = false;
function slickSlider() {
  if ($(window).width() < 767) {
    if (!$slickVar) {
      $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        waitForAnimate: true,
      });
      $slickVar = true;
    }
  } else if ($(window).width() > 768) {
    if ($slickVar) {
      $('.slickSlider').slick('unslick');
      $slickVar = false;
    }
  }
}

$(document).ready(function () {
  slickSlider();
});
$(window).on('resize', function () {
  slickSlider();
});
