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
		$trucknumber	= $_POST["trucknumber"];
		$truckmodel		= $_POST["truckmodel"];
		$description 	= $_POST['description'];
		$status  		= $_POST["status"];
		$lastMaintanceCheck = $_POST["lastMaintanceCheck"];
		$truckname		= $_POST["truckname"];
		
		$SQL_query = "UPDATE vehicle SET truckmodel = '".$truckmodel."', trucknumber = '".$trucknumber."', description = '".$description."', status = ".$status.", lastMaintanceCheck = '".$lastMaintanceCheck."', truckname = '".$truckname."' WHERE idx = '".$idx."'; " ;
		// Query to run
		$query = mysqli_query($connection,$SQL_query);
	};
	
	
	if ( $mode == "D" ) {
		$idx			= $_POST["idx"];
		
	};
	
	if ( $mode == "N" ) {
		
	};
	
	
	//$DB_link = mysqli_connect($host, $user, $pass, $database) or die("Could not connect to host.");
	//$connection = mysqli_connect($host, $user, $pass, $database) or die ("Could not find or access the database.");
	// Query to run
	// edit query here 
	$SQL_query = "";
	$SQL_query = "SELECT idx, trucknumber, truckname, truckmodel, description, mileage, status, lastMaintanceCheck, delflg, lupdte, flg1, franID  FROM vehicle WHERE franID = '".$franID."' AND delflg = 0 ;"; 	
	
	$query = mysqli_query($connection,$SQL_query);	
	// Create empty array to hold query results
	$someArray = [];

	if($query->num_rows > 0){
  
	  // Loop through query and push results into $someArray;
	  while ($row = mysqli_fetch_assoc($query)) {
			//echo $query->num_rows;
		array_push($someArray, [
			'idx'   				=> $row['idx'],
		  
			'trucknumber' 			=> $row['trucknumber'],
			'truckname' 			=> $row['truckname'],	
			'truckmodel' 			=> $row['truckmodel'],
			'description' 			=> $row['description'],	
			'mileage' 				=> $row['mileage'],
			'vehicleStatus' 		=> $row['status'],
			'lastMaintanceCheck' 	=> $row['lastMaintanceCheck'],
		    'franID'      			=> $row['franID'],
			'delflg'      			=> $row['delflg'],
			'lupdte'      			=> $row['lupdte'],
			'flg1'      			=> $row['flg1'],
			
		    'status'   => 'OK'

		  // end add columns	
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