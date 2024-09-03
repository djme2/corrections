<?php
// $_GET // method = GET
// $_POST // method = POST
session_start();
$_SESSION['nbr'] = $_REQUEST['nombre'];
if (isset($_REQUEST['nombre'])) {
    if ((string) $_REQUEST['nombre'] === 
     (string) (float) $_REQUEST['nombre']) {
        echo "Tout est bien";
    }else{
        echo "ce n'est pas un nombre";
    }
}
echo "Mon nombre est : " . $_SESSION['nbr'];
