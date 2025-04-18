// JavaScript for FAQ Toggle
document.querySelectorAll('.faq-item h3').forEach(item => {
  item.addEventListener('click', () => {
      const content = item.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// JavaScript for Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Here you can add your form submission logic (e.g., send data to server)
  alert(`Pesan terkirim!\nNama: ${name}\nEmail: ${email}\nPesan: ${message}`);

  // Reset the form
  this.reset();
});