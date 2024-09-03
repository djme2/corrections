<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="text-center">
        <form action="listeClients.php" method="get">
            <input class="btn btn-info" type="submit" value="Afficher liste">
        </form>
    </div>
    <p class="fs-5 text-primary ">Inscription</p>
    <form action="transaction.php" method="POST">
        <label for="fname" class="mb-3">Prénom</label>
        <input type="text" name="fname" id="fname">
        <br>
        <label for="lname">Nom</label>
        <input type="text" name="lname" id="lname">
        <br>
        <label for="dn">Date de naissance</label>
        <input type="date" name="dn" id="dn">
        <br>
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
        <br>
        <label for="tel">Téléphone</label>
        <input type="tel" name="tel" id="tel">
        <br>
        <label for="adr">Adresse</label>
        <input type="text" name="adr" id="adr">
        <br>
        <label for="pseudo">Pseudo</label>
        <input type="text" name="pseudo" id="pseudo">
        <br>
        <label for="mdp">Mot de passe</label>
        <input type="password" name="mdp" id="mdp">
        <br>
        <label for="vmdp">Vérification mot de passe</label>
        <input type="password" name="vmdp" id="vmdp">
        <br>
        <input type="submit" value="S'inscrire">
    </form>
</body>
</html>