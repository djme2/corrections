let n = parseInt(prompt("donner un entier positif"));
let i = 1;
let j = 2;
document.write("Les nombres premiers entre 1 et " + n + " :<br>");
while (i <= n) {
    j = 2;
    while ((i%j != 0) && (j < i/2)) {
        j++;
    }
    if (j > i/2) {
        document.write(i + "<br>");
    }
    i++;
}