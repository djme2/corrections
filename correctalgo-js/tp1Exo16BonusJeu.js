let scoreJ = 0;
let scoreO = 0;
let choixO, choixJ;
while ((scoreJ < 10) && (scoreO < 10)) {
    choixO = Math.floor(Math.random()*3);
    choixJ = parseInt(prompt("Entrer un entier 0/1/2"));
    while ((choixJ < 0) || (choixJ > 2)) {
        choixJ = parseInt(prompt("Hors intervalle, Entrer de nouveau un entier 0/1/2"));
    }
    if (Math.abs(choixO - choixJ) == 2) {
        if (choixO > choixJ) {
            scoreO++;
        } else {
            scoreJ++;
        }
    }
    if (Math.abs(choixO - choixJ) == 1) {
        if (choixO < choixJ) {
            scoreO++;
        } else {
            scoreJ++;
        }
    }
    document.write("Score ordinateur : " + scoreO + "<br>");
    document.write("Score joueur : " + scoreJ + "<br>");
}
// document.write("Score ordinateur : " + scoreO + "<br>");
// document.write("Score joueur : " + scoreJ + "<br>");