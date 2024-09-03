function tableMult() {
    let n;
    do{
        n = prompt("Entrer un entier positif");
    }while(isNaN(n) || n <= 0);
    // En sortant de la boucle on est certain que n est un nombre (entier ou réel)
    n = parseInt(n); // prendre la partie entière de n 
    document.write("<table id='tab'>");
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
let x = document.getElementById('tab');
x.style.borderCollapse = "collapse";
x.style.border = "2px";
x.style.margin = "auto";
x.style.width = "400px";
x.style.height = "200px";
x.style.fontSize = "30px";


let y = document.getElementsByTagName('td');
// y est un tableau qui contient tout les 'td'
for (let i = 0; i < y.length; i++) {
    y[i].style.border = "2px solid green";
    y[i].style.textAlign = "center";  
}
