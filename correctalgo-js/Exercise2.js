
 let a=prompt("Entrer en entier");
 let b=prompt("Entrer en entier");

 if ((a>0 && b>0)||(a<0 && b<0)) {
    alert("Le produit est positif");

 }else{
    if ((a>0 && b<0)||(a<0 && b>0))
    alert("Le produit est negatif");
 }