<?php
header('Content-Type: application/json');

require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';


$franID			= $_POST["franID"];
$cid			= $_POST["cid"];
$jobID			= $_POST["jobID"]; 

//$franID			= "GD00KS";
//$cid			= "0532";
//jobID			= 1; //$_POST["jobID"];

if ( $cid == $appCid ) {

	// edit query here 
	//$SQL_query = "SELECT idx, orderSeq, clientID, startAddr1, startCity, startState, startZip, gpsLat, gpsLon, arivalTime, departureTime, routeDesc, routeDistance, directionsTxt, routeStatus, vehicleIds, locationType, franID, delflg, eDate, lupdte, flg1 FROM jobp2 WHERE franID = '".$franID."' AND delflg = 0 ORDER BY  orderSeq;"; 	
	
	//$SQL_query = "SELECT j2.idx, j2.jobID, orderSeq, clientID, startAddr1, startCity, startState, startZip, gpsLat, gpsLon, arivalTime, departureTime, routeDesc, routeDistance, directionsTxt, routeStatus, vehicleIds, j2.locationType, lt.description, lt.idx FROM jobp2 j2, locationtype lt WHERE j2.franID = '".$franID."' AND j2.delflg = 0 AND j2.locationId = lt.idx AND j2.jobID = ".$jobID." ORDER BY orderSeq ";
	
	$d1 = "SELECT j2.idx, j2.jobID, orderSeq, j0.clientID, startAddr1, startCity, startState, ";
	$d2 = "startZip, gpsLat, gpsLon, arivalTime, departureTime, routeDesc, ";
	$d3 = "routeDistance, directionsTxt, routeStatus, vehicleIds, j2.locationType, ";
	$d4 = "j0.clientID, j0.FirstName, j0.LastName, j0.phone1, j0.phone2, j0.email, ";
	$d5 = "lt.description, lt.idx ";
	$d6 = "FROM jobp2 j2 ";
	$d7 = "inner join locationtype lt ON lt.idx = j2.locationId ";
	$d8 = "inner join jobp1 j0 ON j2.jobID = j0.idx ";
	$d9 = "WHERE j2.franID = '".$franID."'  ";
	$d10 = "AND j2.delflg = 0 ";
	$d11 = "AND j2.jobID = ".$jobID." ";
	$d12 = " ORDER BY orderSeq";
	
	$SQL_query = $d1.$d2.$d3.$d4.$d5.$d6.$d7.$d8.$d9.$d10.$d11.$d12;
	
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
		  
		  'FirstName' 		=> $row['FirstName'],
		  'LastName' 		=> $row['LastName'],
		  'phone1' 			=> $row['phone1'],
		  
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
			'status'   => 'ERROR '.$SQL_query,
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