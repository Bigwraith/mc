const express = require('express');
let Router = express.Router();

const mongodb = require('mongodb');
// const bodyparser = require('body-parser');

//获取mongo客户端
const MongoClient = mongodb.MongoClient;

Router.get('/',(req,res)=>{

    let {user,gid,assid,subject,size,num,img,price} = req.query;
    gid = Number(gid);
    assid = Number(assid);

    MongoClient.connect('mongodb://localhost:27017',(err,database)=>{
      //连接成功后执行回调函数
      //如果有错误就抛出错误
      if(err) throw err;

      //使用某个数据库，没有就自动创建一个
      let db = database.db('mc');

      //使用数据库里面的集合（表）
      let carts = db.collection('carts');

      //插入数据
      carts.insertOne({user,gid,assid,subject,size,num,img,price},(err,result)=>{
        if(err) throw err;
        // console.log(result);
        if( result ){
            
            res.send({
                code:1,
                data:result,
                msg:'插入成功'
            })
        }else{
            // 错误
            res.send({
                code:0,
                data:err,
                msg:'插入失败'
            })
        }
    })
      //关闭数据库,避免资源浪费
      database.close();
  })
});

module.exports = Router; 