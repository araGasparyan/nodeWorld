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
        <title>Welcome to <?php echo $_GET['country'] ?></title>
        <link rel="stylesheet" href="../CSS/style.css">
    </head>
    <body>
        <header>
            <div class="hello">
                <h1><?php echo $_GET['country'] ?></h1>
            </div>
            <div class="earth">
                <a href="home.php"><img width="100px" src="../pictures/earth.gif"></a>
            </div>
        </header>
        <?php 
        require_once $_SERVER['DOCUMENT_ROOT'].'/world/controller/Control.php';
        $output=Control::CountryInfo($_GET['country']);
        if($output=='0 results'){
            echo header("Location: home.php ");
        };
        ?>
        <div class="countryInfo clearfix">
            <!--the class name should be changed-->
            <div class="continentInfo">
                <img src=<?php echo "'../pictures/continents/".$output['continentPicture']."'" ?> alt=<?php echo "'Image of ".$output['Continent']."'" ?> class="continentImage" height="300" width="300"/>
            	<div class="mainInfo">
	            	<div class="continent info">Continent: <?php echo $output['Continent']?></div>
	            	<div class="region info">Region: <?php echo $output['Region']?></div>
	            	<div class="localName info">Local Name: <?php echo $output['LocalName']?></div>
            	</div>
            </div>
            <div class="addInfo">
	            <div class="surfaceArea info">Surface Area: <?php echo $output['SurfaceArea']?></div>

	            <div class="indepYear info">Independence Year: <?php echo $output['IndepYear']?></div>

	            <div class="population info">Population: <?php echo $output['Population']?></div>

	            <div class="lifeExpectancy info">Life Expectancy: <?php echo $output['LifeExpectancy']?></div>

	            <div class="governmentForm info">Government Form: <?php echo $output['GovernmentForm']?></div>

	            <div class="headOfState info">Head Of State: <?php echo $output['HeadOfState']?></div>

	            <div class="capital info">Capital: <?php echo $output['capital']?></div>
            </div>
        </div>
        <div class="cityLanguage clearfix">
            <div class="cities datas">
                <?php
                echo Control::findCitiesOf($_GET['country']); 
                ?>
            </div> 
            <div class="languages datas">
                 <?php
        
        echo Control::LanguagesOf($_GET['country']);
        ?>
            </div>   
        </div>

        
        
        
        
    </body>
</html>
