//selectionner les differentes zones de texte du formulaire
const cc1 = document.getElementById("note1");
const cc2 = document.getElementById("note2");
const presence = document.getElementById("presence");
const td = document.getElementById("td");
const moyenne = document.getElementById("moyenne");

//  selectionner les bouton pour les actions
const btnValider = document.getElementById("valider");
const btnAnnuler = document.getElementById("annuler");

// definir les instructions qui seront effectuer lors du click sur le bouton valider
btnValider.addEventListener("click", () => {
   //convertir les differentes notes recuperer avant d'effectuer les calculs
  const notecc1 = parseFloat(cc1.value);
  const notecc2 = parseFloat(cc2.value);
  const notepresence = parseFloat(presence.value);
  const noteTd = parseFloat(td.value);
  // calcul des pourcentages des notes avec comme stat 30% cc1 40% cc2,15% presence et 15% TD
  const pcc1 = notecc1 * 0.3;
  const pcc2 = notecc2 * 0.4;
  const Ppresence = notepresence * 0.15;
  const PnoteTd = noteTd * 0.15;
  const moy = pcc1 + pcc2 + Ppresence + PnoteTd;
  //afficher le resultat de la moyenne dans le champ final
  moyenne.value = moy.toString();
});

//definir les instructions a effectuer lors du click sur le boutons Annuler
btnAnnuler.addEventListener("click", () => {
  (cc1.value = null),
    (cc2.value = null),
    (presence.value = null),
    (td.value = null),
    (moyenne.value = null);
});
