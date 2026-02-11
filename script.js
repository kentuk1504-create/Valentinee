// ========================
// LOGIN PAGE
// ========================
function goGallery() {
  window.location.href = "gallery.html";
}

// Klik jantung kasih pesan
document.addEventListener("DOMContentLoaded", function () {
  const heart = document.querySelector(".heart-container");
  if (heart) {
    heart.style.cursor = "pointer";
    heart.addEventListener("click", function () {
      alert("Happy Valentine Cantikku 🤍 Aku sayang kamu 💕");
    });
  }
});

// ========================
// GALLERY SLIDER
// ========================
let currentSlide = 0;
let slides;
let counter;

document.addEventListener("DOMContentLoaded", function () {
  slides = document.querySelectorAll(".slide");
  counter = document.querySelector(".slide-counter");
  if (slides.length > 0) {
    showSlide(currentSlide);
  }
});

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  if (counter) {
    counter.textContent = (index + 1) + " / " + slides.length;
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// ========================
// DOWNLOAD PDF (basic)
// ========================
function downloadAsPDF() {
  const element = document.createElement('a');
  const content = document.querySelector('.gallery-container').innerText;
  const blob = new Blob([content], {type: 'text/plain'});
  element.href = URL.createObjectURL(blob);
  element.download = "Valentine_Message.txt";
  element.click();
}
