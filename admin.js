// Check if user is logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html'; // Redirect to login if not logged in
  }
  
  // Logout button functionality
  document.getElementById('logout-button').addEventListener('click', function () {
    // Clear the login state from localStorage
    localStorage.removeItem('isLoggedIn');
  
    // Redirect to the homepage (index.html)
    window.location.href = 'index.html';
  });
  
  // Add blog functionality
  document.getElementById('add-blog-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const title = document.getElementById('blog-title').value;
    const content = document.getElementById('blog-content').value;
    const image = document.getElementById('blog-image').value;
  
    // Save blog data to localStorage
    const blog = {
      title,
      content,
      image,
      date: new Date().toLocaleDateString(),
    };
  
    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
  
    alert('Blog added successfully!');
    this.reset();
  });