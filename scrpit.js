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

// Dynamic bubbles creation
document.addEventListener('DOMContentLoaded', function() {
  const bubblesContainer = document.querySelector('.bubbles');
  
  // Create more bubbles dynamically
  for (let i = 0; i < 15; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Random properties
    const size = Math.random() * 60 + 20;
    const left = Math.random() * 100;
    const duration = Math.random() * 15 + 5;
    const delay = Math.random() * 5;
    
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.animationDelay = `${delay}s`;
    bubble.style.opacity = Math.random() * 0.5 + 0.1;
    
    bubblesContainer.appendChild(bubble);
  }
});
// 3D Illustrations
function init3DIllustrations() {
  // Hero section 3D illustration
  createFloatingPlanet('hero-illustration', 0x3498db, 0x2c3e50);
  
  // About section 3D illustration
  createBookIllustration('about-illustration');
  
  // Contact section 3D illustration
  createMessageIllustration('contact-illustration');
  
  // Solar System Project enhancement
  enhanceSolarSystemProject();
}

function createFloatingPlanet(id, color1, color2) {
  const container = document.createElement('div');
  container.id = id;
  container.className = 'floating-illustration';
  document.body.appendChild(container);
  
  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(150, 150);
  container.appendChild(renderer.domElement);
  
  // Create planet
  const geometry = new THREE.SphereGeometry(2, 32, 32);
  const material = new THREE.MeshPhongMaterial({
    color: color1,
    specular: color2,
    shininess: 30,
    flatShading: true
  });
  const planet = new THREE.Mesh(geometry, material);
  scene.add(planet);
  
  // Add lights
  const light1 = new THREE.DirectionalLight(0xffffff, 1);
  light1.position.set(1, 1, 1);
  scene.add(light1);
  
  const light2 = new THREE.AmbientLight(0x404040);
  scene.add(light2);
  
  // Add rings for Saturn-like effect
  const ringGeometry = new THREE.RingGeometry(2.5, 3.5, 32);
  const ringMaterial = new THREE.MeshBasicMaterial({ 
    color: color2, 
    side: THREE.DoubleSide 
  });
  const ring = new THREE.Mesh(ringGeometry, ringMaterial);
  ring.rotation.x = Math.PI / 2;
  scene.add(ring);
  
  camera.position.z = 5;
  
  // Animation
  function animate() {
    requestAnimationFrame(animate);
    planet.rotation.y += 0.01;
    ring.rotation.y += 0.005;
    renderer.render(scene, camera);
  }
  
  animate();
  
  // Make it float
  let floatY = 0;
  let floatDirection = 0.01;
  setInterval(() => {
    floatY += floatDirection;
    if (floatY > 10 || floatY < -10) floatDirection *= -1;
    container.style.transform = `translateY(${floatY}px)`;
  }, 50);
}

function createBookIllustration(id) {
  const container = document.createElement('div');
  container.id = id;
  container.className = 'floating-illustration';
  document.body.appendChild(container);
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(150, 150);
  container.appendChild(renderer.domElement);
  
  // Create book
  const bookGroup = new THREE.Group();
  
  // Pages
  const pageGeometry = new THREE.BoxGeometry(3, 4, 0.2);
  const pageMaterial = new THREE.MeshPhongMaterial({ 
    color: 0xf5f5f5,
    specular: 0x111111,
    shininess: 30
  });
  
  const pages = new THREE.Mesh(pageGeometry, pageMaterial);
  bookGroup.add(pages);
  
  // Cover
  const coverGeometry = new THREE.BoxGeometry(3.2, 4.2, 0.3);
  const coverMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x3498db,
    specular: 0x2c3e50,
    shininess: 50
  });
  
  const cover = new THREE.Mesh(coverGeometry, coverMaterial);
  cover.position.z = -0.25;
  bookGroup.add(cover);
  
  // Back cover
  const backCover = cover.clone();
  backCover.position.z = 0.25;
  bookGroup.add(backCover);
  
  scene.add(bookGroup);
  
  // Add lights
  const light1 = new THREE.DirectionalLight(0xffffff, 1);
  light1.position.set(1, 1, 1);
  scene.add(light1);
  
  const light2 = new THREE.AmbientLight(0x404040);
  scene.add(light2);
  
  camera.position.z = 6;
  
  // Animation - book opening
  let openProgress = 0;
  const animate = () => {
    requestAnimationFrame(animate);
    
    openProgress += 0.005;
    if (openProgress > Math.PI / 3) openProgress = 0;
    
    cover.rotation.y = openProgress;
    backCover.rotation.y = -openProgress;
    
    bookGroup.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  
  animate();
}

function createMessageIllustration(id) {
  const container = document.createElement('div');
  container.id = id;
  container.className = 'floating-illustration';
  document.body.appendChild(container);
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(150, 150);
  container.appendChild(renderer.domElement);
  
  // Create message envelope
  const envelopeGroup = new THREE.Group();
  
  // Base
  const baseGeometry = new THREE.BoxGeometry(3, 2, 0.2);
  const baseMaterial = new THREE.MeshPhongMaterial({ 
    color: 0xe74c3c,
    specular: 0xc0392b,
    shininess: 30
  });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  envelopeGroup.add(base);
  
  // Flap
  const flapGeometry = new THREE.BoxGeometry(3, 2, 0.1);
  const flapMaterial = baseMaterial.clone();
  const flap = new THREE.Mesh(flapGeometry, flapMaterial);
  flap.position.y = 1;
  flap.position.z = -0.1;
  flap.rotation.x = Math.PI / 4;
  envelopeGroup.add(flap);
  
  scene.add(envelopeGroup);
  
  // Add lights
  const light1 = new THREE.DirectionalLight(0xffffff, 1);
  light1.position.set(1, 1, 1);
  scene.add(light1);
  
  const light2 = new THREE.AmbientLight(0x404040);
  scene.add(light2);
  
  camera.position.z = 5;
  
  // Animation - envelope opening
  let flapProgress = 0;
  const flapDirection = 0.01;
  const animate = () => {
    requestAnimationFrame(animate);
    
    flapProgress += flapDirection;
    if (flapProgress > Math.PI / 4 || flapProgress < 0) flapDirection *= -1;
    
    flap.rotation.x = Math.PI / 4 + flapProgress;
    
    envelopeGroup.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  
  animate();
}

function enhanceSolarSystemProject() {
  const solarSystemCard = document.querySelector('.description-card:nth-child(4)');
  if (!solarSystemCard) return;
  
  const planetContainer = document.createElement('div');
  planetContainer.className = 'planet-container';
  solarSystemCard.insertBefore(planetContainer, solarSystemCard.querySelector('p'));
  
  // Simple solar system animation
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(200, 200);
  planetContainer.appendChild(renderer.domElement);
  
  // Sun
  const sunGeometry = new THREE.SphereGeometry(1.5, 32, 32);
  const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xFDB813 });
  const sun = new THREE.Mesh(sunGeometry, sunMaterial);
  scene.add(sun);
  
  // Earth
  const earthGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x3498db });
  const earth = new THREE.Mesh(earthGeometry, earthMaterial);
  scene.add(earth);
  
  // Moon
  const moonGeometry = new THREE.SphereGeometry(0.2, 32, 32);
  const moonMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
  const moon = new THREE.Mesh(moonGeometry, moonMaterial);
  scene.add(moon);
  
  camera.position.z = 5;
  
  // Animation
  function animate() {
    requestAnimationFrame(animate);
    
    // Rotate sun
    sun.rotation.y += 0.01;
    
    // Earth orbit
    earth.position.x = Math.sin(Date.now() * 0.001) * 3;
    earth.position.z = Math.cos(Date.now() * 0.001) * 3;
    earth.rotation.y += 0.02;
    
    // Moon orbit
    moon.position.x = earth.position.x + Math.sin(Date.now() * 0.005) * 1;
    moon.position.z = earth.position.z + Math.cos(Date.now() * 0.005) * 1;
    
    renderer.render(scene, camera);
  }
  
  animate();
}

// Initialize all 3D illustrations when DOM is loaded
document.addEventListener('DOMContentLoaded', init3DIllustrations);