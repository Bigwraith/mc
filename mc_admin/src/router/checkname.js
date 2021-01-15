const express = require('express');
let Router = express.Router();

const mongodb = require('mongodb');
// const bodyparser = require('body-parser');

//获取mongo客户端
const MongoClient = mongodb.MongoClient;

Router.get('/',(req,res)=>{

    let {username} = req.query;

    MongoClient.connect('mongodb://localhost:27017',(err,database)=>{
      //连接成功后执行回调函数
      //如果有错误就抛出错误
      if(err) throw err;

      //使用某个数据库，没有就自动创建一个
      let db = database.db('mc');

      //使用数据库里面的集合（表）
      let users = db.collection('users');

      //查询是否存在数据
      users.findOne({name:username},(err,result)=>{
        if(err) throw err;
        // console.log(result);
        if( result ){
            //已存在
            res.send({
                code:1,
                data:[],
                msg:'存在'
            })
        }else{
            // 错误
            res.send({
                code:0,
                data:[],
                msg:'不存在'
            })
        }
    })
      //关闭数据库,避免资源浪费
      database.close();
  })
});

module.exports = Router; 