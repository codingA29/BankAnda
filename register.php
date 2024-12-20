<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - Bankanda</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="register-container">
        <img src="LOGO.jpg" alt="Logo Bankanda" class="logo">
        <h2>Daftar</h2>

        <form onsubmit="return register()">
            <input type="text" id="name" placeholder="Nama" required>
            <input type="email" id="regEmail" placeholder="Email" required>
            <input type="password" id="regPassword" placeholder="Password" required>
            <input type="password" id="confirmPassword" placeholder="Re-Password" required>
            <button type="submit">Registrasi</button>
        </form>

        <p>Sudah punya akun? <a href="login.php">Log In</a></p>
    </div>

    <script src="script.js"></script>
</body>
</html>
