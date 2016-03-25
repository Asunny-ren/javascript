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



按照我们正常编程思路
第一步找出元素
从document对象开始，利用它身上的方法
找出我们需要的元素（dom对象    dom集合）


  ###选取元素
  *var el=document.createElement();
  *var el=document.getElementById("") 
  *var el=document.querySelector()//css选择器  //ie8支持


  *var el=document.getElementsByClassName("")
  //不支持ie6-8
  *var el=document.getElementsByTagName()
  *var el=document.getElementsByName("")
  *var el=document.querySelectorAll()


经过这一步我们会得到一个dom元素和dom集合


dom对象
js会用一个很大的对象来代表页面中我们看到的那个元素

dom集合
在一个类数组对象中存储很多dom对象构成一个集合


###筛选元素
>从一个对象开始,根据逻辑关系再去寻找dom对象
>父元素
*el.parentNode
*el.parentElement

>子元素
*el.lastChild
*el.lastElementChild

*el.firstChild
*el.firstElementChild


*el.children
*el.childNodes


*el.nextSibling
*el.nextElementSibling


*el.previous
*var el.nextSibling




  ###获取元素位置信息（htmlelement）
     *document.documentElement.ClientWidth
     *document.documentElement.ClientHeight、
     *el.offsetWidth
     *el.offsetHeight
     *el.offsetLeft
     *el.offsetTop
     *el.offsetParent//具有定位属性的父元素
     *el.getBoundingClientRect()//计算元素距离窗口的位置
     *el.innerHTML
  ###属性操作（element）
     *el.setAttribute()
     *el.getAttribute()
     *el.removeAttribute()
     *el.hasAttribute()
     *el.className
     *el.id
     *el.classList
     ####dom中的大多属性都是利用get和set来实现

  ###节点操作（node）
    *aa.appendChild()
    *aa.removeChild()
    *aa.cloneNode()
    *aa.replaceChild()
    *aa.insertBefore()
    *利用函数aa.insertAfter()

### 样式操作
  *el.style(读取行内样式的值，设置行内样式的值)

