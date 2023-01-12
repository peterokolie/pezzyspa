// Menu open close
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};
// swiper
var swiper = new Swiper(".services-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 50000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev", 
  },
});

lightGallery(document.querySelector('.gallery .lightbox'));
//Header
let header = document.querySelector("header");
 
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

// loader
onload = () => {
  const load = document.getElementById("loader")

  setTimeout(() => {
    load.style.display = "none";
  }, 1500);
};
