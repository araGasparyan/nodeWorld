<?php
require_once $_SERVER['DOCUMENT_ROOT'].'/world/model/formatter/AdditionalTd.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/world/vendor/autoload.php';
//The objects of this class are used generating additional icon td-s, in the city representation table of the given country
class Cities implements AdditionalTd {
    //The variable incapsulates coloumn count, which should be add to a given table
    private $tdCount;
    
    //The variable incapsulates data from which the data should be taken in order to add in the corresponding td
    private $row;
    
    public function setRow($row) {
        $this->row = $row;
    }

    public function getTdCount() {
        return $this->tdCount;
    }
            
    function __construct($tdCount) {
        $this->tdCount = $tdCount;
    }
    
    //The method indicates how to add header of the corresponding coloumn
    public function addHeaderTd($tdCount) {
        $tdCount= $this->tdCount;
        $output="";
        for($i=0;$i<$tdCount;$i++){
            $output.="<td>".'Icon'."</td>";
        }
        return $output;
    }
    
    //The method indicates how to add td-s of the corresponding coloumn 
    public function addTd($tdCount) {
        $tdCount= $this->tdCount;
        $output="";
        for($i=0;$i<$tdCount;$i++){
            if($this->row['Population']<=100000){
                $output.="<td class='town'></td>";
            }
            else if(100000<$this->row['Population']&&$this->row['Population']<=1000000){
                $output.="<td class='city'></td>";
            }
            else{
                $output.="<td class='bigCity'></td>";
            }
        }
        return $output;
    }

}
