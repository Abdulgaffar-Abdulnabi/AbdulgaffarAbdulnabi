<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hoşgeldiniz</title>
</head>
<body>
    <h2>Hoşgeldiniz</h2>
    <?php
    // Kullanıcı adını al
    $username = $_GET['user'];
    echo "<p>Hoşgeldiniz $username.</p>";
    ?>
</body>
</html>