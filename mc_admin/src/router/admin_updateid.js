const express = require('express');
let Router = express.Router();

const mongodb = require('mongodb');
// const bodyparser = require('body-parser');

//获取mongo客户端
const MongoClient = mongodb.MongoClient;

Router.get('/',(req,res)=>{

    let {number} = req.query;
    let num = Number(number);

// console.log(search)
    MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,database)=>{
      //连接成功后执行回调函数
      //如果有错误就抛出错误
      if(err) throw err;

      //使用某个数据库，没有就自动创建一个
      let db = database.db('mc');

      //使用数据库里面的集合（表）
      let admin_lists = db.collection('admin_lists');

            admin_lists.update({number:{$gt:num}},{$inc:{number:-1}},{ upsert: true,multi:true},(err,result)=>{
                if(err){
                    res.send({
                        code:0,
                        data:err,
                        msg:'修改失败'
                    })
                }else{
                    res.send({
                        code:1,
                        data:result,
                        msg:'修改成功'
                    })
                }
            });
        
    });
      //关闭数据库,避免资源浪费
    //   database.close();
    })

module.exports = Router; 