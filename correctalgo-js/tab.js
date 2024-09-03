// déclarer les tableau statique (taille fixe)
let tab = Array(9);
tab = [1,2,3,4,5]; // initialisation du contenu du tableau
//alert("la taille du tableau tab est : " + tab.length);
// length : retourne le nombre de case réellement utilisée dans le tableau
//alert("la valeur de la case 3 est : " + tab[3]); 
// afficher le contenu de la case d'indice 3
tab[3] = 9; // écrire dans la case d'indice 3
//alert("la nouvelle valeur de la case 3 est : " + tab[3]);
// !!!!!!!!!!!On manipule les tableaux avec des boucles!!!!!!!!!
// Remplissage du tableau
for (let i = 0; i < 9; i++) {
    tab[i] = parseInt(prompt("donner un entier"));
}
// Afficher tout le contenu d'un tableau
for (let i = 0; i < tab.length; i++) {
    document.write(tab[i] + "<br>");
}

// tableau dynamique
// déclaration :
let t = [];
