<?php
$mysqli= new mysqli("localhost","root","123456","test");
$sql="UPDATE `contacts` SET `{$_GET['shuxing']}`=`{$_GET['zhi']}` WHERE `id`={$_GET['id']}";
$r=$mysqli->query($sql);
if($r){
  echo 'success';
}else{
  echo 'fail';
}
?>
