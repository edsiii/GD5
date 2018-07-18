<?php
header('Content-Type: application/json');
// https://davidwalsh.name/format-date-mysql-date_format

require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';


$idx					= $_POST["idx"];
$trucknumber 			= $_POST["trucknumber"];
$truckname 				= $_POST["truckname"];
$truckmodel 			= $_POST["truckmodel"];
$description 			= $_POST["description"];
$milage 				= $_POST["milage"];
$status 				= $_POST["status"];
$lastMaintanceCheck 	= $_POST["lastMaintanceCheck"];

$mode 	= $_POST["mode"];
$cid 	= $_POST["cid"];
$franID	= $_POST["franID"];


/*
//TEST ZONE 
$idx			= 52;
$trucknumber 	= '32551';
$truckname 		= "ABC1gggg";
$truckmodel 			= "truckmodel";
$description 			= "description";
$milage 				= 23.8;
$status 				= "status";
$lastMaintanceCheck 	= "2017-11-22 13:30:13";

$mode 			= 'X';
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
			$SQL_query = "UPDATE vehicle SET truckname = '$truckname', truckmodel = '$truckmodel', trucknumber = '$trucknumber', truckmodel = '$truckmodel', description = '$description', milage = $milage, status = '$status', lastMaintanceCheck = '$lastMaintanceCheck' WHERE idx = $idx AND franID = '$franID' ;" ;
			//echo $SQL_query;
			$query = mysqli_query($connection,$SQL_query);
		break;
		case "I":
			$SQL_query = "INSERT INTO vehicle (trucknumber, truckname, truckmodel, description, milage, status, lastMaintanceCheck, franID) VALUES('$trucknumber', '$truckname', '$truckmodel', '$description', $milage, '$status', '$lastMaintanceCheck', '$franID');";
			//echo $SQL_query;
			$query = mysqli_query($connection,$SQL_query);
		break;
		case "D":
			$SQL_query = "DELETE FROM vehicle WHERE idx = $idx  ";
			//echo $SQL_query;
			$query = mysqli_query($connection,$SQL_query);
		break;		
	};
	

	
	$SQL_query = "SELECT idx, trucknumber, truckname, truckmodel, description, milage, status, lastMaintanceCheck FROM vehicle WHERE franID = '$franID' ; ";
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
			  'trucknumber' 		=> $row['trucknumber'],
			  'truckname' 			=> $row['truckname'],
			  'truckmodel' 			=> $row['truckmodel'],
			  'description' 		=> $row['description'],
			  'milage' 				=> $row['milage'],
			  'vStatus' 			=> $row['status'],
			  'lastMaintanceCheck' 	=> $row['lastMaintanceCheck'],
			  
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