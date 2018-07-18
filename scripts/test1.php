<?php
header('Content-Type: application/json');

require './phpDBConfig.php';
require './phpSecurity.php';

//$host       	= "localhost";
//$user      		= "greatday_appUser";
//$pass       	= "xGiXU18zXz6jTgM4";
//$database   	= "greatday_test";


//$loginName		= $_POST["loginName"];
//pwd			= $_POST["pwd"];
//$franID			= $_POST["franID"];
$cid			= "0532"; //$_POST["cid"]; 

//if ( $cid == $appCid ) {

	// edit query here
	$SQL_query = "SELECT idx, userID, franID, FirstName, LastName, email, phone1, accessLevel FROM users "; 	
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
		  // add columns here
		  
		  'userID' 		=> $row['userID'],
		  'FirstName' 	=> $row['FirstName'],
		  'LastName' 	=> $row['LastName'],

		  // end add columns
		  'status'   	=> 'OK',
		  'franID' 		=> $row['franID'],
		  'email'		=> $row['email'],
		  'phone1'		=> $row['phone1'],
		  'accessLevel' => $row['accessLevel']
		  
		  //'delflg' 		=> $row['delflg'],
		  //'uid' 		=> $row['uid'],
		  //'edate' 		=> $row['edate'],
		  //'lupdte' 		=> $row['lupdte'],
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
	


?>