<?php
$mysqli= new mysqli("localhost","root","123456","test");
$sql="INSERT INTO `contacts` (`name`,`phone`,`beizhu`) VALUES ('{$_GET['name']}','{$_GET['phone']}','{$_GET['beizhu']}')";
$mysqli->query($sql);
echo $mysqli->insert_id;
?>
