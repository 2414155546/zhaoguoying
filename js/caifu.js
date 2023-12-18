// 当页面加载完成后，自动打开Tab1
window.onload = function() {
    openTab(null, 'Tab1');
  }
  
  // 定义一个函数，用于打开指定的标签页
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // 获取所有的标签页内容
    tabcontent = document.getElementsByClassName("tabcontent");
    
    // 遍历所有的标签页内容，将它们隐藏
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    // 获取所有的标签页按钮
    tablinks = document.getElementsByClassName("tablinks");
    
    // 遍历所有的标签页按钮，移除它们的"active"样式
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // 显示用户点击的标签页的内容
    document.getElementById(tabName).style.display = "block";
    
    // 如果存在事件对象，则给用户点击的按钮添加"active"样式
    if(evt != null) evt.currentTarget.className += " active";
  }

var url=`http://rap2api.taobao.org/app/mock/315670/zhao`;
        fetch(url).then(data=>{
            return data.json();
        }).then(data=>{
            console.log(data);
            parse(data);
        }).catch(e=>{   //捕获错误
            console.log(e);
        });

        function parse(data){
            var jlist=document.querySelector(".jlist");
         for(let v of data){
        let li=document.createElement("li");
        li.innerHTML=`
        <div class="txt">
            <div>
                <p class="title">${v.title}</p>
                <p class="percentage">${v.percentage}</p>
                <p class="describe">${v.describe}</p>
                
            </div>
        </div>
    </ul>
        `;
        jlist.appendChild(li);
    }
        }
