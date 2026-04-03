// JavaScript code for scroll functionality

// Scroll to top functionality
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  var mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// WhatsApp form submission functionality
function submitWhatsAppForm() {
  const form = document.getElementById('whatsAppForm');
  const formData = new FormData(form);

  // Replace URL with your WhatsApp API endpoint
  fetch('YOUR_WHATSAPP_API_URL', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

// Smooth navigation functionality
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Page load animations
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});
