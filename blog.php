<?php include 'includes/db.php'; ?>
<?php include 'includes/header.php'; ?>

<section id="blog">
    <h2>Blog</h2>
    <?php
    $sql = "SELECT * FROM blogs ORDER BY created_at DESC";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<div class='blog-post'>";
            echo "<h3>" . $row['title'] . "</h3>";
            echo "<img src='" . $row['image_path'] . "' alt='Blog Image'>";
            echo "<p>" . $row['content'] . "</p>";
            echo "<small>Posted on: " . $row['created_at'] . "</small>";
            echo "</div>";
        }
    } else {
        echo "<p>No blog posts found.</p>";
    }
    ?>
</section>

<?php include 'includes/footer.php'; ?>