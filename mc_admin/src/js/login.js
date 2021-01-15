let user = document.getElementById('user'); //用户名
let psw = document.getElementById('psw'); // 密码
let inp2 = document.getElementById('Txtidcode'); // 验证码
let btns =document.getElementById('btns');
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

//   登录
btns.onclick = ()=>{
    let userval = user.value.trim();
    let pswval = psw.value.trim();
    let xhr = new XMLHttpRequest();
    if(isok){
        xhr.open('POST','/admin_log');
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(`user=${userval}&password=${pswval}`);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                console.log(xhr.responseText);
                let data = JSON.parse(xhr.responseText);
                console.log(data)
                if(data.code==1){
                    parent.window.location.href="./html/index.html";
                    document.cookie = "usname="+userval;
                }

            }	
        }
    }else{
        console.log('验证码错误')
    }
    

}