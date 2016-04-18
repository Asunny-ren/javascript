<?php
$mysqli= new mysqli("localhost","root","123456","test");
$query="SELECT * FROM contacts ORDER by ID";
$result=$mysqli->query($query);
$row=$result->fetch_all(MYSQLI_ASSOC);
echo json_encode($row);
?>
