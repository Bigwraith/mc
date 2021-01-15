let imgs = document.getElementById('imgs');
let file = document.getElementById('file');
let submit = document.getElementById('submit');
// console.log(imgs)


file.onchange=()=>{
    let reads = new FileReader();
    f = file.files[0];
    console.log(f)
    reads.readAsDataURL(f);
    reads.onload = function(e) {
        imgs.src = this.result;
    }
}

submit.onclick=()=>{
    let subject = document.getElementById('subject').value.trim();
    let presubject = document.getElementById('presubject').value.trim();
    let price = document.getElementById('price').value.trim();
    let formats = document.getElementById('formats').value.trim();
    let photo = imgs.src;
    // console.log(imgs.src)
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/admin_countlists', true);
    xhr.send();
    xhr.onload = () => {
                if (xhr.status == 200) {
                    // console.log(xhr.responseText)
                    let res = JSON.parse(xhr.responseText);
                    let data = res.data;
                    console.log(data);
                    let number = data.length+1;
                    console.log(number)
                    xhr.open('GET', `/admin_addlists?subject=${encodeURI(subject)}&presubject=${encodeURI(presubject)}&price=${encodeURI(price)}&formats=${encodeURI(formats)}&number=${number}&photo=${photo}`, true);
                    xhr.send();
                    xhr.onload = () => {
                        if (xhr.status == 200) {
                            // console.log(xhr.responseText)
                            let arr = JSON.parse(xhr.responseText);
                            
                            console.log(arr);
                            if(arr.code==1){
                                location.reload();
                                alert('添加成功')
                            }

                            
                        }
                    }
        

                }
    }

}