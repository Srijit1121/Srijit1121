const planets = document.querySelectorAll('.planet');
const sun = document.querySelector('.sun');
const planetInfo = document.getElementById('planet-info');

// Randomize planet animation delays
planets.forEach(planet => {
  const orbitDuration = parseFloat(window.getComputedStyle(planet).animationDuration) * 1000; // in milliseconds
  const randomDelay = -(Math.random() * orbitDuration); // Random negative delay
  planet.style.animationDelay = `${randomDelay}ms`;
});

// Add hover effect for planets
planets.forEach(planet => {
  planet.addEventListener('mouseenter', () => {
    const name = planet.getAttribute('data-name');
    const description = planet.getAttribute('data-description');
    planetInfo.innerHTML = `<strong>${name}</strong><br>${description}`;
    planetInfo.classList.add('visible');
  });

  planet.addEventListener('mouseleave', () => {
    planetInfo.classList.remove('visible');
  });
});

// Add hover effect for the Sun
sun.addEventListener('mouseenter', () => {
  const name = sun.getAttribute('data-name');
  const description = sun.getAttribute('data-description');
  planetInfo.innerHTML = `<strong>${name}</strong><br>${description}`;
  planetInfo.classList.add('visible');
});

sun.addEventListener('mouseleave', () => {
  planetInfo.classList.remove('visible');
});

