document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const messageDiv = document.getElementById('message');
  
  if (!email || !password) {
    messageDiv.innerHTML = '<div class="error-message">Semua field harus diisi!</div>';
    return;
  }
  
  if (email.length < 5) {
    messageDiv.innerHTML = '<div class="error-message">Email tidak valid!</div>';
    return;
  }
  
  messageDiv.innerHTML = '<div class="success-message">Login berhasil! ❤️</div>';
  
  setTimeout(() => {
    window.location.href = 'gallery.html';
  }, 2000);
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
