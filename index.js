
//1
const bouton = document.getElementById('monBouton');
const paragraphe = document.getElementById('monParagraphe');

// Ajouter un écouteur d'événement sur le bouton
bouton.addEventListener('click', function() {
    // Changer le texte du paragraphe
    paragraphe.textContent = "Le texte a été changé après le clic !";
});

//2
let compteur = 0;
  const bouton1 = document.getElementById("compteur");
  const affichage = document.getElementById("affichage");
  
  bouton1.addEventListener("click", function () {
      // Incrémenter le compteur
      compteur++; 
      affichage.innerHTML = compteur;
  });



//3
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

//4

      // Récupération des boutons par leur ID
      const boutonRouge = document.getElementById("rouge");
      const boutonBleu = document.getElementById("bleu");
      const boutonVert = document.getElementById("vert");
  
      // Écouteur d'événement pour changer la couleur de fond en rouge
      boutonRouge.addEventListener("click", function () {
        document.body.style.backgroundColor = "red";
      });
  
      // Écouteur d'événement pour changer la couleur de fond en bleu
      boutonBleu.addEventListener("click", function () {
        document.body.style.backgroundColor = "blue"; 
      });
  
      // Écouteur d'événement pour changer la couleur de fond en vert
      boutonVert.addEventListener("click", function () {
        document.body.style.backgroundColor = "green"; 
      });