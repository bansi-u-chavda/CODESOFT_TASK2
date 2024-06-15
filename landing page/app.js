// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();


// JavaScript code to handle theme switching and animations
const toggleBtn = document.querySelector('.toggle-btn');
const body = document.querySelector('body');
const moonIcon = document.querySelector('.toggle-btn .fa-moon');
const sunIcon = document.querySelector('.toggle-btn .fa-sun');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  moonIcon.classList.toggle('active');
  sunIcon.classList.toggle('active');

  if (body.classList.contains('dark')) {
    body.style.color = '#f8f9fa';
  } else {
    body.style.color = '#333';
  }
});
