// Simulated blog data
const blogPosts = [
    {
      title: "Blog Post 1",
      description: "This is the first blog post.",
      image: "images/blog1.jpg",
    },
    {
      title: "Blog Post 2",
      description: "This is the second blog post.",
      image: "images/blog2.jpg",
    },
  ];
  
  // Function to display blog posts
  function displayBlogPosts() {
    const blogPostsContainer = document.getElementById("blog-posts");
    blogPostsContainer.innerHTML = ""; // Clear existing content
  
    blogPosts.forEach((post) => {
      const article = document.createElement("article");
      article.innerHTML = `
        <h3>${post.title}</h3>
        <img src="${post.image}" alt="${post.title}">
        <p>${post.description}</p>
      `;
      blogPostsContainer.appendChild(article);
    });
  }
  
  // Display blog posts when the page loads
  window.onload = displayBlogPosts;