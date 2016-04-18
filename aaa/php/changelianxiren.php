<?php
$mysqli= new mysqli("localhost","root","123456","test");
$sql="UPDATE `contacts` SET `name`='{$_GET['name']}',`phone`='{$_GET['phone']}',`beizhu`='{$_GET['beizhu']}' WHERE `id`='{$_GET['id']}'";
$r=$mysqli->query($sql);
if($r){
  echo 'success';
}else{
  echo 'fail';
}
?>
