function changer() {
    let bd = document.getElementsByTagName('body');
    bd[0].classList.add('active');
    document.getElementById('btnChanger').classList.add('btnChanger');
}
function annulerStyle() {
    let bd = document.getElementsByTagName('body');
    bd[0].classList.remove('active');
    document.getElementById('btnChanger').classList.remove('btnChanger');
}
function remplacerImage(){
    let im = document.getElementById('tof');
    im.setAttribute('src','/images/gateau3.jpg');
}
function revenirImage(){
    let im = document.getElementById('tof');
    im.setAttribute('src','/images/gateau2.jpg');
}
