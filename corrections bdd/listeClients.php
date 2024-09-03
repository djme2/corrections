<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap-cyborg.min.css">
    <title>Document</title>
</head>
<body>
<?php
// Connexion bdd
require_once('configConnexion.php');
$maCnx = openConnexion();

    // Chercher la liste des clients.
    $ch = "SELECT * FROM client;";
    $req = $maCnx->prepare($ch);
    $req->execute();
    echo "<h1>Liste des clients de la BDD</h1>";
    echo "<table class='table table-bordered border-primary w-50'>";
    while ($d = $req->fetch()) {
        echo "<tr><td>" .
        $d[0] . "</td><td>" . $d[1] . "</td><td>" . $d[2] . "</td><td>" .
        $d[3] . "</td><td>" . $d[4] . "</td><td>" . $d[5] .
        "</td></tr>";
    }
    echo "</table>";
    
    $req->closeCursor();
?>
</body>
</html>