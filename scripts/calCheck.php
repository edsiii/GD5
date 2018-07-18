<?php
header('Content-Type: application/json');

//require './phpDBConfig.php';
//require './phpSecurity.php';
$dd = $_POST["d"];

$post = file_get_contents('php://input');
//file_put_contents('Atest.txt', file_get_contents('php://input'));
$json_string = json_encode($_POST);

file_put_contents('Atest.txt', $json_string." ".$dd );
echo $post;

?>