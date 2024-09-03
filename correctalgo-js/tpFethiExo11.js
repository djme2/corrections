let mnt = prompt("Entrer un montant en euro");
let partieEntiere = parseInt(mnt);
let partieFlottante = (mnt - partieEntiere) * 100;
partieFlottante = partieFlottante.toFixed(2);
let b500 = parseInt(partieEntiere / 500);
let b200 = parseInt((partieEntiere - (b500 * 500)) / 200);
let b100 = parseInt((partieEntiere - (b500 * 500) - (b200 * 200)) / 100);
let b50 = parseInt((partieEntiere - (b500 * 500) - (b200 * 200) - (b100 * 100)) / 50);
let b20 = parseInt((partieEntiere - (b500 * 500) - (b200 * 200) - (b100 * 100) - (b50 * 50)) / 20); 
let b10 = parseInt((partieEntiere - (b500 * 500) - (b200 * 200) - (b100 * 100) - (b50 * 50) - (b20 * 20)) / 10); 
let b5 = parseInt((partieEntiere - (b500 * 500) - (b200 * 200) - (b100 * 100) - (b50 * 50) - (b20 * 20) - (b10 * 10)) / 5); 
let p2e = parseInt((partieEntiere - (b500 * 500) - (b200 * 200) - (b100 * 100) - (b50 * 50) - (b20 * 20) - (b10 * 10) - (b5 * 5)) / 2); 
let p1e = parseInt((partieEntiere - (b500 * 500) - (b200 * 200) - (b100 * 100) - (b50 * 50) - (b20 * 20) - (b10 * 10) - (b5 * 5) - (p2e * 2)) / 1); 

let p50 = parseInt(partieFlottante / 50);
let p20 = parseInt((partieFlottante - (p50 * 50)) / 20);
let p10 = parseInt((partieFlottante - (p50 * 50) - (p20 * 20)) / 10);
let p5 = parseInt((partieFlottante - (p50 * 50) - (p20 * 20) - (p10 * 10)) / 5);
let p2 = parseInt((partieFlottante - (p50 * 50) - (p20 * 20) - (p10 * 10) - (p5 * 5)) / 2); 
let p1 = parseInt((partieFlottante - (p50 * 50) - (p20 * 20) - (p10 * 10) - (p5 * 5) - (p2 * 2)) / 1); 

// document.write("<h1> Billet de 500 : " + b500 + ", billet de 200 : " + 
// b200 + ", billet de 100 : " + b100 + ", billet de 50 : " + b50 
// + ", billet de 20 : " + b20 + ", billet de 10 : " + b10 + ", billet de 5 : " +
// b5 + ", pièces de 2 : " + p2 + ", pièces de 1 : " + p1 + "</h1>");
document.write("Le montant est : " + mnt + " €<br>");
if (b500 != 0) {
    document.write("Billet de 500€ : " + b500 + "<br>");
}
if (b200 != 0) {
    document.write("Billet de 200€ : " + b200 + "<br>");
}
if (b100 != 0) {
    document.write("Billet de 100€ : " + b100 + "<br>");
}
if (b50 != 0) {
    document.write("Billet de 50€ : " + b50 + "<br>");
}
if (b20 != 0) {
    document.write("Billet de 20€ : " + b20 + "<br>");
}
if (b10 != 0) {
    document.write("Billet de 10€ : " + b10 + "<br>");
}
if (b5 != 0) {
    document.write("Billet de 5€ : " + b5 + "<br>");
}
if (p2e != 0) {
    document.write("Pièce de 2€ : " + p2e + "<br>");
}
if (p1e != 0) {
    document.write("Pièce de 1€ : " + p1e + "<br>");
}
if (p50 != 0) {
    document.write("Pièce de 0,50€ : " + p50 + "<br>");
}
if (p20 != 0) {
    document.write("Pièce de 0,20€ : " + p20 + "<br>");
}
if (p10 != 0) {
    document.write("Pièce de 0,10€ : " + p10 + "<br>");
}
if (p5 != 0) {
    document.write("Pièce de 0,05€ : " + p5 + "<br>");
}
if (p2 != 0) {
    document.write("Pièce de 0,02€ : " + p2 + "<br>");
}
if (p1 != 0) {
    document.write("Pièce de 0,01€ : " + p1 + "<br>");
}
