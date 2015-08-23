<?php
require_once $_SERVER['DOCUMENT_ROOT'].'/world/vendor/autoload.php';
//Not used yet
class FindCSSClass {
    
function __construct() {
        
}
    
public function findContinent($target){
    $continenetNum;
    switch ($target) {
    case 'Africa':
         $continenetNum=0;
        break;
    case 'Antarctica':
         $continenetNum=1;
        break;
    case 'Asia':
         $continenetNum=2;
        break;
    case 'Europe':
         $continenetNum=3;
        break;
    case 'North America':
         $continenetNum=4;
        break;
    case 'Oceania':
         $continenetNum=5;
        break;
    case 'South America':
         $continenetNum=6;
        break;
    default:
        $continenetNum=-1;
}
return $continenetNum;
}
    
    
    
}
