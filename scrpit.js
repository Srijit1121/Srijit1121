// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Contact form submission
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message!');
    this.reset();
  });