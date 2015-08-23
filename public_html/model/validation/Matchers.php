<?php
require_once $_SERVER['DOCUMENT_ROOT'].'/world/vendor/autoload.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Matchers
 *
 * @author Ara
 */
class Matchers {
    
public static function MatchContinentName($continenetNum){
    $continenetName;
    switch ($continenetNum) {
    case '0':
         $continenetName='Africa';
        break;
    case '1':
         $continenetName='Antarctica';
        break;
    case '2':
         $continenetName='Asia';
        break;
    case '3':
         $continenetName='Europe';
        break;
    case '4':
         $continenetName='North America';
        break;
    case '5':
         $continenetName='Oceania';
        break;
    case '6':
         $continenetName='South America';
        break;
    default:
        $continenetName='%';
}
return $continenetName;
}
    
public static function MatchLifeExpectancyStatement($life_expectancy){
    $statement;
    switch ($life_expectancy) {
    case '0':
         $statement='';
        break;
    case '1':
         $statement='AND country.`LifeExpectancy`<= 55';
        break;
    case '2':
         $statement='AND `country`.`LifeExpectancy`>55 AND country.`LifeExpectancy`<=70';
        break;
    case '3':
         $statement='AND `country`.`LifeExpectancy`>70';
        break;
    default:
        $statement='';
}
return $statement;
}
    
}
