<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Validación Módulo 11</title>
        <script src="script/validamod11.js" type="text/javascript"></script>
    </head>
    <body>
        <?php
        // put your code here
        ?>
        <h1>Formulario Validador de RUT</h1>
        <b><p>Módulo 11</p></b>
        <form action="#" onsubmit="return valida();" method="POST">
            <label>Digitar RUT</label><br>
            <input id="inRut" type="text" name="rut" minlength="7" maxlength="9" pattern="[A-Za-z0-9]{7,9}" placeholder="RUT sin puntos ni guión"/><br>
            
            <input type="submit" name="enviar" value="Enviar RUT a validar"/>
        </form>
    </body>
</html>

<?php
if(isset($_POST['enviar']))
{
    if($_POST['rut'] <> ""){
        echo'<b><label style="color:green">';echo("El RUT: ".$_POST['rut']." es válido");echo'</label></b>';
    }
}