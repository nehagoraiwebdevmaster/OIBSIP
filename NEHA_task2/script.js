// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Typing Effect
const typingText = document.querySelector(".typing");

const texts = [
  "Frontend Developer",
  "Creative Designer",
  "Future Full Stack Engineer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {

  currentText = texts[index];

  if (!isDeleting) {
    typingText.textContent =
      currentText.substring(0, charIndex++);

    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {

    typingText.textContent =
      currentText.substring(0, charIndex--);

    if (charIndex < 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

function revealSections() {

  reveals.forEach((section) => {

    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealSections);

// Skills Animation
const progressBars = document.querySelectorAll(".progress-bar span");

function animateSkills() {

  progressBars.forEach((bar) => {

    const position = bar.getBoundingClientRect().top;

    if (position < window.innerHeight) {
      bar.style.width = bar.dataset.width;
    }

  });

}

window.addEventListener("scroll", animateSkills);

// Scroll Top Button
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }

});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeToggle.innerHTML =
      '<i class="fa-solid fa-sun"></i>';
  } else {
    themeToggle.innerHTML =
      '<i class="fa-solid fa-moon"></i>';
  }

});

// Cursor Glow
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});

// Contact Form
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Message Sent Successfully!");

  form.reset();

});