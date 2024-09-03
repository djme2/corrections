function colorier(elt, valid)
{
    if(valid) // if (valid == true)
        elt.style.backgroundColor = "#0f0";
    else
        elt.style.backgroundColor = "#f00";
}
function verifGenre() {
    var genre = document.getElementsByName('genre');
    if (genre[0].checked || genre[1].checked) {
        //colorier(genre, true);
        return true;
    } else {
        //colorier(genre, false);
        return false;
    }
}
function verifNom(elt)
{
    if(elt.value.length < 2)
    {
        colorier(elt, false);
        return false;
    }
    else
    {
        colorier(elt, true);
        return true;
    }
}
function verifNomRegex(elt)
{
    var regex = /^[a-zA-Z]{2,15}$/;
    if (regex.test(elt.value))
    {
        colorier(elt, true);
        return true;
    }
    else
    {
        colorier(elt, false);
        return false;
    }
}
function verifAge(elt)
{
    ageValue = parseInt(elt.value);
    if(!isNaN(ageValue) && ageValue >= 5 && ageValue <= 140)
    {
        colorier(elt, true);
        return true;
    }
    else
    {
        colorier(elt, false);
        return false;
    }
}
function verifEmail(elt)
{
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if(regex.test(elt.value))
    {
        colorier(elt, true);
        return true;
    }
    else
    {
        colorier(elt, false);
        return false;
    }
}
function verifTel(elt)
{
    var regex = /^[0-9]{3,10}$/;
    if(regex.test(elt.value))
    {
        colorier(elt, true);
        return true;
    }
    else
    {
        colorier(elt, false);
        return false;
    }
}
function verifPseudo(elt)
{
    if(elt.value.length >= 4)
    {
        colorier(elt, true);
        return true;
    }
    else
    {
        colorier(elt, false);
        return false;
    }
}
function verifPwd1(elt)
{
    var regex = /^([a-z].*)([A-Z].*)([0-9].*)$/;
    //var regex = /^[A-Z]{1,}[0-9]{1,}{8,18}$/;
    //var regex = /^[0-9]{3}$/
    if(elt.value.length >= 6)
    // if(regex.test(elt.value))
    {
        colorier(elt, true);
        return true;
    }
    else
    {
        colorier(elt, false);
        return false;
    }
}
function verifPwd2(elt)
{
    var pwd1 = document.getElementById("pwd1");
    //pwd1.setAttribute('type','password');
    if(pwd1.value == elt.value && elt.value != '')
    {
        colorier(elt, true);
        return true;
    }
    else
    {
        colorier(elt, false);
        return false;
    }
}
function verifForm(f)
{
    var genreOk = verifGenre();
    var nomOk = verifNomRegex(f.lastName);
    var prenomOk = verifNomRegex(f.firstName);
    var ageOk = verifAge(f.age);
    var emailOk = verifEmail(f.email);
    /*var pseudoOk = verifPseudo(f.pseudo);
    var pwd1Ok = verifPwd1(f.pwd1);
    var pwd2Ok = verifPwd2(f.pwd2); */
    
    if(genreOk && nomOk && prenomOk && ageOk && emailOk){
        //window.location = "testLogin.html";
        //window.location.href = "testLogin.html";
        localStorage.setItem("prenom", f.firstName.value);
        localStorage.setItem("nom", f.lastName.value);
        document.getElementById("myForm").setAttribute("action", 'testLogin.html');
        //window.open("testLogin.html"); 
        return true;
    }
    else
    {
        alert("Veuillez remplir correctement tous les champs");
        return false;
    }
}