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

// Récupération des éléments HTML nécessaires
  const inputTexte = document.getElementById("texteInput");
  const boutonMajuscule = document.getElementById("afficherMajuscule");
  const affichageResultat = document.getElementById("resultat");
    // Écouteur d'événement pour détecter le clic sur le bouton

  boutonMajuscule.addEventListener("click", function () {
      // Convertir le texte saisi en majuscule
    const texteMajuscule = inputTexte.value.toUpperCase();
    affichageResultat.textContent = texteMajuscule;
  });