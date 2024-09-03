////let n = parseInt (prompt("donnez le nombre de'élement du tableau"));
//remplissage du tableau 
//for (let i= 0; i < n; i++ {
   // t[i]= parseInt(prompt("entrer la valeur de la case"+(i=1)));
//}
// x est l'élément a chercher dans le tableau 
//let x = parseInt(prompt("donnez un element à chercher"));
//let j = 0;
//while ((x != t[j])) && (j< t.length){
  //  j++

//}

// exrcice 1 
let t = []
let n = parseInt (prompt("donnez le nombre de'élement du tableau"));
let min ;

for (let i= 0; i < n; i++ ){
    // t[i]= parseInt(prompt("entrer la valeur de la case"+(i)));
    t[i]= Math.floor(Math.random()*30);
}
// afficher le tableau
for (let i= 0; i < n; i++ ){
    // t[i]= parseInt(prompt("entrer la valeur de la case"+(i)));
    document.write(t[i] + "<br>");
}
min = t[0]
let j = 1;

while (j< t.length){
    if (t[j]<min){
    min=t[j]}

    j++

} alert ("afficher "+ min)
