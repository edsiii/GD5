<?php
header('Content-Type: application/json');

// http://localhost/GD/scripts/crews.php

require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';

//$franID			= $_POST["franID"];
$franID = 'GD00KS';
//$cid			= $_POST["cid"]; 
//$id				= $_POST["id"]; 
$id = 1;
$cid			= "0532";

if ( $cid == $appCid ) {

	// edit query here
	$SQL_query = "SELECT cr.idx, cr.jobNo, cr.jobDate, cr.rate, cr.empID, cr.franID, cr.timeTotal ,em.firstname as firstname, em.lastname, cr.title, cr.startTime, cr.endTime FROM crews cr left join employee em  ON cr.empID = em.idx WHERE cr.jobNo = $id AND cr.franID = '$franID' AND em.franID = '$franID' ORDER BY cr.title desc";
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
			'jobDate' 	=> $row['jobDate'],
			'firstname' 	=> $row['firstname'],
			'lastname' 		=> $row['lastname'],
			'title' 		=> $row['title'],
			'startTime' 	=> $row['startTime'],
			'endTime' 		=> $row['endTime'],
			'timeTotal' 	=> $row['timeTotal'],
			'franID'      	=> $row['franID'],

			'status'   => 'OK'

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