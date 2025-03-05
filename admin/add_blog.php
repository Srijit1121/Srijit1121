<?php
session_start();
if (!isset($_SESSION['admin'])) {
    header('Location: login.php');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    include '../includes/db.php';
    $title = $_POST['title'];
    $content = $_POST['content'];
    $image = $_FILES['image'];

    $target_dir = "../uploads/";
    $target_file = $target_dir . basename($image['name']);
    move_uploaded_file($image['tmp_name'], $target_file);

    $sql = "INSERT INTO blogs (title, content, image_path) VALUES ('$title', '$content', '$target_file')";
    if ($conn->query($sql)) {
        echo "Blog added successfully!";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Add Blog</title>
</head>
<body>
    <h1>Add New Blog</h1>
    <form method="POST" enctype="multipart/form-data">
        <input type="text" name="title" placeholder="Title" required>
        <textarea name="content" placeholder="Content" required></textarea>
        <input type="file" name="image" required>
        <button type="submit">Add Blog</button>
    </form>
</body>
</html>