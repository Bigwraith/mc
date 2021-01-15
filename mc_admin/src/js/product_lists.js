let tbodys = document.getElementById('tbodys');
// console.log(tbodys)
let xhr = new XMLHttpRequest();
    xhr.open('GET','/admin_lists?page=1&qty=15');
    // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            // console.log(xhr.responseText);
            let arr = JSON.parse(xhr.responseText);
            console.log(arr.data);
            let data = arr.data;
            let html='';
            for(let i=0;i<data.length;i++){
                html+=`
                <tr class="text-c va-m">
                <td><input name="" type="checkbox" value=""></td>
                <td>${data.gid}</td>
                <td><a onClick="product_show('哥本哈根橡木地板','product-show.html','10001')" href="javascript:;"><img width="60" class="product-thumb" src="${data.photo}"></a></td>
                <td class="text-l">${data.subject}</td>
                <td class="text-l">${data.presubject}</td>
                <td>￥${data.formats}</td>
                <td>￥${data.market_price}</td>
                <td>￥${data.sale_price}</td>
                <td class="td-status">
                    <span class="label label-success radius">已发布</span>
                </td>
                <td class="td-manage">
                    <a style="text-decoration:none" onClick="product_stop(this,'10001')" href="javascript:;" title="下架">
                        <i class="Hui-iconfont">&#xe6de;</i>
                    </a> 
                    <a style="text-decoration:none" class="ml-5" onClick="product_edit('产品编辑','product-add.html','10001')" href="javascript:;" title="编辑">
                    <i class="Hui-iconfont">&#xe6df;</i>
                    </a> 
                    <a style="text-decoration:none" class="ml-5" onClick="product_del(this,'10001')" href="javascript:;" title="删除"><i class="Hui-iconfont">&#xe6e2;</i>
                    </a>
                </td>
                </tr>
                `
                
            }
            tbodys.innerHTML=html;
        }
    }