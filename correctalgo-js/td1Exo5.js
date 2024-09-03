let x = parseInt(prompt("Saisir l'entier x"));
let y = parseInt(prompt("Saisir l'entier y"));
let z = parseInt(prompt("Saisir l'entier z"));

let max = x;
let min = x;
// chercher le max
if (y > max) {
    max = y;
}
if (z > max) {
    max = z
}
alert("Le max entre : " + x + ", " + y + " et " + z + " est : " + max);
// chercher le min
if (y < min) {
    min = y;
}
if (z < min) {
    min = z
}
alert("Le min entre : " + x + ", " + y + " et " + z + " est : " + min);
