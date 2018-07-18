<?php
header('Content-Type: application/json');

require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';

//$franID			= $_POST["franID"];
//$cid			= $_POST["cid"]; 
//$cid			= "0532";

//userID		= $_POST['userID'];

// DATE_FORMAT(NOW(),'%b %d %Y %h:%i %p')

$SQL_query = "SELECT 
	idx, 
	officeId,
	start, 
	end,
	title,
	description,
	userId,
	userName,
	flg1,
	eDate,
	delYN 
	FROM mainCalendar ";
	//WHERE delYN = 0 AND userId = '$userID' ";


	$DB_link = mysqli_connect($host, $user, $pass, $database) or die("Could not connect to host.");
	$connection = mysqli_connect($host, $user, $pass, $database) or die ("Could not find or access the database.");
	// Query to run
	$query = mysqli_query($connection,$SQL_query);	
	// Create empty array to hold query results
	$someArray = [];

  if($query->num_rows > 0){
  
	  // Loop through query and push results into $someArray;
	  while ($row = mysqli_fetch_assoc($query)) {
			echo $query->num_rows;
		array_push($someArray, [
		  'id' 		=> $row['idx'],
		  'start' 	=> $row['start'],
		  'end' 	=> $row['end'],
		  'title' 	=> $row['title'],
		  'description' 	=> $row['description'],
		  'userId' 	=> $row['userId'],
		  'userName' 	=> $row['userName'],
		  'eDate' 	=> $row['eDate']

		  // end add columns
		  //'status'   	=> 'OK',
			
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
	
}

else{

	$someArray = [];
	array_push($someArray, [
			'status'   => 'SECURITY ERROR',
			'result'   => 'xx'
		]);
		//$someJSON = json_encode($someArray);
		echo json_encode($someArray);
};

  
  /*
if($query->num_rows > 0){
	
$output = '';
$output .= '[';
$z = mysql_num_rows(($query);
$cnt =1;
// "TaskID":4,"OwnerID":2,"Title":"Bowling tournament","Description":"","StartTimezone":null,"Start":"\/Date(1370811600000)\/","End":"\/Date(1370822400000)\/","EndTimezone":null,"RecurrenceRule":null,"RecurrenceID":null,"RecurrenceException":null,"IsAllDay":false}
for($x = 0 ; $x < mysql_num_rows(($query) ; $x++){
    $row = mysql_fetch_assoc(($query);
	if ( $cnt == $z ) {
		$output .= '{
			"id":"'.$row['idx'].'",
			"start":"'.$row['start'].'",
			"end":"'.$row['end'].'",
			"title":"'.$row['title'].'",
			"description":"'.$row['description'].'",
			"userId":"'.$row['userId'].'",
			"userName":"'.$row['userName'].'",
			"eDate":"'.$row['eDate'].'"
		}';
	} else{
		$output .= '{
			"id":"'.$row['idx'].'",
			"start":"'.$row['start'].'",
			"end":"'.$row['end'].'",
			"title":"'.$row['title'].'",
			"description":"'.$row['description'].'",
			"userId":"'.$row['userId'].'",
			"userName":"'.$row['userName'].'",
			"eDate":"'.$row['eDate'].'"
		},';
	};
	$cnt++;
}
$output .= ']';

echo $output;
} }else{
	   array_push($someArray, [
			'status'   => 'ERROR',
			'result'   => 'xx'
		]);
		//$someJSON = json_encode($someArray);
		echo json_encode($someArray);
  };
	
}

else{

	$someArray = [];
	array_push($someArray, [
			'status'   => 'SECURITY ERROR',
			'result'   => 'xx'
		]);
		//$someJSON = json_encode($someArray);
		echo json_encode($someArray);
};
*/

?>