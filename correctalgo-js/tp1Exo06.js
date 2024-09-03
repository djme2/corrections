let carac = prompt("Entrer un caractère");
if(carac >= 'a' && carac <= 'z'){
    alert("miniscule");
}else{
    if(carac >= 'A' && carac <= 'Z'){
        alert("majuscule");
    }else{
        if(carac >= '0' && carac <= '9'){
            alert("chiffre");
        }else{
            alert("spéciale");
        }
    }
}