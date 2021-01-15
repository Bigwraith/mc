const express = require('express');
let Router = express.Router();

const mongodb = require('mongodb');
// const bodyparser = require('body-parser');

//获取mongo客户端
const MongoClient = mongodb.MongoClient;

Router.get('/',(req,res)=>{

    let {number,imgurl,Gname,Gcategory,Gunit,Gstock} = req.query;
    let SN = Number(number);
    let unit = Number(Gunit);
    let stock = Number(Gstock);
// console.log(search)
    MongoClient.connect('mongodb://localhost:27017',(err,database)=>{
      //连接成功后执行回调函数
      //如果有错误就抛出错误
      if(err) throw err;

      //使用某个数据库，没有就自动创建一个
      let db = database.db('mc');

      //使用数据库里面的集合（表）
      let admin_lists = db.collection('admin_lists');

      //修改数据
      admin_lists.update({number:SN},{$set:{photo:imgurl,subject:Gname,presubject:Gcategory,sale_price:unit,formats:stock}},(err,result)=>{
        // console.log(result);
        if(result){
            res.send({
                code:1,
                data:[],
                msg:'更新成功'
            })
        }else{
            res.send({
                code:0,
                data:err,
                msg:'更新失败'
            })
        }
        
    })
      //关闭数据库,避免资源浪费
      database.close();
})   
});

module.exports = Router; 