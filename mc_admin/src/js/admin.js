let tbodys = document.getElementById('tbody');
let adduser = document.getElementById('adduser');
let edit = document.getElementById('edit');
let aedit = document.getElementById('aedit');
let close = document.getElementById('close');
let aclose = document.getElementById('aclose');
let btns = document.getElementById('btns');
let abtns = document.getElementById('abtns');
let user = document.getElementById('user');
let auser = document.getElementById('auser');
let psw = document.getElementById('psw');
let apsw = document.getElementById('apsw');

let xhr = new XMLHttpRequest();
function show(){


    xhr.open('POST', '/admin_users', true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send();
    xhr.onload = () => {
    if (xhr.status == 200) {
        // console.log(xhr.responseText)
        var res = JSON.parse(xhr.responseText);
        console.log(res);
        let data =res.data;
        let html ='';
        for(let i=0;i<data.length;i++){
            html+=`
            <tr>
                <td>
                    <input type="checkbox">
                </td>
                <td class="u_id">${data[i]._id}</td>
                <td class="u_name">${data[i].user}</td>
                <td class="u_edit">
                <i class="iconfont icon-caozuo" title="编辑" name="${data[i].user}"></i>
                <i class="iconfont icon-hekriconshanchu" title="删除" name="${data[i].user}"></i>
                </td>
                </tr>
            `
        }
        tbodys.innerHTML=html;
    
        }
    }
}
show();

adduser.onclick=()=>{
    aedit.style.display="inline-block";
}

abtns.onclick=()=>{
    console.log(auser.value.trim())
    console.log(apsw.value.trim())
    let user = auser.value.trim();
    let psw = apsw.value.trim();
    xhr.open('POST','/admin_adduser', true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(`user=${user}&password=${psw}`);
    xhr.onload = () => {
        if (xhr.status == 200) {
            // console.log(xhr.responseText)
            var res = JSON.parse(xhr.responseText);
            console.log(res);
            if(res.code==1){
                console.log(1111)
                aedit.style.display="none";
                show();
            }
        }
    }

}

close.onclick=()=>{
    edit.style.display="none";
}
aclose.onclick=()=>{
    aedit.style.display="none";
}


let isok = false;
// console.log(user)
// console.log(psw)

// 验证码
$.idcode.setCode();
//   验证框失去焦点
Txtidcode.onblur = function () {
    let IsBy = $.idcode.validateCode();
    // console.log(IsBy);
    if (IsBy) {
        isok = true;
    } else {
        isok = false;
    }
}

tbodys.onclick = e=>{
    var e = e || window.event;
    var target = e.target || e.srcElement;
    console.log(target)
    if (target.className == 'iconfont icon-caozuo') {
        let user = target.getAttribute('name');
        console.log(user)
        edit.style.display="inline-block";

        btns.onclick=()=>{
            console.log(333)
            let password = psw.value.trim();
            console.log(password);
            if(isok){
                xhr.open('POST','/admin_updateuser', true);
                xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xhr.send(`user=${user}&password=${password}`);
                xhr.onload = () => {
                if (xhr.status == 200) {
                    // console.log(xhr.responseText)
                    var res = JSON.parse(xhr.responseText);
                    console.log(res);
                    if(res.code==1){
                            
                        edit.style.display="none";
                        show();
                    }
                }
            }
            
        }
    }
        
    }

    if (target.className == 'iconfont icon-hekriconshanchu') {
        let user = target.getAttribute('name');
        console.log(user)
        var ensure = confirm('确定要删除这条数据？');
        if(ensure){
            console.log(222)
            xhr.open('POST','/admin_deluser', true);
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send(`user=${user}`);
            xhr.onload = () => {
                if (xhr.status == 200) {
                    // console.log(xhr.responseText)
                    var res = JSON.parse(xhr.responseText);
                    console.log(res);
                    if(res.code==1){
                        show();
                    }
                }
            }
            
        }
    }


}

