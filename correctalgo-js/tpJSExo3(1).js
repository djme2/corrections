// Exo 3.1
function tableMult() {
    let n;
    do{
        n = prompt("Entrer un entier positif");
    }while(isNaN(n) || n <= 0);
    // En sortant de la boucle on est certain que n est un nombre (entier ou réel)
    n = parseInt(n); // prendre la partie entière de n 
    document.write("<table>");
    for (let i = 1; i <= 10; i++) {
        document.write("<tr>");
            document.write("<td>"+ n +"</td>");
            document.write("<td>"+ i +"</td>");
            document.write("<td>"+ n*i +"</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}
tableMult();
// Exo 3.2
function tableMult1(n) {
    document.write("<table>");
    for (let i = 1; i <= 10; i++) {
        document.write("<tr>");
            document.write("<td>"+ n +"</td>");
            document.write("<td>"+ i +"</td>");
            document.write("<td>"+ n*i +"</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}
for (let i = 1; i <= 10; i++) {
    tableMult1(i);
}
// Mise en forme
let x = document.getElementsByTagName('table');
for (let i = 0; i < x.length; i++) {
    x[i].style.borderCollapse = "collapse";
    x[i].style.border = "2px";
    x[i].style.margin = "auto";
    x[i].style.width = "400px";
    x[i].style.height = "200px";
    x[i].style.fontSize = "30px";
}


let y = document.getElementsByTagName('td');
// y est un tableau qui contient tout les 'td'
for (let i = 0; i < y.length; i++) {
    y[i].style.border = "2px solid green";
    y[i].style.textAlign = "center";  
}
