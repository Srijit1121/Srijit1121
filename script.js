// Optimized JavaScript for personal website
(function() {
  'use strict';

  // Register Service Worker for offline support
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.warn('Service Worker registration failed:', error);
        });
    }
  }

  // Initialize functions after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    registerServiceWorker();
    setupSmoothScrolling();
    setupMobileMenu();
    setupHeaderScroll();
    setupContactForm();
    setupDynamicBlogsFromStorage();
    updateCurrentYear();
    initLazyImages();
  }

  // Smooth scrolling for anchor links
  function setupSmoothScrolling() {
    document.addEventListener('click', function(e) {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  // Mobile menu toggle
  function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMenu);
    }
  }

  function toggleMenu() {
    const headerContent = document.querySelector('.header-content');
    if (headerContent) {
      headerContent.classList.toggle('active');
    }
  }

  // Header scroll effect
  function setupHeaderScroll() {
    let scrollTimeout;
    window.addEventListener('scroll', function() {
      clearTimeout(scrollTimeout);
      const header = document.querySelector('.sticky-header');
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    }, { passive: true });
  }

  // Contact form submission with validation
  function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Remove duplicate listeners
    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);

    newForm.addEventListener('submit', handleContactSubmit);
  }

  function handleContactSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Email format validation
    if (!isValidEmail(email)) {
      alert('Please enter a valid email');
      return;
    }

    // Try EmailJS if available
    if (typeof emailjs !== 'undefined') {
      emailjs.send('service_ga6dwmd', 'template_4gj90wq', {
        name: name,
        email: email,
        message: message,
      })
        .then(() => {
          alert('Message sent successfully!');
          this.reset();
        })
        .catch((error) => {
          alert('Failed to send message. Please try again.');
          console.error('EmailJS Error:', error);
        });
    } else {
      // Fallback: show success message
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Load dynamic blogs from localStorage
  function setupDynamicBlogsFromStorage() {
    const blogPosts = document.querySelector('.blog-posts');
    if (!blogPosts) return;

    try {
      const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
      blogs.forEach(blog => {
        if (blog.title && blog.image && blog.date) {
          const article = createBlogElement(blog);
          blogPosts.appendChild(article);
        }
      });
    } catch (e) {
      console.error('Error loading blogs:', e);
    }
  }

  function createBlogElement(blog) {
    const article = document.createElement('article');
    article.classList.add('blog-post');
    
    const safeTitle = escapeHtml(blog.title);
    const safeContent = escapeHtml(blog.content || '');
    const safeDate = escapeHtml(blog.date);
    const safeImage = blog.image;

    article.innerHTML = `
      <a href="#">
        <div class="blog-image">
          <img src="${safeImage}" alt="${safeTitle}" loading="lazy">
        </div>
        <div class="blog-content">
          <h3>${safeTitle}</h3>
          <p class="date">Published on ${safeDate}</p>
          <p>${safeContent}</p>
          <button class="read-more" type="button">Read More</button>
        </div>
      </a>
    `;
    return article;
  }

  function escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }

  // Update current year in footer
  function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  // Optimize lazy image loading
  function initLazyImages() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  // Prevent layout shift for images
  window.addEventListener('load', function() {
    document.querySelectorAll('img').forEach(img => {
      if (!img.width) {
        img.style.minHeight = '200px';
      }
    });
  });
})();
