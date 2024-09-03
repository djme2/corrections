let a = parseInt(prompt("Entrer la valeur de A"));
let b = parseInt(prompt("Entrer la valeur de B"));
let x = a;
let y = b;
while (a != b) {
    if (a > b) {
        a = a - b;
    }
    if (b > a) {
        b = b - a;
    }
}
alert("Le PGCD(" + x + "," + y + ") est : " + a);