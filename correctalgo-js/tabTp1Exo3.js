let t = [];
let n = parseInt(prompt("Donner la taille du tableau"));
for (let i = 0; i < n; i++) {
    t[i] = Math.floor(Math.random()*30);
}
// 1 ère solution
document.write("<h1>");
for (let i = 0; i < t.length; i++) {
    if(i < (t.length - 1)){
        document.write(t[i] + "_");
    }else{
        document.write(t[i]);
    }
}
document.write("</h1>");
// 2 ème solution
document.write("<h1>");
for (let i = 0; i < t.length; i++) {
    if(i == 0){
        document.write(t[i]);
    }else{
        document.write("_" + t[i]);
    }
}
document.write("</h1>");