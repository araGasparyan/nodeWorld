<?php
require_once $_SERVER['DOCUMENT_ROOT'].'/world/model/db/ConnectDB.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/world/model/formatter/GenerateHTML.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/world/model/formatter/JSONFormat.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/world/controller/ProjectGlobals.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/world/vendor/autoload.php';
//This class is a container of methods which are called from view folders
class Control {
    
//The method returns table of the cities of the $country
static function findCitiesOf($country){
    $cities=new Cities(1);
    $con=new ConnectDB(ProjectGlobals::$IPADDRESS, ProjectGlobals::$USER, ProjectGlobals::$PASSWORD, ProjectGlobals::$DATABASE);
    $result=$con->getCitiesOfTheCountry($country);
    $output=GenerateHTML::generateTable($result, 'cityClass',$cities);
    return $output;
}

//The method authorize the user
static function authorization($login,$password){
    $pages=array('?','view/home.php');
    $con=new ConnectDB(ProjectGlobals::$IPADDRESS, ProjectGlobals::$USER, ProjectGlobals::$PASSWORD, ProjectGlobals::$DATABASE);
    $loc=$con->checkLogin($login, $password, $pages);
    if($loc==$pages[1]){
    header("Location: $loc");
    }
}

//Is not used yet
static function findCountriesByPop($lower){
    $con=new ConnectDB(ProjectGlobals::$IPADDRESS, ProjectGlobals::$USER, ProjectGlobals::$PASSWORD, ProjectGlobals::$DATABASE);
    $result=$con->getCouyntriesByPop($lower);
    $output=GenerateHTML::generateTable($result, 'countriesByPop',null);
    return $output;
} 

//The method returns an associative array which include info about $country
static function CountryInfo($country){
    $con=new ConnectDB(ProjectGlobals::$IPADDRESS, ProjectGlobals::$USER, ProjectGlobals::$PASSWORD, ProjectGlobals::$DATABASE);
    $result=$con->getCountryInfo($country);
    $output=GenerateHTML::generateCountryInfoHTML($result);
    return $output;
}

//The method returns table of the languages of the $country
static function LanguagesOf($country){
    $con=new ConnectDB(ProjectGlobals::$IPADDRESS, ProjectGlobals::$USER, ProjectGlobals::$PASSWORD, ProjectGlobals::$DATABASE);
    $result=$con->getLanguages($country);
    $output=GenerateHTML::generateTable($result,'languageClass',null);
    return $output;
}

//The method returns JSON of the list of countries which begin with letter $letter. The length of the list is equal to $limit
static function AutoCompleteCountriesJSON($letter, $limit){
    if($letter!=""){
    $con=new ConnectDB(ProjectGlobals::$IPADDRESS, ProjectGlobals::$USER, ProjectGlobals::$PASSWORD, ProjectGlobals::$DATABASE);
    $result=$con->getCountriesWithLetter($letter, $limit);
    $output=JSONFormat::generateJSONArray($result);
    return $output;
    }
}

//The method returns JSON of the list of regions which begin with letter $letter. The length of the list is equal to $limit
static function AutoCompleteRegionsJSON($letter, $limit, $continent){
    if($letter!=""){
    $con=new ConnectDB(ProjectGlobals::$IPADDRESS, ProjectGlobals::$USER, ProjectGlobals::$PASSWORD, ProjectGlobals::$DATABASE);
    $result=$con->getRegionsWithLetter($letter, $limit, $continent);
    $output=JSONFormat::generateJSONArray($result);
    return $output;
    }
}
   
//The method returns JSON of the list of goverment forms which begin with letter $letter. The length of the list is equal to $limit
static function AutoCompleteGovFormJSON($letter, $limit){
     if($letter!=""){
    $con=new ConnectDB(ProjectGlobals::$IPADDRESS, ProjectGlobals::$USER, ProjectGlobals::$PASSWORD, ProjectGlobals::$DATABASE);
    $result=$con->getGovFormsWithLetter($letter, $limit);
    $output=JSONFormat::generateJSONArray($result);
    return $output;
    }
}

//The method returns list of the countries which are suggested to the user
static function findOrderedCountries($continent, $region, $surface_min, $surface_max, $population_min, $population_max, $life_expectancy, $government_form, $city_count, $languages) {
    if($continent==""){$continent='-1';}
    if($region==""){$region='%';}
    if($surface_min==""){$surface_min='-1';}
    if($surface_max==""){ $surface_max='9000000000';}
    if($population_min==""){$population_min='-1';}
    if($population_max==""){$population_max='9000000000';}
    if($life_expectancy==""){$life_expectancy="-1";}
    if($government_form==""){$government_form='%';}
    if($city_count==""){$city_count='-1';}
    //if(empty($languages)){echo 'ba aper';}
    $con=new ConnectDB(ProjectGlobals::$IPADDRESS, ProjectGlobals::$USER, ProjectGlobals::$PASSWORD, ProjectGlobals::$DATABASE);
    $result=$con->findOrderedCountries($continent, $region, $surface_min, $surface_max, $population_min, $population_max, $life_expectancy, $government_form, $city_count, $languages);
    $output=GenerateHTML::generateList($result,'countryInfo.php?country');
    return $output;
}
  




}








