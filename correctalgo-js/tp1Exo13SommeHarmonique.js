let n = parseInt(prompt("Entrer la valeur de n"));
let s = 0;
for (let i = 1; i <= n; i++) {
    s += (1/i);
}
alert("La somme harmonique est : " + s);