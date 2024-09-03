// exrcice 1 
let t = [];
let n = parseInt (prompt("donnez le nombre de'élement du tableau"));
let min;

for (let i= 0; i < n; i++){
    // t[i]= parseInt(prompt("entrer la valeur de la case"+(i)));
    t[i]= Math.floor(Math.random()*30);
}
// afficher le tableau
for (let i= 0; i < n; i++){
    // t[i]= parseInt(prompt("entrer la valeur de la case"+(i)));
    document.write(t[i] + "<br>");
}
min = t[0];
let indice = 0;
let j = 1;

while (j < t.length){
    if (t[j] <= min){
        min = t[j];
        indice = j;
    }
    j++;
} 
alert ("Le min est : "+ min + " son indice est : " + indice);