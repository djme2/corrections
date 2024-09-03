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