<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $prenom = trim($_POST["prenom"]);
    $nom = trim($_POST["nom"]);
    $email = trim($_POST["email"]);
    $sujet = trim($_POST["sujet"]);
    $message = trim($_POST["message"]);

    $errors = [];

    // Validation côté serveur
    if (strlen($prenom) < 2 || strlen($prenom) > 15) {
        $errors['prenom'] = "Le prénom doit contenir entre 2 et 15 caractères.";
    }
    if (strlen($nom) < 2 || strlen($nom) > 15) {
        $errors['nom'] = "Le nom doit contenir entre 2 et 15 caractères.";
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = "Adresse email invalide.";
    }
    if (strlen($sujet) < 5) {
        $errors['sujet'] = "Le sujet doit contenir au moins 5 caractères.";
    }
    if (strlen($message) < 10) {
        $errors['message'] = "Le message doit contenir au moins 10 caractères.";
    }

    if (empty($errors)) {
        // Envoi de l'email ou traitement des données
        echo "Votre message a été envoyé avec succès !";
    } else {
        // Affichage des erreurs
        foreach ($errors as $error) {
            echo "<p style='color: red;'>$error</p>";
        }
    }
}
?>
