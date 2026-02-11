document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const messageDiv = document.getElementById('message');

  // Pesan login
  messageDiv.innerHTML = '<div class="success-message">Login berhasil! ❤️</div>';

  // Langsung redirect ke gallery
  setTimeout(() => {
    window.location.href = 'gallery.html';
  }, 1000);
});

function goToSignup() {
  alert('Fitur signup akan segera tersedia!');
}

// Klik tombol Valentine
function showValentine() {
  alert("Happy Valentine Cantikku 🤍 Aku sayang kamu 💕");
}

// Klik jantung
const heart = document.querySelector('.heart-container');
if (heart) {
  heart.style.cursor = 'pointer';
  heart.addEventListener('click', function() {
    alert('Klik hati untuk kejutan! 💕');
  });
}
