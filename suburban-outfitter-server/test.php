<?php
 header("Access-Control-Allow-Origin: *");
class User{
    public $name, $age ,$city;

}

$myObj = new User;

$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";

$myJSON = json_encode($myObj);

echo $myJSON;
?>