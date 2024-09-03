let a = prompt ("entrez l'age de votre enfant")
    if (a<6){
        alert("votre enfant est trop jeune")
    }else{

    if (a== 6 || a==7){
        alert("votre enfant est en poussin");
    }else{
        if (a== 8 || a==9){
            alert( "votre enfant est pupille ");

        }else{
            if (a== 10 || a== 11 ){
                alert( "votre enfant est MINIME ");
            }else{
                if (a>=12 ){
                    alert( "votre enfant est cadet ");
                }
            }
        }
    }
    }