<?php
// login.php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Ici, vous pouvez ajouter une validation en PHP, 
    // ainsi qu'une vérification des informations de connexion dans la base de données.

    if ($email == "exemple@test.com" && $password == "motdepasse") {
        echo "<h3>Connexion réussie !</h3>";
    } else {
        echo "<h3>Identifiants incorrects</h3>";
    }
}
?>
