let x = prompt("saisir un premier entier");
let y = prompt("saisir un deuxième entier");

while (x*y >= 0) { // équivalent : while ((x>=0 && y>=0) || (x<=0 && y<=0))
    x = prompt("saisir un premier entier");
    y = prompt("saisir un deuxième entier");
}
if(x > 0){
    alert("x est positif : " + x);
}else{
    alert("y est positif : " + y);
}
