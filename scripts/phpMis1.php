<?php
header('Content-Type: application/json');

require './Required/phpDBConfig.php';
require './Required/phpSecurity.php';

$franID = 'GD00KS'; //$_POST['franID'];

	$DB_link = mysqli_connect($host, $user, $pass, $database) or die("Could not connect to host.");
	$connection = mysqli_connect($host, $user, $pass, $database) or die ("Could not find or access the database.");
	
	$SQL_query = "SELECT id, name, abbreviations FROM states;"; 	
	$query = mysqli_query($connection,$SQL_query);	
	$someArray = [];
	if($query->num_rows > 0){
		$cnt = 1;
		$someArray = '{';
		$someArray .= '"states":[';//EDIT
		while ($row = mysqli_fetch_assoc($query)) {
			if ( $cnt != $query->num_rows ) { 
				$someArray .= '{ "idx": '.$row['id'].', "name": "'.$row['name'].'", "abbreviations": "'.$row['abbreviations'].'"},';//EDIT
			}else{
				$someArray .= '{ "idx": '.$row['id'].', "name": "'.$row['name'].'", "abbreviations": "'.$row['abbreviations'].'"}';//EDIT
			};
			$cnt++;
		}
		$someArray .= ']';
	};
	// end
	
	// 2	
	$SQL_query = "SELECT idx, description, desc2, eDate, lupdte FROM locationtype ;"; 	
	$query = mysqli_query($connection,$SQL_query);	
		
	if($query->num_rows > 0){
		$cnt = 1;
		$someArray .= ',';
		$someArray .= '"locationTyps":[';//EDIT
		while ($row = mysqli_fetch_assoc($query)) {
			if ( $cnt != $query->num_rows ) { 
				$someArray .= '{ "idx": '.$row['idx'].', "description": "'.$row['description'].'", "desc2": "'.$row['desc2'].'", "eDate": "'.$row['eDate'].'", "lupdte": "'.$row['lupdte'].'" },';//EDIT
			}else{
				$someArray .= '{ "idx": '.$row['idx'].', "description": "'.$row['description'].'", "desc2": "'.$row['desc2'].'", "eDate": "'.$row['eDate'].'", "lupdte": "'.$row['lupdte'].'" }';//EDIT
			};
			$cnt++;
		}
		$someArray .= ']';
	};
	// end 2
	
	// 3
	$SQL_query = "";
	$SQL_query = "SELECT idx, userID, FirstName, LastName, pwd, accessLevel, active FROM users ;"; 	
	$query = mysqli_query($connection,$SQL_query);	
		
	if($query->num_rows > 0){
		$cnt = 1;
		$someArray .= ',';
		$someArray .= '"users2":[';//EDIT
		while ($row = mysqli_fetch_assoc($query)) {
			if ( $cnt != $query->num_rows ) { 
				$someArray .= '{ "idx": '.$row['idx'].', "userID": "'.$row['userID'].'", "FirstName": "'.$row['FirstName'].'", "LastName": "'.$row['LastName'].'", "pwd": "'.$row['pwd'].'", "active": "'.$row['active'].'" },';//EDIT
			}else{
				$someArray .= '{ "idx": '.$row['idx'].', "userID": "'.$row['userID'].'", "FirstName": "'.$row['FirstName'].'", "LastName": "'.$row['LastName'].'", "pwd": "'.$row['pwd'].'", "active": "'.$row['active'].'" }';//EDIT
			};
			$cnt++;
		}
		$someArray .= ']';
	};
	// end 3
	
	// 4
	$SQL_query = "";
	$SQL_query = "SELECT idx, itemid, descript, price, qnotes, updatedbyid FROM i_splist ;"; 	
	$query = mysqli_query($connection,$SQL_query);	
		
	if($query->num_rows > 0){
		$cnt = 1;
		$someArray .= ',';
		$someArray .= '"spItemsList":[';//EDIT
		while ($row = mysqli_fetch_assoc($query)) {
			if ( $cnt != $query->num_rows ) { 
				$someArray .= '{ "idx": '.$row['idx'].', "itemid": "'.$row['itemid'].'", "descript": "'.$row['descript'].'", "price": "'.$row['price'].'", "qnotes": "'.$row['qnotes'].'", "updatedbyid": "'.$row['updatedbyid'].'" },';//EDIT
			}else{
				$someArray .= '{ "idx": '.$row['idx'].', "itemid": "'.$row['itemid'].'", "descript": "'.$row['descript'].'", "price": "'.$row['price'].'", "qnotes": "'.$row['qnotes'].'", "updatedbyid": "'.$row['updatedbyid'].'" }';//EDIT
			};
			$cnt++;
		}
		$someArray .= ']';
	};
	// end 4
	
	// 5
	$SQL_query = "";
	$SQL_query = "SELECT idx, rate, franID FROM packrate WHERE franID = '".$franID."';"; 	
	$query = mysqli_query($connection,$SQL_query);	
		
	if($query->num_rows > 0){
		$cnt = 1;
		$someArray .= ',';
		$someArray .= '"packrate":[';//EDIT
		while ($row = mysqli_fetch_assoc($query)) {
			if ( $cnt != $query->num_rows ) { 
				$someArray .= '{ "idx": '.$row['idx'].', "rate": '.$row['rate'].', "franID": "'.$row['franID'].'" },';//EDIT
			}else{
				$someArray .= '{ "idx": '.$row['idx'].', "rate": '.$row['rate'].', "franID": "'.$row['franID'].'" }';//EDIT
			};
			$cnt++;
		}
		$someArray .= ']';
	};
	// end 5
	/*
	// 6
	$SQL_query = "";
	$SQL_query = "SELECT idx, franID, companyname, companyaddress, companycity, companystate, companyzip, companyemail, companyphone FROM franchises ;"; 	
	$query = mysqli_query($connection,$SQL_query);	
		
	if($query->num_rows > 0){
		$cnt = 1;
		$someArray .= ',';
		$someArray .= '"packrate":[';//EDIT
		while ($row = mysqli_fetch_assoc($query)) {
			if ( $cnt != $query->num_rows ) { 
				$someArray .= '{ "idx": '.$row['idx'].', "rate": '.$row['rate'].', "franID": "'.$row['franID'].'" },';//EDIT
			}else{
				$someArray .= '{ "idx": '.$row['idx'].', "rate": '.$row['rate'].', "franID": "'.$row['franID'].'" }';//EDIT
			};
			$cnt++;
		}
		$someArray .= ']';
	};
	// end 6
	*/
	$someArray .= '}';// end

	
	  // Convert the Array to a JSON String and echo it
	  //$someJSON = json_encode($someArray);
	  //echo $someJSON;
	  echo $someArray;

  
	

?>