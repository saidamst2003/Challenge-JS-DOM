const bouton = document.getElementById('monBouton');
const paragraphe = document.getElementById('monParagraphe');

// Ajouter un écouteur d'événement sur le bouton
bouton.addEventListener('click', function() {
    // Changer le texte du paragraphe
    paragraphe.textContent = "Le texte a été changé après le clic !";
});