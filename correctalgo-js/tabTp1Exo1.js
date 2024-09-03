let t = [];
let n = parseInt(prompt("Donner le nombre d'élément du tableau"));
// Remplissage du tableau
// i++ : i = i + 1
for (let i = 0; i < n; i++) {
    // t[i] = parseInt(prompt("Entrer la valeur de la case d'indice " + i));
    t[i] = parseInt(Math.random()* 100);
}
// Afficher tout le contenu d'un tableau
for (let i = 0; i < t.length; i++) {
    document.write(t[i] + "<br>");
}
// x est l'élément à chercher dans le tableau 
let x = parseInt(prompt("Donner un élément à chercher"));
// min c'est le min du tableau initialisé à t[0]
let min = t[0];
let j = 0;
while ((x != t[j]) && (j < t.length)) {
    j++;
}
if (j >= t.length) {
    alert(x + " n'existe pas dans ce tableau");
} else {
    alert(x + " existe dans ce tableau"); 
}
