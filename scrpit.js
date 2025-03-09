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

  function toggleMenu() {
    const headerContent = document.querySelector('.header-content');
    headerContent.classList.toggle('active');
  }
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.sticky-header');
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // In your main page's JavaScript file
document.addEventListener('DOMContentLoaded', () => {
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  const blogPosts = document.querySelector('.blog-posts');

  blogs.forEach(blog => {
    const blogPost = document.createElement('article');
    blogPost.classList.add('blog-post');
    blogPost.innerHTML = `
      <a href="#">
        <div class="blog-image">
          <img src="${blog.image}" alt="${blog.title}">
        </div>
        <div class="blog-content">
          <h3>${blog.title}</h3>
          <p class="date">Published on ${blog.date}</p>
          <p>${blog.content}</p>
          <button class="read-more">Read More</button>
        </div>
      </a>
    `;
    blogPosts.appendChild(blogPost);
  });
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Send email using EmailJS
  emailjs.send('service_ga6dwmd', 'template_4gj90wq', {
    name: name,
    email: email,
    message: message,
  })
    .then(
      (response) => {
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset(); // Reset the form
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.error('Error:', error);
      }
    );
});