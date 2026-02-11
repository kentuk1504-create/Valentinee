function goToGallery() {
    window.location.href = 'gallery.html';
}

// Gallery functionality
let currentSlide = 0;
const slides = [];

function initGallery() {
    const slidesContainer = document.querySelectorAll('.slide');
    slidesContainer.forEach((slide, index) => {
        slides.push(slide);
    });
    
    if (slides.length > 0) {
        showSlide(0);
    }
}

function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Add active class to current slide
    if (slides.length > 0) {
        slides[index].classList.add('active');
        currentSlide = index;
        updateCounter();
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

function updateCounter() {
    const counter = document.querySelector('.slide-counter');
    if (counter) {
        counter.textContent = `${currentSlide + 1} / ${slides.length}`;
    }
}

// PDF Download functionality
function downloadAsPDF() {
    const element = document.querySelector('.gallery-container');
    const opt = {
        margin: 5,
        filename: 'Happy-Valentine.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };
    
    // Using html2pdf library
    if (typeof html2pdf !== 'undefined') {
        html2pdf().set(opt).from(element).save();
    } else {
        alert('Library sedang dimuat, silakan coba lagi dalam beberapa detik');
        loadHtml2pdf();
    }
}

function loadHtml2pdf() {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    document.head.appendChild(script);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadHtml2pdf();
    initGallery();
});