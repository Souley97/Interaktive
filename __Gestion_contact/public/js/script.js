document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = validateForm();
    if (valid) {
        this.submit();
    }
});

// Fonction pour valider le formulaire globalement avant l'envoi
function validateForm() {
    let isValid = true;
    if (!validatePrenom()) isValid = false;
    if (!validateNom()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validateSujet()) isValid = false;
    if (!validateMessage()) isValid = false;
    return isValid;
}

// Validation du prénom
function validatePrenom() {
    const prenom = document.getElementById('prenom').value.trim();
    const prenomError = document.getElementById('prenomError');
    if (prenom.length < 2 || prenom.length > 15) {
        prenomError.textContent = "Le prénom doit contenir entre 2 et 15 caractères.";
        return false;
    } else {
        prenomError.textContent = "";
        return true;
    }
}

// Validation du nom
function validateNom() {
    const nom = document.getElementById('nom').value.trim();
    const nomError = document.getElementById('nomError');
    if (nom.length < 2 || nom.length > 15) {
        nomError.textContent = "Le nom doit contenir entre 2 et 15 caractères.";
        return false;
    } else {
        nomError.textContent = "";
        return true;
    }
}

// Validation de l'email
function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Veuillez entrer un email valide.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

// Validation du sujet
function validateSujet() {
    const sujet = document.getElementById('sujet').value.trim();
    const sujetError = document.getElementById('sujetError');
    if (sujet.length < 5) {
        sujetError.textContent = "Le sujet doit contenir au moins 5 caractères.";
        return false;
    } else {
        sujetError.textContent = "";
        return true;
    }
}

// Validation du message
function validateMessage() {
    const message = document.getElementById('message').value.trim();
    const messageError = document.getElementById('messageError');
    if (message.length < 10) {
        messageError.textContent = "Le message doit contenir au moins 10 caractères.";
        return false;
    } else {
        messageError.textContent = "";
        return true;
    }
}
