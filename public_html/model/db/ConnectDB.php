<?php
require_once $_SERVER['DOCUMENT_ROOT'].'/world/model/validation/Matchers.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/world/vendor/autoload.php';

//The objects of the class are used for connecting to the mysql database, and for queris
class ConnectDB {
    //The following variables incapsulates connection parametrs to a database
    private $ip=""; 
    private $user="";
    private $password="";
    private $database="";
    private $con="";
    //The variables incapsulates queris and results of the database
    private $sql="";
    private $result;
    
    function getResult() {
        return $this->result;
    }

    function setResult($result) {
        $this->result = $result;
    }

    function getSql() {
        return $this->sql;
    }

    function setSql($sql) {
        $this->sql = $sql;
    }
 
    public function getCon(){
        return $this->con;
    }
    
    function setCon($con) {
        $this->con = $con;
    }

    function __construct($ip, $user, $password, $database) {
        $this->ip = $ip;
        $this->user = $user;
        $this->password = $password;
        $this->database = $database;
        $this->con = new mysqli($ip, $user, $password, $database);
        mysqli_query($this->con,"SET NAMES 'utf8'");
        mysqli_query($this->con,"SET CHARACTER SET utf8");
        mysqli_query($this->con,"SET COLLATION_CONNECTION = 'utf8_unicode_ci'");
        if ($this->con->connect_error) {
            die("Connection failed: " . $this->con->connect_error);
        }
               
    }
    
    //The method returns mysql query-result of the countries which have greather population than $lower
    function getCouyntriesByPop($lower){
        $this->sql="SELECT `country`.`Name`, `country`.`Population` FROM country WHERE `country`.`Population`>='".$lower."';";
        $this->result=$this->con->query($this->sql);
        $this->con->close();
        return $this->result;
    }
    
    
    
    
    
    
    function  findOrderedCountries($continent, $region, $surface_min, $surface_max, $population_min, $population_max, $life_expectancy, $government_form, $city_count, $languages){
        $this->sql="SELECT country.`Name` 
                    FROM `country`  
                    LEFT JOIN `countrylanguage` ON `country`.`Code`=`countrylanguage`.`CountryCode` LEFT JOIN 
                    (SELECT COUNT(city.`CountryCode`) AS cityCount, country.`Code` AS CountryCode FROM
                     `country` LEFT JOIN `city` ON `country`.`Code` = `city`.`CountryCode`
                     GROUP BY `country`.`Code`) AS tmp 
                    ON `country`.`Code`=tmp.CountryCode 
                    
                    where `country`.`Continent` LIKE '". Matchers::MatchContinentName($continent)."' AND `country`.`Region` LIKE '".$region."' AND `country`.`GovernmentForm` LIKE '".$government_form."' ".
                    Matchers::MatchLifeExpectancyStatement($life_expectancy).
                    " AND `country`.`Population`>='".$population_min."' AND country.`Population`<='".$population_max."' ".
                    "AND `country`.`SurfaceArea` >= '".$surface_min."' AND `country`.`SurfaceArea` <='".$surface_max."' ".
                    "AND cityCount>=".$city_count.
                    " GROUP BY country.`Name`;";
        //echo  $this->sql;
        $this->result=$this->con->query($this->sql);
        $this->con->close();
        return $this->result;
    }
   
    
  
}
