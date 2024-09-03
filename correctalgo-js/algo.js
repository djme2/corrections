let nbnote = parseInt(prompt("Combien de note ?"))
let moye
let total = 0//Pour initialiser le total
let note
// Les notes doivent se situer entre 0 et 20. 
// Pour faire fonctionner la boucle, il faut des valeurs de depart
let bass = 20
let haut = 0
let cpt = 0//Pour mettre fin à la boucle

while (cpt < nbnote){
    note = parseInt(prompt("Entre une note"))
    total = total + note//On aditionne les notes pour faire la moyenne après
    if (note < bass){ //Definir la note la plus basse
        bass = note
    }
    if (note > haut){ //Definir la note la plus haute
        haut = note
    }
    cpt++
}
moye = total / nbnote //Calcul de la moyenne

alert("Plus basse : " + bass + " ; Plus haute : " + haut + " ; Moyenne : " + moye)
