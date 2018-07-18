<?php
header('Content-Type: application/json');
// https://davidwalsh.name/format-date-mysql-date_format

require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';

//$idx		= $_POST["i"];
//$mode 		= $_POST["mode"];
//$franID		= $_POST["franID"];
//$cid 		= $_POST["cid"];
//$sqlA		= $_POST["qStr1"];//"INSERT INTO vehicle (trucknumber, truckname, truckcolor, franID, delflg, uid, eDate, lupdte, flg1) VALUES (88888, 'ESTIMATE', 10, 'GD00KS', 0, 0, '2017-10-22 15:20:18', '2017-10-22 11:20:18', 'A'); "; 
//$sqlB		= $_POST["qStr2"]; //"SELECT idx, trucknumber, truckname, truckcolor FROM vehicle"; 


//EDS 
$cid 		= '0532';
$mode 		= 'I';
$franID		= 'GD00KS';
$sqlA		= "INSERT INTO vehicle (trucknumber, truckname, truckcolor, franID) VALUES (88888, 'ESTIMATE', 10, 'GD00KS'); "; 
$sqlB		= "SELECT idx, trucknumber, truckname, truckcolor FROM vehicle"; 


if ( $cid == $appCid ) {
	
	$DB_link = mysqli_connect($host, $user, $pass, $database) or die("Could not connect to host.");
	$connection = mysqli_connect($host, $user, $pass, $database) or die ("Could not find or access the database.");
	//echo $sqlA;
	switch ( $mode ) {
		case "U":
			$SQL_query = "UPDATE caldata1 SET description = '".$descript."', startD = '$timestamp1', endD = '$timestamp2' WHERE id = ".$id." ";//AND ownerId = '".$franID."' AND delflg = 0; "; 	
			$query = mysqli_query($connection,$SQL_query);
		break;
		case "I":
			$SQL_query = $sqlA;
			$query = mysqli_query($connection,$SQL_query);
		break;	
		case "D":
			$id 		= $_POST["id"];
			$SQL_query = "UPDATE caldata1 SET delflg = 1 WHERE id = ".$id." "; 	
			$query = mysqli_query($connection,$SQL_query);
		break;

		case "G":
			//$id 		= $_POST["id"];
			$SQL_query = $sqlB;
			$query = mysqli_query($connection,$SQL_query);	
			$someArray = [];
			if($query->num_rows > 0){		  
			  // Loop through query and push results into $someArray;
				while ($row = mysqli_fetch_assoc($query)) {
					echo $query->num_rows;
					array_push($someArray, [
					  'idx'   				=> $row['idx'],
					  'status'				=> 'OK'
					]);					
				}			
			}
			// Convert the Array to a JSON String and echo it
			$someJSON = json_encode($someArray);
			echo $someJSON;
		break;
		
		default:
			$SQL_query = $sqlB;
			$query = mysqli_query($connection,$SQL_query);	
			$someArray = [];
			if($query->num_rows > 0){		  
			  // Loop through query and push results into $someArray;
				while ($row = mysqli_fetch_assoc($query)) {
					echo $query->num_rows;
					//EDS EDIT HERE
					array_push($someArray, [
					  'idx'   				=> $row['idx'],
					  'status'				=> 'OK'
					]);
				}
			
			}
			// Convert the Array to a JSON String and echo it
			$someJSON = json_encode($someArray);
			echo $someJSON;
		break;
	};
		
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