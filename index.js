const bouton = document.getElementById('monBouton');
const paragraphe = document.getElementById('monParagraphe');

// Ajouter un écouteur d'événement sur le bouton
bouton.addEventListener('click', function() {
    // Changer le texte du paragraphe
    paragraphe.textContent = "Le texte a été changé après le clic !";
});

let compteur = 0;
  const bouton1 = document.getElementById("compteur");
  const affichage = document.getElementById("affichage");
  
  bouton1.addEventListener("click", function () {
      // Incrémenter le compteur
      compteur++; 
      affichage.innerHTML = compteur;
  });