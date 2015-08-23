<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->

<?php 
require_once $_SERVER['DOCUMENT_ROOT'].'/world/vendor/autoload.php';
session_start();

  if(empty($_SESSION['userName'])){
      header("Location: ../index.php");
      echo $_SERVER['userName'];
  }
?>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html" charset="utf-8" />
        <link rel="stylesheet" href="../CSS/style.css">
        <title></title>
    </head>
    <body>
        <?php
        require_once $_SERVER['DOCUMENT_ROOT'].'/world/controller/Control.php';
        echo Control::findCountriesByPop($_GET['lower']);
        ?>
    </body>
</html>
