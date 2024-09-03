let carac = prompt("donner un caractère");
let spec = "{[()]]}_@=+-'&!*µ$£¤§/:;.,?<>²¨^\\\"|`#~";
if (!isNaN(parseInt(carac))) {
    alert("Chiffre");
}else{
    if (spec.includes(carac)) {
        alert("Spéciale");
    } else {
        if (carac === carac.toUpperCase()) {
            alert("Majuscule");
        }else{
            if (carac === carac.toLowerCase()) {
                alert("Miniscule");
            }
        }
    }
}