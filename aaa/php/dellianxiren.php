<?php
$mysqli= new mysqli("localhost","root","123456","test");
$sql="DELETE  FROM `contacts` WHERE `id`={$_GET['id']}";
$r=$mysqli->query($sql);
if($r){
  echo 'success';
}else{
  echo 'fail';
}
?>
