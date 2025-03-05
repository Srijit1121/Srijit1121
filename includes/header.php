<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Srijit Koirala - Personal Website</title>
    <link rel="stylesheet" href="../styles/style.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Srijit Koirala</h1>
            <nav>
                <ul>
                    <li><a href="../index.php">Home</a></li>
                    <li><a href="../about.html">About Me</a></li>
                    <li><a href="../blog.php">Blog</a></li>
                    <li><a href="../contact.html">Contact</a></li>
                    <?php if (isset($_SESSION['admin'])): ?>
                        <li><a href="../admin/dashboard.php">Dashboard</a></li>
                        <li><a href="../admin/logout.php">Logout</a></li>
                    <?php else: ?>
                        <li><a href="../admin/login.php">Admin Login</a></li>
                    <?php endif; ?>
                </ul>
            </nav>
        </div>
    </header>