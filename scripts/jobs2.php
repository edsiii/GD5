<?php
header('Content-Type: application/json');

require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';


//$franID			= $_POST["franID"];
//$cid			= $_POST["cid"]; 

$franID			= "GD00KS";
$cid			= "0532";

if ( $cid == $appCid ) {

	// edit query here 
	//$SQL_query = "SELECT idx, orderSeq, clientID, startAddr1, startCity, startState, startZip, gpsLat, gpsLon, arivalTime, departureTime, routeDesc, routeDistance, directionsTxt, routeStatus, vehicleIds, locationType, franID, delflg, eDate, lupdte, flg1 FROM jobp2 WHERE franID = '".$franID."' AND delflg = 0 ORDER BY  orderSeq;"; 	
	
	$SQL_query = "SELECT j2.idx, j2.jobID, orderSeq, clientID, startAddr1, startCity, startState, startZip, gpsLat, gpsLon, arivalTime, departureTime, routeDesc, routeDistance, directionsTxt, routeStatus, vehicleIds, j2.locationType, lt.description, lt.idx FROM jobp2 j2, locationtype lt WHERE j2.franID = '".$franID."' AND j2.delflg = 0 AND j2.locationId = lt.idx ORDER BY orderSeq ";
	
	
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
		  'jobID'   		=> $row['jobID'],
		  'orderSeq' 		=> $row['orderSeq'],
		  
		  'clientID' 		=> $row['clientID'],
		  'startAddr1' 		=> $row['startAddr1'],
		  'startCity' 		=> $row['startCity'],		  
		  'startState' 		=> $row['startState'],
		  'startZip' 		=> $row['startZip'],
		  
		  'gpsLat' 			=> $row['gpsLat'],
		  'gpsLon' 			=> $row['gpsLon'],
		  'arivalTime' 		=> $row['arivalTime'],
		  'departureTime' 	=> $row['departureTime'],
		  'routeDesc' 		=> $row['routeDesc'],
		  'routeDistance' 	=> $row['routeDistance'],
		  'directionsTxt' 	=> $row['directionsTxt'],
		  'routeStatus' 	=> $row['routeStatus'],
		  'vehicleIds' 		=> $row['vehicleIds'],
		  'locationType' 	=> $row['locationType'],

		  //'franID'      => $row['franID'],
		  //'edate' 		=> $row['edate'],
		  'status'   => 'OK',

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