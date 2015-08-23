<?php
require_once $_SERVER['DOCUMENT_ROOT'].'/world/vendor/autoload.php';
//The interface should be implemented by every class which passes through the third argument
//of static method generateTable of class generateHTML.
interface AdditionalTd {
    public function addTd($tdCount);
    public function addHeaderTd($tdCount);
}
