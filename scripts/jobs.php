<?php
header('Content-Type: application/json');

require './phpDBConfig.php';
require './phpSecurity.php';

//$franID			= $_POST["franID"];
//$cid			= $_POST["cid"]; 
//$cid			= "0532";

if ( $cid == $appCid ) {

	// edit query here 
	$SQL_query = "SELECT idx, userID, clientID, FirstName, LastName, addr1, city, state, zipcode FROM job1 WHERE "; //franchise = '".$franID."' AND delflg = 0 ;"; 	
	$DB_link = mysqli_connect($host, $user, $pass, $database) or die("Could not connect to host.");
	$connection = mysqli_connect($host, $user, $pass, "test") or die ("Could not find or access the database.");
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
		  
		  'userID' 		=> $row['userID'],
		  'clientID' 	=> $row['clientID'],
		  'FirstName' 	=> $row['FirstName'],
		  'LastName' 	=> $row['LastName'],
		  
		  'addr1' 	=> $row['addr1'],
		  'city' 		=> $row['city'],
		  'state' 		=> $row['state'],
		  'zipcode' 	=> $row['zipcode'],
		  'phone1' 		=> $row['phone1'],
		  'phone2' 		=> $row['phone2'],
		  'phone3' 		=> $row['phone3'],
		  //'gps' 		=> $row['gps'],

		  'franID'      => $row['franID'],
		  'edate' 		=> $row['edate'],
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