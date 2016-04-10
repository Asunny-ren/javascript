# javascript
 > 程序语言：和计算机交流的语言
 > 计算机就是用*来做计算的
 > 程序语言必须能很清楚的告诉计算机怎样去存储数据以及怎么去做逻辑操作
## javascript的逻辑操作
 * + - * / % && || ！
 * ===   ！==   >=  <=   >   <   (esLint检测工具)
 * if(){}
 * if(){}else(){}
 * if(){}else if(){}else if(){}....
 * switch(var){
    case1:...;
    break;
    case2:...;
    break;
    case3:...;
    break;
    default:...
    break;
    }
  * for(){};
  * while(){};
  * do{}while();
 ## 数据存储
  > var el=1              Number
  > var el="adsad"        String
  > var el=[1,2,4,"ds"]   Array
  > var el={a:1,b:3,c:5}  Object
  > var el=function(){}   function
  > var el=undefined      undefined
  > var el=null           Null
  > var el=true           Boolean


 ### alert() 调用的是对象的toString()方法
 ### console.log() 调用的是对象的valueOf()方法

 ### javascript中用类似于“表”的形式来存储数据（对象）

 ## 函数对象
 ``` javaScript
 var fn=function(){
   alert(1);
   console.log(1);
   return 1;
 }
 ```
 ### 定义函数的时候
  > 要把代表函数的那张表构建完全
  > "调用"这个属性值要赋值，函数体内部的字符串
  > 需要把当前可见范围内的所有的变量，由近到远的记录到一个链条中，形成一条
  > 作用域链
 ### 函数体中的代码
 > 函数对象会用一个不可见的属性“调用”来存储函数中的代码
 > {"调用":"alert(1);console.log(1);return 1"}
 > 函数这个对象相比其他对象的特殊之处在于他可以被调用
 > 函数名+（）可以调用函数
 > 调用函数的时候，函数对象会去读取自己身上的“调用”这个属性的值，取出来一些
 > 字符串，把这些字符串交给js解析器去当作javascript代码去执行
 > 与此同时,还会取出函数的作用域链，用来辅助这段代码的执行。

 ### 函数中的this关键字
  > 函数在定义的时候 this 什么都不是
  > 根据调用的不同情况来决定this变成什么

  #### 不同情况包括：
  > 1、正常的定义一个函数（不把函数作为某个对象的属性）
  > 正常的调用一个函数（通过()来调用）
  > 这种情况下this都指定window；

  ``` javascript
  //正常的定义一个函数
   var fn=function(){
     console.log(this)
   }
   //this指定window
   ```

  ``` javascript
  var el=function(){
     var fn=function(){
     	console.log(this);
     }
  }
  el();
  //this还是指定window
  ```

  ``` javascript
  var obj={
	  a:1,
	  b:2,
	  c:function(){
	  console.log(this);
	  }
  }
  obj.c();
  //this指向obj对象，指向它的宿主对象
  ```

  ``` javascript
    var el=document.querySelector(".dd");
    el.onclick=function(){
    	console.log(this)
    }
    //this指向el
    var obj={
	  a:1,
	  b:2,
	  }
      obj.c=function(){
      	console.log(this);
      }
     obj.c();
    //这两种情况类似

  ```
  ### 如果我们需要把this换成我们想要的对象，我们需要借助对象身上的call和apply方法
  ``` javascript
  var obj={};
  obj.c=function(){console.log(this)};
  obj.c();//这样调用还是指向obj
  obj.c.call();//这样调用指向window
  obj.c.call("aaa");//这样调用指向"aaa"
  obj.c.call(function(){console.log(this)})//this指向的是function(){console.log(this)}但是，不是后边的this指向的，而是前边的this指定的，与后边的貌似没有关系
  ```
  ### 当我们写好一段程序之后，计算机在处理的过程中
   > 对照代码，从上往下解析



## localStorage.setItem 
  > 会在浏览器中存储一些数据（只能是字符串）
## localStorage.getItem
  > 会从本地存储中获取一些数据（取出的也是字符串）
## localStorage.removeItem
  > 从本地存储中删除一些数据
## JSON.stringify();
  > 把对象转换成字符串
  > {a:1,b:2}  ->   '{"a":1,"b":2}'
## json.parse();
  > 把符合规则的字符串重新转回到对象
  
   ####
   > 用在展示信息的web页面中
   > 用在web app中
   >
   >
   >
