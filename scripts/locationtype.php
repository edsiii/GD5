<?php
header('Content-Type: application/json');

require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';

$franID			= $_POST["franID"];
$cid			= $_POST["cid"]; 
$mode			= $_POST["mode"];


if ( $cid == $appCid ) {
	
	$DB_link = mysqli_connect($host, $user, $pass, $database) or die("Could not connect to host.");
	$connection = mysqli_connect($host, $user, $pass, $database) or die ("Could not find or access the database.");
		
	if ( $mode == "U" ) {
		$idx			= $_POST["idx"];
		$delflg			= $_POST["delflg"];
		$desc1			= $_POST["desc1"];
		$desc2			= $_POST["desc2"];

		$SQL_query1 = "UPDATE locationtype SET delflg = ".$delflg.", description = '".$desc1."', desc2 = '".$desc2."' WHERE idx = ".$idx." ;"; 	
		$query = mysqli_query($connection,$SQL_query1);
	};
	
	if ( $mode == "D" ) {
		
	};
	
	if ( $mode == "N" ) {
		
	};
	
	// defualt query
	// edit query here 
	$SQL_query = "SELECT idx, description, desc2, franID, delflg, eDate  FROM locationtype "; //WHERE franID = '".$franID."' AND delflg = 0 ;"; 	
	$DB_link = mysqli_connect($host, $user, $pass, $database) or die("Could not connect to host.");
	$connection = mysqli_connect($host, $user, $pass, $database) or die ("Could not find or access the database.");
	// Query to run
	$query = mysqli_query($connection,$SQL_query);	
	// Create empty array to hold query results
	$someArray = [];

	if($query->num_rows > 0){
  
	  // Loop through query and push results into $someArray;
	  while ($row = mysqli_fetch_assoc($query)) {
			//echo $query->num_rows;
		array_push($someArray, [
		  'idx'   => $row['idx'],
		  
		  'desc1' 			=> $row['description'],
		  'desc2' 			=> $row['desc2'],
		  'franID'      	=> $row['franID'],
		  'delflg' 			=> $row['delflg'],
		  'eDate' 			=> $row['eDate'],
		  'status'   		=> 'OK',
		]);
	  }

	  // Convert the Array to a JSON String and echo it
	  $someJSON = json_encode($someArray);
	  echo $someJSON;

	}else{
	   array_push($someArray, [
			'status'   => 'ERROR',
			'result'   => 'xx'
		]);
		//$someJSON = json_encode($someArray);
		echo json_encode($someArray);
	};
	
	
}else{
	$someArray = [];
	array_push($someArray, [
			'status'   => 'ERROR',
			'result'   => 'xx'
		]);
	//$someJSON = json_encode($someArray);
	echo json_encode($someArray);
};// cid

?>