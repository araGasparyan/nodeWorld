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
        <title></title>
        <link rel="stylesheet" href="../CSS/style.css">
    </head>
    <body>
        <header>
            <div class="hello">
                <h1>We find this countries</h1>
            </div>
            <div class="earth">
                <a href="home.php"><img width="100px" src="../pictures/earth.gif"></a>
            </div>
        </header>
        <ul class="suggestions">
        <?php
        require_once $_SERVER['DOCUMENT_ROOT'].'/world/controller/Control.php';
        
        echo Control::findOrderedCountries($_GET['continent'], $_GET['region'], $_GET['surface_min'], 
                $_GET['surface_max'], $_GET['population_min'], $_GET['population_max'], $_GET['life_expectancy'], $_GET['government_form'],
                $_GET['city_count'],"");
        
        
        
        
        
//        echo var_dump($_POST['continent']).'<br>';
//        echo var_dump($_POST['region']).'<br>';
//        echo var_dump($_POST['surface_min']).'<br>';
//        echo var_dump($_POST['surface_max']).'<br>';
//        echo var_dump($_POST['population_min']).'<br>';
//        echo var_dump($_POST['population_max']).'<br>';
//        echo var_dump($_GET['life_expectancy']).'<br>';
//        echo var_dump($_POST['government_form']).'<br>';
//        echo var_dump($_POST['city_count']).'<br>';
//        if(isset($_POST['element_8_1'])){
//        echo var_dump($_POST['element_8_1']).'<br>';
//        }
//         if(isset($_POST['element_8_2'])){
//        echo var_dump($_POST['element_8_2']).'<br>';
//        }
//         if(isset($_POST['element_8_3'])){ 
//        echo var_dump($_POST['element_8_3']).'<br>';
//        }
        
        
        
        ?>
        </ul>
    </body>
</html>
