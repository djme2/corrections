let x = parseInt(prompt("Saisir l'entier x"));
let y = parseInt(prompt("Saisir l'entier y"));
let z = parseInt(prompt("Saisir l'entier z"));

let max = x;
let min = x;
let milieu;
// chercher le max
if (y > max) {
    max = y;
}
if (z > max) {
    max = z
}
// chercher le min
if (y < min) {
    min = y;
}
if (z < min) {
    min = z
}
milieu = (x + y + z) - (max + min);
alert("Le classement de : " + x + ", " + y + " et " + z + " est : " 
+ min + " - " + milieu + " - " + max);