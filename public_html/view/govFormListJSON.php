<?php
require_once $_SERVER['DOCUMENT_ROOT'].'/world/vendor/autoload.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/world/controller/Control.php';

session_start();

  if(empty($_SESSION['userName'])){
      header("Location: ../index.php");
      echo $_SERVER['userName'];
  }

// get the q parameter from URL, the parameter q is the start of the regions
//$q = ;
echo Control::AutoCompleteGovFormJSON($_REQUEST['q'],3);