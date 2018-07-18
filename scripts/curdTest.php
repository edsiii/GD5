<?php
header('Content-Type: application/json');
// https://davidwalsh.name/format-date-mysql-date_format

require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';


$idx					= $_POST["idx"];
$fldA 					= $_POST["fldA"];
$fldB 					= $_POST["fldB"];// datetime

$mode 	= $_POST["mode"];
$cid 	= $_POST["cid"];
$franID	= $_POST["franID"];


/*
//TEST ZONE 
$idx			= 1;
$fldA 			= 'Record X';
$fldB 			= "2017-11-22 13:30:13";

$mode 			= 'E';
$cid 			= '0532';
$franID			= 'GD00KS';
*/


// EDIT ZONE


if ( $cid == $appCid ) {
	
	$DB_link = mysqli_connect($host, $user, $pass, $database) or die("Could not connect to host.");
	$connection = mysqli_connect($host, $user, $pass, $database) or die ("Could not find or access the database.");
	//echo $sqlA;
	switch ( $mode ) {
		case "U":
			$SQL_query = "UPDATE testtbl2 SET fldA = '$fldA', fldB = '$fldB' WHERE idx = $idx AND franID = '$franID' ;" ;
			//echo $SQL_query;
			$query = mysqli_query($connection,$SQL_query);
		break;
		case "I":
			$SQL_query = "INSERT INTO testtbl2 (fldA, fldB) VALUES('$fldA', '$fldB');";
			//echo $SQL_query;
			$query = mysqli_query($connection,$SQL_query);
		break;
		case "D":
			//$SQL_query = "DELETE FROM testtbl2 WHERE idx = $idx  ";
			$SQL_query = "UPDATE testtbl2 SET delflg = 1 WHERE idx = $idx AND franID = '$franID' ;" ;
			//echo $SQL_query;
			$query = mysqli_query($connection,$SQL_query);
		break;		
	};
	

	
	$SQL_query = "SELECT idx, fldA, fldB FROM testtbl2 WHERE franID = '$franID' AND delflg = 0; ";
	$query = mysqli_query($connection,$SQL_query);	
	$someArray = [];
	if($query->num_rows > 0){		  
	  // Loop through query and push results into $someArray;
		while ($row = mysqli_fetch_assoc($query)) {
			//echo $query->num_rows;
			//EDS EDIT HERE
			array_push($someArray, [
			  'idx'   				=> $row['idx'],
			  
			  // edit fields
			  'fldA' 				=> $row['fldA'],
			  'fldB' 				=> $row['fldB'],
			  
			  'status'				=> 'OK'
			]);
		}
	
	}
	// Convert the Array to a JSON String and echo it
	$someJSON = json_encode($someArray);
	echo $someJSON;

		
}else{
	$someArray = [];
		array_push($someArray, [
			'status'   => 'SECURITY ERROR',
			'result'   => 'xx'
		]);		
		$someJSON = json_encode($someArray);
		echo json_encode($someArray);
};

?>