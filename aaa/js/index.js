// 1获取到所有的联系人数据=》数组中
// 2
// 3如果本地有数据&&本地数据和数据库数据一致
// 4把本地存储的数据放到数组中
// 5如果本地没有数据，发送一次ajax请求，从数据到获取到信息放到数组中（提示用户初始化中，请耐心等待，一段时间之后，如果还没有成功，换一个提示）
// 2把数据渲染到页面中：先把联系人列表和右侧都清空
// 分析数组中的数据，右侧按照字母从小到大，列出所有联系人的首字母
// 左侧列表中按照字母分组展示所有的联系人
// 先遍历数组，构造一个字典{k：【x1，x2】}
// 遍历字典，用键去绘制右侧，和左侧的头部
// 用值去绘制联系人列表

// 3完成一些展示效果，点击右侧，左边切换，在右侧滑动，左侧切换，左侧滑动的时候，分组信息要留在顶部，实时更换

// 增：
// 点击+，弹出窗口，编辑电话和姓名
// 点击完成的时候发送一次ajax请求，把信息存储到数据库，然后服务器会返回到id，哦我们把id+电话+姓名，保存到我们的数组中，同时也保存到本地存储中
// 重新绘制一次页面

// 删
// 在列表上向左滑动，出现删除，点击删除，发送一次ajax请求，把id发过去从数组中删掉这个id的数据
// 重新绘制一次页面

// 改
// 点击每个条目，弹出一个窗口
// 窗口中展示电话和姓名以及备注
// 添加一个编辑按钮，点击让所有的条目可编辑
// 点击完成之后把数据发给服务器
// 同时把数组中的数据也换掉
// 重新绘制页面

// 查（更新）
// 先把所有的数据取出来，和页面中的数组去比对
// 如果没有变化，什么都不做
// 如果有变化，页面中的数组换成服务器取出来的那个数组
// 重新绘制页面
  var contacts=[];
  var $add=document.querySelector(".add");
  var $refresh=document.querySelector(".refresh");
  var $contactlist=document.querySelector(".contactlist")
  var $edit=document.querySelector(".edit");
  var $finder=document.querySelector(".finder");
  var $ul=$finder.firstElementChild;
  var $cancel=document.querySelector(".edit .cancel");
  var $content=document.querySelector(".content");
  var $submit=document.querySelector(".edit .submit");
  var $delete=document.querySelector(".edit .delete");
  var $name=document.querySelector("input[name=name]");
  var $phone=document.querySelector("input[name=phone]");
  var $beizhu=document.querySelector("input[name=address]")
  //渲染界面函数
  var render=function(){
      $ul.innerHTML="";
      $contactlist.innerHTML="";
      var dict={};
      contacts.forEach(function(v){
           var k=v.name[0].toUpperCase();
           if(!dict[ k ]){
             dict[ k ]=[];
           }
           dict[ k ].push(v);
      })
    var zimuliebiao=Object.keys(dict).sort();
    zimuliebiao.forEach(function(v){
      var $li=document.createElement("li");
      $li.innerHTML='<a href="#'+v+'">'+v+'</a>';
      $ul.appendChild($li);
      var $dt=document.createElement("dt");
      $contactlist.appendChild($dt);
      $dt.innerHTML='<a id="'+v+'">'+v+'</a>';
      var data=dict[v]
      data.forEach(function(v){
        var $dd=document.createElement("dd");
        $dd.innerHTML='<h3 class="name">'+v.name+'</h3><h4 class="phone">'+v.phone+'</h4><a data-id="'+v.id+'"></a>'
        $contactlist.appendChild($dd);
      })
    })
    $ul.style.height=$ul.firstElementChild.offsetHeight*zimuliebiao.length+"px";
    }
  //显示编辑页面
  var display=function(){
    $edit.style.display="block";
  }
  // 隐藏编辑页面
  var hide=function(){

    $edit.style.display="none";
  }
  // 组织冒泡
  var stop=function(e){1
    e.stopPropagation();
  }
  // 第一次打开的时候渲染界面
  if(localStorage.data){
     contacts=JSON.parse(localStorage.data);
     render();
  }else{
    $.ajax("/php/getlianxiren.php",function(data){
      contacts=JSON.parse(data);
      localStorage.data=JSON.stringify(contacts)
    })
    render();
  }
  // 点击刷新的时候重新获取数据库中的数据进行渲染界面
  $refresh.addEventListener("touchstart",function(){
    if(contacts.length!==JSON.parse(localStorage.data)){
      $.ajax("/php/getlianxiren.php",function(data){
        contacts=JSON.parse(data);
        localStorage.data=JSON.stringify(contacts)
      })
    render();
  }
  })
  $add.addEventListener("touchstart",function(){
      display();
      $name.value="";
      $phone.value="";
      $beizhu.value="";
      $delete.style.display="none";
  })
  $cancel.addEventListener("touchstart",function(){
    hide();
  })
  $edit.addEventListener("touchstart",function(){
    hide();
  })
  $content.addEventListener("touchstart",stop);
  $submit.addEventListener("touchstart",function(data){
    var name=$name.value;
    var phone=$phone.value;
    var beizhu=$beizhu.value;
    contacts.forEach(function(v){
      if(v.phone===phone){

      }
    })
    var url='/php/addlianxiren.php?name='+name+'&phone='+phone+'&beizhu='+beizhu
    this.innerHTML="保存中...";
    $.ajax(url,function(data){
      contacts.push({"id":data,"name":name,"phone":phone,"beizhu":beizhu})
      $name.value="";
      $phone.value="";
      $beizhu.value="";
      localStorage.data=JSON.stringify(contacts);
      $submit.innerHTML="确定";
      hide();
      render();
    })
  })
  $contactlist.addEventListener("touchend",function(e){
    var el=e.target;
    if(el.NodeName="A"){
      var num=el.getAttribute("data-id");
      contacts.forEach(function(v){
           if(v.id===num){
             display();
             $name.value=v.name;
             $phone.value=v.phone;
             $beizhu.value=v.beizhu;
           }
      })
      $delete.style.display="block";
      $delete.setAttribute("data-id",num);
      $delete.innerHTML="删除";
    }
  })
  $delete.addEventListener("touchstart",function(){
     var num=$delete.getAttribute("data-id");
     contacts=contacts.filter(function(v){
      return v.id!==num;
    })
    $delete.innerHTML="删除中...";
    $.ajax('/php/dellianxiren.php?id='+num,function(){
      localStorage.data=JSON.stringify(contacts);
      hide();
      render();
    })
  })
