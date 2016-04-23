# jQuery

## 前端开发在开始写代码之前，一般首先要解决的两个问题
* 1.解决js标准本身的兼容性问题   es5shim
* 2.解决Dom扩展部分的兼容性问题  jQuery
```html
//第一个引入的js库用来解决兼容性问题
<script src="jquery.js"></script>
<script src="header.js"></script>
<script src="footer.js"></script>
```
#### 分开引用的js文件一定要解决的一个问题不能污染全局作用域
``` javascript
    var getElement=function(selector){
      if(document.querySelector){
        return document.querySelector(selector);
      }else{
        //控制台输出警告和错误，一般用来调试代码
        console.warnning("请更换浏览器")；
        console.error("请更换浏览器")；
      }
    }
```
``` javascript
   //利用上面的函数
   var el=getElement(".add");
   var getElement=function(){};
```
### 上面的这种写法的两个问题
 * 用户需要学习一门全新的语法
 * 用户需要避开那个库中的所有全局变量

## 实现原理
Dom对象
``` javascript
    var el={
      offsetWidth:12,
      _proto_:(HTMLDivElement)
       title:"aa",
       _proto_:HTMLDivElement
        src
    }
```
Dom集合
``` javascript
   var els={
     0:el,
     1:el,
     2:el,
     3:el,
     length:4,
     _proto_()
   }

```
jQuery对象
``` javascript
var els={
  0:div,
  1:div,
  2:div,
  3:div,
  length:4,
  _proto_:
  addClass:fn,
  removeClass:fn,
  toggleClass:fn,
  css:fn,
  ...
}
```
### jQuery是一个javascript库
#### jQuery库的优点：
* 1.全面解决pc端的兼容性问题
* 2.语法精炼，性能好，插件非常多

#### jQuery版本号之间的区别
* 1.xx->1.12  支持ie6-ie8
* 2.0  彻底的放弃了对ie<10的支持，转向移动端


## jQuery原理
 $().addClass("red")
 * 1.new 的时候究竟发生了什么
 * 2.对象的原型链
 * 3.函数对象身上的一个属性（prototype）和一个方法（call）
 * 4.this的指向
``` javascript
   (function(){
     var jQuery=function(selector){
       var els=document.querySelector(selector);
       for(var i=0;i<sel.length;i++){
         this[i]=els[i];
       }
       this.length=els.length;
     }
     jQuery.prototype.addClass=function(str){
       for(var i=0;i<this.length;i++){
         this[i].classList.add(str);
       }
     }
     var $=function(selector){
       return new jQuery(selector);
     }
     window.$=$;
   })()
```


#### jQuery中的大多数方法都会返回一个jQuery集合，操作集合的方法返回的就是原集合，对集合做过过滤或者导致集合改变的一些方法返回改变后的jQuery集合。
#### $ .append  这一类方法，当涉及到创建dom对象时，他们会返回创建完成后的一个jQuery集合，所以在jQuery中链式调用很常见
``` javascript
    $("selectors h1")
    .width(100)
    .height(100)
    .css({color:"white"})
    .position();//链条在这里断掉
    //因为position（）返回的是dom对象而不是jQuery对象
```

### $ 函数能接受的参数类型以及对应的返回值

  * null jQuery对象
  * 数组，对象  处理过的jquery对象
  * 选择器
  * html标签
  * DOM对象
  * DOM集合
  * 函数


## jQuery中能使用的选择器
jQuery中的选择器使用一个叫sizzle.js的库


.a p > a .item


从后往前找（在树中，找父元素只是一次查找，找子元素需要遍历）
* parent > child 子选择器 父元素下面的直接子元素
* A B 后代选择器
* prev + next 相邻一个选择器
* prev ~ next 相邻所有选择器

* :not()    接受简单选择器，剔除选中元素中符合某个规则的元素$("li:not(.aa)");


* :header  h1~h6标签$(this).find('*:header')
* :lang() 找出属性中有lang的元素$(this).find('div:')
* :root 找html
* :target index.html#A

* :contains 过滤内容中包含某个字符的元素
* :empty    $('p:empty') 没有内容的元素
* :has()    括号中可以接受一个简单选择器，判断已选中的元素的子元素中是否包含某个规则的元素
* parent    筛选选中元素中包含子元素的元素


* :visible   留下选中元素中可见的元素
* :hidden    留下选中元素中不可见的元素


* [attr]     从已选中的元素中筛选出有attr这个属性的
* [attr=aa]  精确等于aa
* [attr !=aa] 

* [attr|=aa]  aa || aa-xxxxx
* [attr*=aa]   baac aa-cc aa-a1
* [attr~=aa]   class="xx yy zz"   yy
* [attr $=aa]   xxxx-data  yyyy-data
