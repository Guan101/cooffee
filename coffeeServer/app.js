const express = require('express');
const pool = require('./pool');
// 引入活动查询路由
const activityRouter = require('./routes/activity');
// 引入资讯查询路由
const newsRouter = require('./routes/news');
// 引入汽车列表路由
const barandRouter = require('./routes/barand');
// 引入场次列表路由
const sceneRouter = require('./routes/scene')
// 引入游客信息路由
const tuserRouter = require('./routes/order')
// 引入订单信息路由
const p_orderRouter = require('./routes/p_order')
// 引入积分商城路由
const pointsRouter = require('./routes/points');
//引入用户路由
const userRouter = require('./routes/user');
// 引入社区路由
const communityRouter = require('./routes/community')
//创建WEB服务器
const app = express();

//设置端口
app.listen(3000, () => {
  console.log('服务器启动成功');
});

//使用中间件将post请求的参数(body)转为对象
app.use(
  express.urlencoded({
    extended: false,
  })
);
// 使用CORS中间件
const cors = require('cors');
app.use(
  cors({
    origin: '*',
  })
);
// 使用活动路由器,给所有路由添加前缀/v1/activitys
app.use('/v1/activitys', activityRouter);
// 使用资讯路由器,给所有路由添加前缀/v1/activitys
app.use('/v1/news', newsRouter);
// 挂载用户路由 /user
app.use('/user', userRouter);
//挂载品牌路由 /v1/barands
app.use('/v1/barands', barandRouter);
// 使用场次列表路由器，给所有路由添加前缀v1/scene
app.use('/v1/scenes', sceneRouter);
// 引入游客信息路由
app.use('/v1/tuser', tuserRouter);
// 引入订单信息路由
app.use('/v1/p_order', p_orderRouter);
//挂载品牌路由 /v1/points
app.use('/v1/points', pointsRouter);
//挂在社区路由 
app.use('/v1/community', communityRouter);

//添加错误处理中间件，拦截路由中的错误
app.use((err, req, res, next) => {
  console.log(err); //打印路由传递过来的错误
  res.status(500).send({ code: 500, msg: '服务器端错误' });
});

// 代理服务器
const http = require('http');
app.get('/aaa', (req, res) => {
  let url = 'http://flights.ctrip.com/schedule/poi/get';
  http.get(url, data => {
    var str = '';
    let count = 0;
    // 数据存在 则继续拼接
    data.on('data', chunk => {
      str += chunk;
      ++count;
    });
    // 数据不存在,说明接受完毕,发送结果给客户端
    data.on('end', () => res.send(str));
  });
});

//配置multer中间件
const multer = require('multer');
obj = multer.diskStorage({
  //设置上传后文件路径，upload文件夹会自动创建
  destination: function (req, file, cb) {
    //指定目录
    //cb ---> callback
    cb(null, 'upload');
  },
  //给上传文件重命名
  filename: function (req, file, cb) {
    // 指定文件名
    let name = file.originalname;
    // name:  abcd.jpg    xxxdfdd.zip
    let ext = name.substr(name.lastIndexOf('.'));
    cb(null, uuid.v4() + ext);
  },
});
const uploadTools = multer({
  storage: obj,
});
const uuid = require('uuid');
// 静态资源托管目录
app.use(express.static('upload'));

//接收请求  修改头像的
app.post('/upload', uploadTools.array('uploadFile'), (req, res) => {
  let hpic = req.files[0].filename;
  let phone = req.body.phone;

  let sql = `UPDATE user SET hpic="${hpic}" WHERE phone="${phone}"`;
  pool.query(sql, (err, data, next) => {});
  return res.send('OK');
});
//上传作者文章的图片
app.post('/upload2', uploadTools.array('uploadFile2'), (req, res) => {
  let pic = req.files[0].filename;
  let title = req.body.title;
  let time = req.body.currentDate;
  let content = req.body.content;
  let uid = req.body.uid;
  let uname = req.body.uname;
  let hpic = req.body.hpic;
  let sql2 = `INSERT INTO artical(art_imgs,art_title,art_time,art_textcontent,art_u_id,art_u_name,art_u_hpic) VALUES(?,?,?,?,?,?,?)`;
  pool.query(sql2, [pic, title, time,content,uid,uname,hpic], (err,data, next) => {})
  return res.send('OK');
});
