let n = parseInt(prompt("donner un entier positif"));
let i = 2;
let moitie = parseInt(n/2);
while ((n%i != 0) && (i <= moitie)) {
    i++;
}
if (i > moitie) {
    alert(n + " est un nombre premier");
} else {
    alert(n +" n'est pas un nombre premier");
}