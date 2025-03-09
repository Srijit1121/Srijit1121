document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Hardcoded credentials (for demo purposes only)
    const adminUsername = 'ksrijit21@gmail.com';
    const adminPassword = 'whysoserious';
  
    if (username === adminUsername && password === adminPassword) {
      localStorage.setItem('isLoggedIn', 'true'); // Store login state
      window.location.href = 'admin.html'; // Redirect to admin dashboard
    } else {
      alert('Invalid username or password');
    }
  });

  document.getElementById('logout-button').addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
  });