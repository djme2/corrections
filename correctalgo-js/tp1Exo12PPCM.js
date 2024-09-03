let a = parseInt(prompt("Entrer la valeur de A"));
let b = parseInt(prompt("Entrer la valeur de B"));
let x = a;
let y = b;
let temp;
if (a < b) {
    temp = a;
    a = b;
    b = temp;
}
let i = 1;
while (((i * a) % b) != 0) {
    i++;
}
alert("Le PPCM(" + x + "," + y + ") est : " + (i * a));