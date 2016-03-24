# javaScript概述

##基础逻辑处理部分


 >变量 数据类型       (数据存储)
 >分支和循环 运算符   (逻辑操作)
 >函数(对语言的扩展)
 ###变量类型
```javascript
var v=1;      //number
var v=1.2     //number
var v="sdsd"  //string
var v=true    //boolean
var v=function(){}   //function
var v=[];        //array
var v={}       //obj
var v=undefined
var v=null
###运算符
+ - * / %
===  !==  > < <= >=   && ||  !

###分支语句
 if()

 if(){

 }else{

 }

 if(){

 }else if(){

 }else if(){

 }

 switch(x){
    case 1:
    break;
    case 2:
    break;
    default:
    break;
 }
 ###循环语句
 for(){

 }

 for(in){

 }


 while(){

 }

 do{

 }while()


 function aa(){

 }
###函数
 var fn=function(x1,x2){
     //arguments
 }
fn(a,b)  

  ###函数的常用方法
  ###字符串中的常用方法
  ###函数对象中的方法    bind  apply  call
  ###对象的增删改插  原型链
  ###数字对象的身上的方法 toFixed()
  ###Math对象身上的方法
```
##针对特定用途的部分

  >当js在浏览器运行的那一刻
  >浏览器会创建一个window对象
  >有很多的属性和方法
  >这些属性和方法不用加window.就可以调用使用
  setInterval
  document.getElementById()


dom对象    dom集合



  ###选取元素
  *var el=document.getElementById("")
  *var el=document.getElementsByClassName("")[]
  *var el=document.getElementsByTagName()[]
  *var el=document.getElementsByName("")[]

  ###筛选元素
  *var el.nextSibling


  ### 样式操作
  *a.style.width=10+"px"
  *a.style.height=10+"px"
  *a.style.left=10+"px"
  *a.style.top=10+"px"
  *a.style.index=9999
  *a.style.background="red"
  *a.style.opacity=0.5

  ###获取位置信息
     *document.documentElement.ClientWidth
     *document.documentElement.ClientHeight
     *

  ###属性操作
     aa.className=""


  ###节点操作
    *aa.appendNode(div)
    *aa.insertBefore(div,p)
    *利用函数aa.insertAfter(div,p)
