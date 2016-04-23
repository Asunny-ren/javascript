// (function(){
//   var chuli=function(data){
//       return '.'+data;
//   }
//   var jquery=function(selector){
//      selector=chuli(selector);
//      return document.querySelector(selector);
//   }
//   window.$=jquery;
// })()
// (function(){
// 	var jquery=function(selector){
//         var els=document.querySelectorAll(selector);
//         for(var i=0;i<els.length;i++){
//         	this[i]=els[i];
//         }
//         this.length=els.length;
// 	}
// 	jquery.prototype.addClass=function(str){
//          for(var i=0;i<this.length;i++){
//          	this[i].classList.add(str)
//          }
// 	}
// 	var $=function(selector){
// 		return new jquery(selector);
// 	}
// 	window.$=$;
// })()
//  (function(){
// 	var jquery=function(selector){
// 		var els=document.querySelectorAll(selector);
// 		for(var i=0;i<els.length;i++){
// 			this[i]=els[i];
// 		}
// 		this.length=els.length;
// 	}
// 	jquery.prototype.addClass=function(str){
// 		for(var i=0;i<this.length;i++){
// 			this[i].classList.add(str);
// 		}
// 	}
// 	var $=function(selector){
// 		return new jquery(selector);
// 	}
// 	window.$=$;
// })()
// 
(function(){
	var jquery=function(selector){
       var els=document.querySelectorAll(selector);
       for(var i=0;i<els.length;i++){
       	this[i]=els[i];
       }
       this.length=els.length;
	}
	jquery.prototype.addClass=function(str){
		for(var i=0;i<this.length;i++){
			this[i].classList.add(str);
		}
	}
	var $=function(selector){
		return new jquery(selector);
	}
	window.$=$;
})()