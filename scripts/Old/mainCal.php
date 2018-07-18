<?php
require 'empConfig.php';

header("Content-type: application/json", true);

$userID		= $_POST['userID'];

// DATE_FORMAT(NOW(),'%b %d %Y %h:%i %p')
// DONOT CHANGE
$linkID = mysql_connect($host, $user, $pass) or die("Could not connect to host.");
mysql_select_db($database, $linkID) or die("Could not find database.");
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
	FROM mainCalendar 
	WHERE delYN = 0 AND userId = '$userID' ";
$resultID = mysql_query($SQL_query, $linkID) or die("Data not found.");

$output = '';
$output .= '[';
$z = mysql_num_rows($resultID);
$cnt =1;
// "TaskID":4,"OwnerID":2,"Title":"Bowling tournament","Description":"","StartTimezone":null,"Start":"\/Date(1370811600000)\/","End":"\/Date(1370822400000)\/","EndTimezone":null,"RecurrenceRule":null,"RecurrenceID":null,"RecurrenceException":null,"IsAllDay":false}
for($x = 0 ; $x < mysql_num_rows($resultID) ; $x++){
    $row = mysql_fetch_assoc($resultID);
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
?>