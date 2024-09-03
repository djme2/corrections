let a = prompt("Entrer la valeur de a");
let b = prompt("Entrer la valeur de b");
let comp = 0;
let resultat = 1;

while (comp < b) {
    resultat = resultat *a;
    comp++
}
alert(resultat);