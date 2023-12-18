
var url=`http://rap2api.taobao.org/app/mock/315670/ying`;
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
            <ul class="jlist">
                    <img src="${v.img}">
                    <div class="txt">
                        <p class="title">${v.title}</p>
                        <p class="account">${v.account}</p>
                    </div>
               
            </ul>
    
        `;
        jlist.appendChild(li);
    }
        };



        // swiper
        
  
