let t = [];
let n = parseInt(prompt("Donner la taille du tableau"));
for (let i = 0; i < n; i++) {
    t[i] = Math.floor(Math.random()*10);
}
for (let i = 0; i < t.length; i++) {
    document.write("<h1>" + t[i] + "</h1>");
}
let s = 0;
let debut = parseInt(prompt("Donner l'indice de début"));
// Chercher l'indice de fin
let cpt = debut + 1;
while ((t[cpt] != 5) && (cpt < t.length)) {
    cpt++;
}
let fin = cpt;
// Calculer la somme
for (let i = debut; i < fin; i++) {
    s = s + t[i]; // s += t[i];
}
document.write("<h1>La somme entre " + debut + " et " + (fin - 1) + " est : " 
+ s + " et la moyenne est : " + s/(fin - debut) + "</h1>");


