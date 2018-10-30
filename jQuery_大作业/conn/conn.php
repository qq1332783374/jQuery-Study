<?php
	
	$host = "localhost";
	$userName = "root";
	$password = "";
	$dbName = "todolist";
	$connID = mysqli_connect($host, $userName, $password);
	if(mysqli_select_db($connID, $dbName)){
		echo "success";
	}else{
		echo "false";
	}
	
?>