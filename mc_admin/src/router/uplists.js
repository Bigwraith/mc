const express = require('express');
let Router = express.Router();

const mongodb = require('mongodb');
// const bodyparser = require('body-parser');

//获取mongo客户端
const MongoClient = mongodb.MongoClient;

Router.get('/',(req,res)=>{

    let {number,photo,subject,presubject,sale_price,formats}  = req.query;
    let num= Number(number);
    console.log(num)
    // let Lunit = Number(unit);
    // let Lstock = Number(stock);

// console.log(search)
    MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,database)=>{
      //连接成功后执行回调函数
      //如果有错误就抛出错误
      if(err) throw err;

      //使用某个数据库，没有就自动创建一个
      let db = database.db('mc');

      //使用数据库里面的集合（表）
      let lists = db.collection('lists');

      lists.findOne({number:num},(err,result)=>{
        // console.log(result);
        // 如果数据表中不存在这条数据，则插入

            lists.insertOne({number:num,photo,subject,presubject,sale_price,formats},(err,result)=>{
                res.send({
                    code:1, 
                    data:[],
                    msg:'上架成功'
                })
            })

    
      //关闭数据库,避免资源浪费
      database.close();
  })
});
})

module.exports = Router;