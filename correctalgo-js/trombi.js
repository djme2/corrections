function trombino() {
    let str = "";
    let nom = "";
    for (let i = 0; i < 152; i++) { 
        if((i != 0) && ((i%2 == 0) || (i%3 == 0))){
            str += "<div class = 'clearfix";
            if(i%2 == 0){
                str += " visible-xs";
            }
            if(i%3 == 0){
                str += " visible-sm";
            }
            if(i%4 == 0){
                str += " visible-md";
            }
            if(i%6 == 0){
                str += " visible-lg";
            }
            str += "'></div>";
        }
        if(i%2 == 0){
            nom = "";
        }else{
            nom = "-petit"
        }
        // nom += ".jpg";
        // <div id = 'tof0' class = 'mx-auto'></div>
        str += "<div";
        if(i%10 == 0){
            str += " id = 'tof" + i + "'";
        }
        str += " class = 'col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center photo'>";
        str += "<img src = 'trombi/" + Math.floor(i/2) + nom + ".jpg' alt=''/></div>";
    }
    document.getElementById('photos').innerHTML = str;
    str = "";
    str = '<li class="active"><a href="#tof0">Début</a></li>';
    for (let i = 0; i < 14; i++) {
        str += '<li><a href="#tof' + (i*10) + '">' + (i*10) + '</a></li>';
    }
    document.getElementById('liens').innerHTML = str;

}
trombino();