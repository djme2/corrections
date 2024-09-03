function changer_style() {
    let texte = document.getElementById('parag1');
    // texte.style.backgroundColor = "black";
    // texte.style.color = "white";
    // parag1.style.border = "1px dashed green";
    // parag1.style.padding = "5px";
    if(texte.classList.contains("active")){
        texte.classList.remove("active");
    }else{
        texte.classList.add("active");
    }
}