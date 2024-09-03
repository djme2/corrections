let t = [];
let n = parseInt(prompt("Donner la taille du tableau"));
let s = 0;
for (let i = 0; i < n; i++) {
    t[i] = Math.floor(Math.random()*50);
    // t[i] = parseInt(prompt("Donner un entier"));
    s = s + t[i];
}
for (let i = 0; i < t.length; i++) {
    document.write("<h1>" + t[i] + "</h1>");
}
document.write("<h1>La somme est : " + s + " et la moyenne est : " + s/t.length + "</h1>");


