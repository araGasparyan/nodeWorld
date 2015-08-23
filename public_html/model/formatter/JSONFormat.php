<?php
require_once $_SERVER['DOCUMENT_ROOT'].'/world/vendor/autoload.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of AJAXJSON
 *
 * @author Ara
 */
class JSONFormat{
      
   
public static function generateJSONArray($result){

    
//    $output="";    
//    if ($result->num_rows > 0) {
//        $columns=$result->fetch_fields();
//        $output="["; 
//        while($row = $result->fetch_assoc()) {
//        foreach ($columns as $val) {
//        $output.='{"countryName":"'.$row[$val->name].'"},';
//        }
//        }
//        $output.="]"; 
//    } else {
//    return "";
//    }
//    return $output;
//    }
    
    $output="";    
    if ($result->num_rows > 0) {
        $country_names = array();
        $columns=$result->fetch_fields();
        while($row = $result->fetch_assoc()) {
        foreach ($columns as $val) {
        $country_names[count($country_names)]=$row[$val->name];
        }
        }
        $output=json_encode($country_names);
        return $output;
    } else {
    return "";
    }
    }
}










    /*
    [
   
$hint = "";

// lookup all hints from array if $q is different from "" 
if ($q !== "") {
    $q = strtolower($q);
    $len=strlen($q);
    foreach($a as $name) {
        if (stristr($q, substr($name, 0, $len))) {
            if ($hint === "") {
                $hint = $name;
            } else {
                $hint .= ", $name";
            }
        }
    }
}

// Output "no suggestion" if no hint was found or output correct values 
echo $hint === "" ? "no suggestion" : $hint;  
}
    */
    

    
    	
	

    


