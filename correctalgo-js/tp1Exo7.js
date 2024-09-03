let n = parseInt(prompt("Entrer un entier entre 1 et 20")); 
let haut = n;
let bas = n;
let nbr = 1;
let s = n;
while (n != 0) {
    if (n > haut) {
        haut = n;
    } 
    if (n < bas) {
        bas = n;
    } 
    nbr++;
    s = s + n;
    n = parseInt(prompt("Entrer un entier entre 1 et 20"));
}
alert("Meilleur note : " + haut + ", mauvaise : " + bas + ", et moyenne : " 
+ s/nbr);