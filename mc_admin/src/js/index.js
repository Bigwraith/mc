
let iframe_box = document.getElementById('iframe_box');
let list_box = document.getElementById('list_box');
let listclick = document.getElementById('listclick');
let adminclick = document.getElementById('adminclick');
let admin_box = document.getElementById('admin_box');
let addlistclick = document.getElementById('addlistclick');
let addlist_box = document.getElementById('addlist_box');

// 商品列表
listclick.onclick = ()=>{
    iframe_box.style.display = 'none';
    list_box.style.display = 'block';
    admin_box.style.display = 'none';
    addlist_box.style.display = 'none';
}
// 添加商品列表
addlistclick.onclick = ()=>{
    iframe_box.style.display = 'none';
    list_box.style.display = 'none';
    admin_box.style.display = 'none';
    addlist_box.style.display = 'block';
}
// 管理员
adminclick.onclick = ()=>{
    iframe_box.style.display = 'none';
    list_box.style.display = 'none';
    admin_box.style.display = 'block';
    addlist_box.style.display = 'none';
}