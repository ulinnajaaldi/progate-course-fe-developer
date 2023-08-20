// Navbar
const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("show");
  hamburger.classList.toggle("show");
});

// Slider
let slideIndex = 0;

const updateSlide = (n) => {
  slideIndex += n;
  showSlide(slideIndex);
};

const showSlide = (n) => {
  const slides = document.getElementsByClassName("slide-item");
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "flex";
};

showSlide(slideIndex);

//Modal
const openModal = (title, imageSrc, caption) => {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalCaption = document.getElementById("modal-caption");

  modal.style.display = "block";
  modalTitle.textContent = title;
  modalImage.src = imageSrc;
  modalCaption.textContent = caption;
};

const closeModal = () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
};

// Form Validation
const form = document.getElementById("form");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value === "") {
    alert("Email is required");
    email.focus();
    return false;
  } else if (message.value === "") {
    alert("Message is required");
    message.focus();
    return false;
  }

  alert("Message sent! Thank you for contacting us.");

  email.value = "";
  message.value = "";
});

const accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    const panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
