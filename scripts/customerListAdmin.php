<?php
header('Content-Type: application/json');

require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';

$franID			= "GD00KS";//$_POST["franID"];
$cid			= "0532";//$_POST["cid"]; 
$mode			= "G";//$_POST["mode"];
//$jobID			= $_POST["jobID"];

if ( $cid == $appCid ) {

	$DB_link = mysqli_connect($host, $user, $pass, $database) or die("Could not connect to host.");
	$connection = mysqli_connect($host, $user, $pass, $database) or die ("Could not find or access the database.");
		
	if ( $mode == "U" ) {
		$idx			= $_POST["idx"];
		//$startAddr1		= $_POST["startAddr1"];
		$startZip			= $_POST["startZip"];
		//$desc2			= $_POST["desc2"];

		//$SQL_query1 = "UPDATE jobp2 SET startZip = '".$startZip."' WHERE idx = ".$idx." ;"; 	
		$query = mysqli_query($connection,$SQL_query1);
	};
	
	if ( $mode == "D" ) {
		
	};
	
	if ( $mode == "N" ) {
		
	};
	
	$SQL_query = "SELECT idx, active, business_name, contact1_firstname, contact1_lastname, contact2_firstname, contact2_lastname FROM clients WHERE franID = '".$franID."' AND delflg = 0 ";
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
		  'idx'   			=> $row['idx'],
		  'active'   		=> $row['active'],
		  'business_name' 		=> $row['business_name'],
		  
		  'contact1_firstname' 		=> $row['contact1_firstname'],
		  'contact1_lastname' 		=> $row['contact1_lastname'],
		  'contact2_firstname' 		=> $row['contact2_firstname'],
		  'contact2_lastname' 		=> $row['contact2_lastname'],


		  'status'  		 => 'OK',

		  // end add columns	
		  //'delflg' 		=> $row['delflg'],
		  //'edate' 		=> $row['edate'],
		  //'flg1' 		=> $row['flg1']
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
			'status'   => 'SECURITY ERROR',
			'result'   => 'xx'
		]);
		//$someJSON = json_encode($someArray);
		echo json_encode($someArray);
};

?>