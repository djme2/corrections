let x = parseInt(prompt("Saisir l'entier x"));
let y = parseInt(prompt("Saisir l'entier y"));
let z = parseInt(prompt("Saisir l'entier z"));

let max = x;
let s = y + z;
// chercher le max
if (y > max) {
    max = y;
    s = x + z;
}
if (z > max) {
    max = z;
    s = x + y;
}
//alert("Le max entre : " + x + ", " + y + " et " + z + " est : " + max);
if(s > max){
//if(((x+y+z)-max) > max){ // (x+y+z)-max : la somme des deux plus petits valeurs
    alert("OK pour un triangle");
}else{
    alert("Ce n'est pas un triangle");
}
