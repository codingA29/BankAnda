<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Bankanda</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="login-container">
        <img src="LOGO.jpg" alt="Logo Bankanda" class="logo">
        <h2>BANKANDA <br><span>Since 2024</span></h2>

        <input type="email" id="email" placeholder="Email" required>
        <input type="password" id="password" placeholder="Password" required>

        <button onclick="login()">Login</button>
        <a href="register.php">Create Account or Password</a>
    </div>

    <script src="script.js"></script>
</body>
</html>