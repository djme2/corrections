// // fonctionne sous firefox en désactivant "firefox same origin policy"

// function createAjaxObject(){

// 	try { 
// 		ajaxObject = new XMLHttpRequest();
// 	} catch (tryMicrosoft){
// 		try {
// 			ajaxObjet = new ActiveXObject("Msxml2.XMLHHTP");
// 		} catch (tryIe){
// 			try{
// 				ajaxObject = new ActiveXObject("Microsoft.XMLHTTP");
// 			} catch (echec){
// 				ajaxObject = null;
// 			}
// 		}
// 	}
// 	return ajaxObject;
// }

// function sendAjaxObject(){

// 	ajaxObject = createAjaxObject();
// 	var url = "scriptCoteServeur.txt"; // il s'agit d'un fichier txt placé dans le meme dossier qui contient du texte quelconque
// 	ajaxObject.onreadystatechange = recall;
// 	ajaxObject.open("GET",url);
// 	ajaxObject.send();

// }

// function recall(){
// 	if(ajaxObject.readyState==4 && ajaxObject.status == 200){
// 		var response = ajaxObject.responseText;
// 		document.getElementById('ajaxResponse').innerHTML = response;
// 	}
// }
function sendAjaxObject(){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', '/scriptCoteServeur.json', true);
	xhr.onload = function() {
		if ((xhr.status >= 200 && xhr.status < 300)) {
			let resultat = JSON.parse(xhr.responseText);
			const resultatDiv = document.getElementById('resultat');
			resultatDiv.innerHTML = 
			// resultat
				'<h2>Données récupérées : </h2>' +
				'<p>Nom : ' + resultat.nom + '</p>' +
				'<p>Email : ' + resultat.email + '</p>';
		} else {
			alert('Erreur de requête : ' + xhr.status);
		}
	};
	xhr.onerror = function(){
		alert('Erreur réseau');
	};
	xhr.send();
}