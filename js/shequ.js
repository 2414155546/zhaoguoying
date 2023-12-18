var url=`http://rap2api.taobao.org/app/mock/315670/guo`;
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
                <p>${v.content}</p>
            </div>
        </div>
    </ul>
        `;
        jlist.appendChild(li);
    }
        }