let t = [12, 25, 5, 7, 6, -5];
let tProche = t[0];

document.write("<h1>[");
for (let i = 0; i < t.length; i++) {
    if (i == (t.length-1)) {
        document.write(t[i]);   
    }else{
        document.write(t[i] +",");
    }
}
document.write("]</h1><br>");
for (let i = 0; i < t.length; i++) {
    if (Math.abs(t[i]) < tProche) {
        tProche = t[i];
    }else{
        if (Math.abs(t[i]) == tProche) {
            if(t[i] < 0){
                tProche = t[i];
            }
        }
    }
}
document.write("<h1>La température la plus proche de 0°C est : " + tProche + " °C</h1>");



