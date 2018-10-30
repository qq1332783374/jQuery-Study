<?php
	$user = $_POST['oUser'];
	$oPass = $_POST['oPass'];
	if($user=="admin" && $oPass=="admin"){
		echo 1;//登陆成功
	}else if($user!="admin"){
		echo 2;//账号错误
	}else if($user=="admin" && $oPass!="admin"){
		echo 3;//账号正确,密码错误
	}
?>