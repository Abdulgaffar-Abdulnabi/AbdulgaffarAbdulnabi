<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Sayfası</title>
</head>
<body>
    <h2>Login Sayfası</h2>
    <?php
    // Post edilen verileri kontrol et
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Kullanıcı adı ve şifre al
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Boş geçilen alanları kontrol et
        if (empty($username) || empty($password)) {
            echo "<p>Lütfen kullanıcı adı ve şifreyi giriniz.</p>";
        } else {
            // Kullanıcı adının mail adresi olup olmadığını kontrol et
            if (!filter_var($username, FILTER_VALIDATE_EMAIL)) {
                echo "<p>Kullanıcı adı geçerli bir mail adresi değil.</p>";
            } else {
                // Kullanıcı adından sadece numarayı al
                $student_number = explode('@', $username)[0];
                
                // Şifre kontrolü (şifre, kullanıcı adının numarası olmalı)
                if ($password !== $student_number) {
                    echo "<p>Şifre yanlış.</p>";
                } else {
                    // Login işlemi başarılı
                    echo "<p>Hoşgeldiniz $student_number.</p>";
                    // İşlem tamamlandıktan sonra başka bir sayfaya yönlendirme yapılabilir
                    // header("Location: welcome.php");
                }
            }
        }
    }
    ?>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <label for="username">Kullanıcı Adı (Öğrenci Numarası):</label><br>
        <input type="text" id="username" name="username" required><br><br>
        <label for="password">Şifre:</label><br>
        <input type="password" id="password" name="password" required><br><br>
        <button type="submit">Giriş Yap</button>
    </form>
</body>
</html>