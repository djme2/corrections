let x = 10;
let y = 20;
let z = 30;

let n = parseInt(prompt("Entrer un entier"));
if(n < x){
    alert(n + " - " + x + " - " + y);
}else{
    if(n < y){
        alert(x + " - " + n + " - " + y);
    }else{
        if(n < z){
            alert(x + " - " + y + " - " + n);
        }else{
            alert(x + " - " + y + " - " + z);
        }
    }
}