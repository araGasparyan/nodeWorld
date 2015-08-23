
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
        <title>My first PHP Hello World))</title>
        <link rel="stylesheet" type="text/css" href="../CSS/style.css">
        <link rel="stylesheet" type="text/css" href="../CSS/formstyle.css" media="all">
      
	
	

    </head>
    <body>
        <header>
            <div class="hello">
                <h1>Hello world!!!</h1>
            </div>
            <div class="earth">
                <a href="home.php"><img width="100px" src="../pictures/earth.gif"></a>
            </div>
        </header>
        <section>
            <p class="geoText">
                Geography (from Greek γεωγραφία, geographia) is a field of science dedicated to the study of the lands, the features, the inhabitants, and the phenomena of Earth.
                A literal translation would be "to describe or picture or write about the earth".
                The first person to use the word "geography" was Eratosthenes (276–194 BC).
                Four historical traditions in geographical research are spatial analysis of the natural and the human phenomena (geography as the study of distribution),
                area studies (places and regions), study of the human-land relationship, and research in the Earth sciences.
                Nonetheless, modern geography is an all-encompassing discipline that foremost seeks to understand the Earth and all of its human and natural complexities—not merely where objects are, but how they have changed and come to be.
                Geography has been called "the world discipline" and "the bridge between the human and the physical science". 
                Geography is divided into two main branches: human geography and physical geography.
            </p>
            <p class="geoText">
                 Traditionally, geographers have been viewed the same way as cartographers and people who study place names and numbers.
                Although many geographers are trained in toponymy and cartology, this is not their main preoccupation.
                Geographers study the spatial and the temporal distribution of phenomena, processes, and features as well as the interaction of humans and their environment.
                Because space and place affect a variety of topics, such as economics, health, climate, plants and animals; geography is highly interdisciplinary.
                The interdisciplinary nature of the geographical approach depends on an attentiveness to the relationship between physical and human phenomena and its spatial patterns.
                ...mere names of places...are not geography...know by heart a whole gazetteer full of them would not, in itself, constitute anyone a geographer. Geography has higher aims than this:
                it seeks to classify phenomena (alike of the natural and of the political world, in so far as it treats of the latter), to compare, to generalize, to ascend from effects to causes, and, in doing so, to trace out the laws of nature and to mark their influences upon man.
                This is 'a description of the world'—that is Geography. In a word Geography is a Science—a thing not of mere names but of argument and reason,
                of cause and effect.
            </p>
            </section>
            <section>
            <form class="countryInfoField" method="get" action="countryInfo.php">
                <div class="">
                    <input type="text" id="searchField" autocomplete="off" placeholder="Enter country name" name="country" oninput="getNamesAJAX1()">               
                    <input type="submit" value="submit">
                </div>
                <ul id="names">
                </ul>
            </form>
   
        <div id="form_container">
            <h1><a></a></h1>
            <form id="form_1038581" class="appnitro"  method="get" action="suggestions.php">
		<div class="form_description">
                    <h2>Fill the form!!</h2>
                    <p>Find the country of your dream.</p>
		</div>				
		<ul>
                    <li id="li_6" >
                        <label class="description" for="element_6">Continent</label>
                            <div>
                                <select class="element select medium" id="element_6" name="continent"> 
                                    <option value="-1" selected="selected">any</option>
                                    <option value="0" >Africa</option>
                                    <option value="1" >Antarctica</option>
                                    <option value="2" >Asia</option>
                                    <option value="3" >Europe</option>
                                    <option value="4" >North America</option>
                                    <option value="5" >Oceania</option>
                                    <option value="6" >South America</option>
                                </select>
                            </div> 
                    </li>
                    
                    <li id="li_1" >
                        <label class="description" for="element_1">Region</label>
                        <div class="regionInfoField">
                            <input id="element_1" name="region" autocomplete="off" class="element text medium" type="text" maxlength="255" value="" oninput="getNamesAJAX()" />
                            <ul id="regionnames">
                            </ul>
                        </div> 
                    </li>
                    
                    <li id="li_2" >
                        <label class="description" for="element_2">Surface</label>
                        <span>
                            <input id="element_2_1" name= "surface_min" autocomplete="off" class="element text" maxlength="255" size="8" value=""/>
                            <label>min</label>
                        </span>
                        <span>-</span>
                        <span>
                            <input id="element_2_2" name= "surface_max" autocomplete="off" class="element text" maxlength="255" size="8" value=""/>
                            <label>max</label>
                        </span> 
                    </li>
                    
                    <li id="li_3" >
                        <label class="description" for="element_3">Population </label>
                        <span>
                            <input id="element_3_1" autocomplete="off" name= "population_min" class="element text" maxlength="255" size="8" value=""/>
                            <label>min</label>
                        </span>
                        <span>-</span>
                        <span>
                            <input id="element_3_2" autocomplete="off" name= "population_max" class="element text" maxlength="255" size="8" value=""/>
                            <label>max</label>
                        </span> 
                    </li>
                    
                    <li id="li_7" >
                        <label class="description" for="element_7">Life expectancy </label>
                        <span>
                            <input id="element_7_0" name="life_expectancy" class="element radio" type="radio" value="0" checked="checked"/>
                            <label class="choice" for="element_7_0">any</label>
                            <input id="element_7_1" name="life_expectancy" class="element radio" type="radio" value="1" />
                            <label class="choice" for="element_7_1">less than 55</label>
                            <input id="element_7_2" name="life_expectancy" class="element radio" type="radio" value="2" />
                            <label class="choice" for="element_7_2">between 55 and 70</label>
                            <input id="element_7_3" name="life_expectancy" class="element radio" type="radio" value="3" />
                            <label class="choice" for="element_7_3">more than 70</label>
                        </span> 
                    </li>
                    
                    <li id="li_4" >
                        <label class="description" for="element_4">Government form</label>
                        <div class="govFormInfoField">
                            <input id="element_4" autocomplete="off" name="government_form" class="element text medium" type="text" maxlength="255" value=""  oninput="getNamesAJAX2()"/>
                            <ul id="govformnames">
                            </ul>
                        </div> 
                    </li>
                    
                    <li id="li_5" >
                        <label class="description" for="element_5">City count </label>
                        <div>
                            <input id="element_5" autocomplete="off" name="city_count" class="element text medium" type="text" maxlength="255" value=""/> 
                        </div> 
                    </li>
                    
<!--                    <li id="li_8" >
                        <label class="description" for="element_8">Languages </label>
                        <span>
                            <input id="languageField" name="" class="element text medium" type="text" maxlength="255" value=""/> 
                            <input id="element_8_1" name="element_8_1" class="element checkbox" type="checkbox" value="1" />
                            <label class="choice" for="element_8_1">English</label>
                            <input id="element_8_2" name="element_8_2" class="element checkbox" type="checkbox" value="1" />
                            <label class="choice" for="element_8_2">Dutch</label>
                            <input id="element_8_3" name="element_8_3" class="element checkbox" type="checkbox" value="1" />
                            <label class="choice" for="element_8_3">Papiamento</label>
                        </span> 
                    </li>-->

                    <li class="buttons">
			<input type="hidden" value="1038581"/>
                        <input id="saveForm" class="button_text" type="submit" value="Submit" />
                    </li>
                </ul>
            </form>	
        </div>
      
            <?php
        
            ?>
           
        </section>
         <br>
         <br>
         <br>
         <br>
        <div id="clock">
            <img src="../pictures/clock.jpg">
            <canvas id="myCanvas2" width="212" height="212"></canvas>
            <canvas id="myCanvas3" width="212" height="212"></canvas>
            <canvas id="myCanvas4" width="212" height="212"></canvas>
        </div>
        <script src="../js/jquery-1.11.2.min.js"></script>
        <script type="text/javascript" src="../js/form.js"></script>
        <script src="../js/newjavascript.js"></script>
        <script src="../js/ajaxScripts.js"></script>
    </body>
</html>
