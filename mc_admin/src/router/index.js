//把路由封装成模块
const express = require('express');

// 引入单独路由模块
const bannerRouter = require('./banner');
const imainRouter = require('./imain');
const checkRouter = require('./checkname');
const regRouter = require('./user_reg');
const logRouter = require('./user_log');
const classifyRouter = require('./classify');
const brandRouter = require('./brand');
const allianceRouter = require('./alliance');
const listRouter = require('./list');
const goodsRouter = require('./goods');
const cartRouter = require('./cart');
const addcartRouter = require('./addcart');
const editcartRouter = require('./editcart');
const removecartRouter = require('./removecart');
const delcartRouter = require('./delcart');
const uploadRouter = require('./upload');

// 后台
const admin_logRouter = require('./admin_log');
const admin_listsRouter = require('./admin_list');
const admin_listBtnRouter = require('./admin_listBtn');
const admin_updatelistRouter = require('./admin_updatelist');
const admin_checklistRouter = require('./admin_checklist');
const admin_addlistsRouter = require('./admin_addlists');
const admin_countlistsRouter = require('./admin_countlists');
const admin_remlistRouter = require('./admin_remlist');
const admin_updateidRouter = require('./admin_updateid');
const up_remlistRouter = require('./up_remlist');
const up_updateidRouter = require('./up_updateid');
// 查找上架列表
const groundinglistRouter = require('./groundinglist');
// 上加
const uplistsRouter = require('./uplists');
// 下加
const downlistsRouter = require('./downlists');

const admin_usersRouter = require('./admin_users');
const admin_adduserRouter = require('./admin_adduser');
const admin_updateuserRouter = require('./admin_updateuser');
const admin_deluserRouter = require('./admin_deluser');

let Router = express.Router();

Router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

// 关于标签导航的路由
Router.use('/banner',bannerRouter);

// 关于首页内容的路由
Router.use('/imain',imainRouter);

// 关于检验用户名是否被注册的路由
Router.use('/checkname',checkRouter);

// 关于用户注册的路由
Router.use('/reg',regRouter);

// 关于用户登录的路由
Router.use('/log',logRouter);

// 关于商品分类的路由
Router.use('/classify',classifyRouter);

// 关于商品品牌的路由
Router.use('/brand',brandRouter);

// 关于联盟的路由
Router.use('/alliance',allianceRouter); 

// 关于列表的路由
Router.use('/list',listRouter); 

// 关于详情的路由
Router.use('/goods',goodsRouter); 

// 关于加入购物车的路由
Router.use('/addcart',addcartRouter);

// 关于购物车的路由
Router.use('/cart',cartRouter); 

// 关于编辑购物车数量的路由
Router.use('/editcart',editcartRouter);

// 关于清空购物车商品的路由
Router.use('/removecart',removecartRouter);

// 关于删除购物车商品的路由
Router.use('/delcart',delcartRouter);

// 上传
Router.use('/upload',uploadRouter);

// 后台
// 后台登录
Router.use('/admin_log',admin_logRouter);
// 后台列表
Router.use('/admin_lists',admin_listsRouter);
// 后台列表按钮
Router.use('/admin_listBtn',admin_listBtnRouter);
// 后台列表修改
Router.use('/admin_updatelist',admin_updatelistRouter);
// 后台列表批量查找
Router.use('/admin_checklist',admin_checklistRouter);
// 后台列表增加
Router.use('/admin_addlists',admin_addlistsRouter);
// 后台全部列表数量
Router.use('/admin_countlists',admin_countlistsRouter);
// 后台列表删除
Router.use('/admin_remlist',admin_remlistRouter);
// 查找上级啊别表
Router.use('/groundinglist',groundinglistRouter);
// 上架
Router.use('/uplists',uplistsRouter);
// 下架
Router.use('/downlists',downlistsRouter);


Router.use('/admin_updateid',admin_updateidRouter);

Router.use('/up_updateid',up_updateidRouter);
Router.use('/up_remlist',up_remlistRouter);

Router.use('/admin_users',admin_usersRouter);
Router.use('/admin_adduser',admin_adduserRouter);
Router.use('/admin_updateuser',admin_updateuserRouter);
Router.use('/admin_deluser',admin_deluserRouter);

module.exports = Router;