let x = document.getElementById('tof');
let i = 1 // image de l'aigle qui est affiché
function alterner(){
    if (i == 1) {
        x.src = "images/ours.jpg";
        i = 2; // l'image de l'ours qui est affiché
    } else {
        x.src = "images/aigle.jpg";
        i = 1;
    }
}
// Diaporama
let t = ["perroquet.jpg","lapin.jpg","elephant.jpg","loup.jpg","panda.jpg"];
let j = 0;
let y = document.getElementById('diapo');
function suivant() {
    j++;
    if(j == t.length){
        j = 0;
    }
    y.src = "images/" + t[j]; // y.setAttribute("src","images/"+t[j]);
}
function precedent(){
    j--;
    if(j < 0){
        j = t.length - 1;
    }
    y.src = "images/" + t[j]; // y.setAttribute("src","images/"+t[j]);
}