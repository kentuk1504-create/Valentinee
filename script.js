// ======================================================
// INDEX.HTML - HALAMAN JANTUNG
// ======================================================
function goGallery() {
  window.location.href = "gallery.html"; // pastikan nama file benar
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

// ======================================================
// SLIDER GALLERY.HTML
// ======================================================
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

// ======================================================
// DOWNLOAD PDF (pakai jsPDF)
// ======================================================
function downloadAsPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Ambil elemen gallery-content
  const galleryContent = document.getElementById("gallery-content");

  doc.html(galleryContent, {
    callback: function (doc) {
      doc.save("Valentine.pdf");
    },
    x: 10,
    y: 10,
    width: 190, // lebarnya di PDF
    windowWidth: galleryContent.scrollWidth
  });
}
