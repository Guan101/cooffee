const express = require('express');
//引入连接池模块(注意路径)
const pool = require('../pool');
//创建路由对象
const community = express.Router();


// 顶部轮播图接口 get   接口地址： http://127.0.0.1:3000/v1/community/swiper
community.get('/swiper', (req, res, next) => {
  pool.query('SELECT art_id,art_title,art_imgs FROM artical WHERE art_style = "svip"', (err, result) => {
    if (err) {
      next(err);
      //阻止往后执行
      return;
    }
    // console.log(result);
    if (result.length == 0) {
      res.send({ code: 201, msg: '没有数据', data: result });
    } else {
      res.send({ code: 200, msg: '查到数据', data: result });
    }
  });
});
//   入口页文章拿数据get   接口地址： http://127.0.0.1:3000/v1/community/arts
community.get('/arts', (req, res, next) => {
  pool.query('SELECT * FROM artical order by art_time desc', (err, result) => {
    if (err) {
      next(err);
      //阻止往后执行
      return;
    }
    // console.log(result);
    if (result.length == 0) {
      res.send({ code: 201, msg: '没有数据', data: result });
    } else {
      res.send({ code: 200, msg: '查到数据', data: result });
    }
  });
});
//   入口页文章加用户表联合查询  接口地址： http://127.0.0.1:3000/v1/community/artinfos
community.get('/artinfos', (req, res, next) => {
  pool.query('SELECT * FROM artical LEFT JOIN user ON artical.art_u_id = user.u_id ORDER BY artical.art_time DESC ', (err, result) => {
    if (err) {
      next(err);
      //阻止往后执行
      return;
    }
    // console.log(result);
    if (result.length == 0) {
      res.send({ code: 201, msg: '没有数据', data: result });
    } else {
      res.send({ code: 200, msg: '查到数据', data: result });
    }
  });
});

// 查询所有的点赞表 get http://127.0.0.1:3000/v1/community/loves
community.get('/loves', (req, res, next) => {
  pool.query('SELECT * FROM loves', (err, result) => {
    if (err) {
      next(err);
      //阻止往后执行
      return;
    }
    // console.log(result);
    if (result.length == 0) {
      res.send({ code: 201, msg: '没有数据', data: result });
    } else {
      res.send({ code: 200, msg: '查到数据', data: result });
    }
  });
});

//  根据用户id查询所有的点赞表中的文章id  post  http://127.0.0.1:3000/v1/community/idart
community.post('/idart', (req, res, next) => {
  let uid = req.body.uid;
  let sql = 'SELECT l_art_id FROM loves WHERE l_uid = ?'
  pool.query(sql, [uid], (err, result) => {
    if (err) {
      next(err);
      //阻止往后执行
      return;
    }
    // console.log(result);
    if (result.length == 0) {
      res.send({ code: 201, msg: '没有数据', data: result });
    } else {
      res.send({ code: 200, msg: '查到数据', data: result });
    }
  });
});

//  根据用户id查询所有的点赞表中的文章id  post  http://127.0.0.1:3000/v1/community/zan
community.get('/zan', (req, res, next) => {
  pool.query('SELECT * FROM artical left JOIN loves ON artical.art_id = loves.l_art_id AND l_uid= ? ORDER BY artical.art_time DESC ', [req.query.u_id], (err, result) => {
    if (err) {
      next(err);
      //阻止往后执行
      return;
    }
    // console.log(result);
    if (result.length == 0) {
      res.send({ code: 201, msg: '没有数据', data: result });
    } else {
      res.send({ code: 200, msg: '查到数据', data: result });
    }
  });
});


// 用户点赞把文章表的点赞数+1
// put  访问的接口地址：http://127.0.0.1:3000/v1/community/dianzan
community.put('/dianzan', (req, res, next) => {
  //接收参数
  let obj = req.body;
  //修改的新的内容 字段=新值 where 字段=旧值
  let sql = 'UPDATE artical SET art_zan_count = ? WHERE art_id = ?';
  //执行sql命令
  pool.query(sql, [obj.art_zan_count, obj.art_id], (err, data) => {
    //错误处理
    if (err) {
      next(err);
      return;
    }
    //判断是否有修改成功的数据
    if (data.affectedRows == 1) {
      res.send({
        code: 1,
        msg: '点赞成功',
        data: data,
      });
    } else {
      res.send({
        code: 2,
        msg: '点赞失败',
        data: data,
      });
    }
  });
});

// 点赞之前验证数据库有没有重复的数据  get http://127.0.0.1:3000/v1/community/yanzheng
community.post('/yanzheng', (req, res, next) => {
  pool.query('SELECT * FROM loves where l_art_id = ? AND l_uid = ? ', [req.body.l_art_id,req.body.l_uid], (err, result) => {
    if (err) {
      next(err);
      //阻止往后执行
      return;
    }
    // console.log(result);
    if (result.length == 0) {
      res.send({ code: 201, msg: '没有数据', data: result });
    } else {
      res.send({ code: 200, msg: '查到数据', data: result });
    }
  });
});


//新增一条点赞表  post 接口地址： http://127.0.0.1:3000/v1/community/dianzan2
community.post('/dianzan2', (req, res) => {
  let obj = req.body;
  // 将用户的相关信息插入到数据表
  sql = 'INSERT INTO loves(l_art_id,l_uid,l_type) VALUES(?,?,?)';
  pool.query(sql, [obj.l_art_id, obj.l_uid, obj.l_type], (error, results) => {
    if (error) throw error;
    res.send({ message: 'ok', code: 200,results: results}); //插入点赞信息成功
  });
});

//删除一条点赞表  post 接口地址： http://127.0.0.1:3000/v1/community/deletezan
community.post('/deletezan', (req, res) => {
  let obj = req.body;
  // 将用户的相关信息插入到数据表
  sql = 'DELETE FROM loves WHERE l_art_id = ? AND l_uid = ?';
  pool.query(sql, [obj.l_art_id, obj.l_uid], (error, results) => {
    if (error) throw error;
    res.send({ message: 'ok', code: 200,results: results}); //删除成功
  });
});

//   详情页文章拿数据get   接口地址： http://127.0.0.1:3000/v1/community/artsdetails
community.post('/artsdetails', (req, res, next) => {
  let obj = req.body;
  sql2 = 'SELECT * FROM artical WHERE art_id = ?';
  pool.query(sql2,[obj.art_id], (err, result) => {
    if (err) {
      next(err);
      //阻止往后执行
      return;
    }
    // console.log(result);
    if (result.length == 0) {
      res.send({ code: 201, msg: '没有数据', data: result });
    } else {
      res.send({ code: 200, msg: '查到数据', data: result });
    }
  });
});



//插入评论表   post 接口地址： http://127.0.0.1:3000/v1/community/insertcomments
community.post('/insertcomments', (req, res) => {
  let obj = req.body;
  // 将用户的相关信息插入到数据表
  sql = 'INSERT INTO comment(comm_art_id,comm_content,comm_from_uid,comm_time) VALUES(?,?,?,?)';
  pool.query(sql, [obj.comm_art_id, obj.comm_content, obj.comm_from_uid,obj.comm_time], (error, results) => {
    if (error) throw error;
    res.send({ message: 'ok', code: 200,results: results}); //插入点赞信息成功
  });
}); 

//   拿数据 get   接口地址： http://127.0.0.1:3000/v1/community/getcom
community.post('/getcom', (req, res, next) => {
  let obj = req.body;
  sql2 = 'SELECT * FROM comment  LEFT JOIN user ON comment.comm_from_uid = user.u_id WHERE comment.comm_art_id = ? ORDER BY comment.comm_id DESC';
  pool.query(sql2,[obj.comm_art_id], (err, result) => {
    if (err) {
      next(err);
      //阻止往后执行
      return;
    }
    // console.log(result);
    if (result.length == 0) {
      res.send({ code: 201, msg: '没有数据', data: result });
    } else {
      res.send({ code: 200, msg: '查到数据', data: result });
    }
  });
});

// 用户评论把文章表的点赞数+1
// put  访问的接口地址：http://127.0.0.1:3000/v1/community/commentnum
community.put('/commentnum', (req, res, next) => {
  //接收参数
  let obj = req.body;
  //修改的新的内容 字段=新值 where 字段=旧值
  let sql = 'UPDATE artical SET art_com_count = ? WHERE art_id = ?';
  //执行sql命令
  pool.query(sql, [obj.art_com_count, obj.art_id], (err, data) => {
    //错误处理
    if (err) {
      next(err);
      return;
    }
    //判断是否有修改成功的数据
    if (data.affectedRows == 1) {
      res.send({
        code: 1,
        msg: '点赞成功',
        data: data,
      });
    } else {
      res.send({
        code: 2,
        msg: '点赞失败',
        data: data,
      });
    }
  });
});

// 文章详情页 该用户对该文章的点赞状态

community.post('/getcom', (req, res, next) => {
  let obj = req.body;
  sql2 = 'SELECT * FROM comment  LEFT JOIN user ON comment.comm_from_uid = user.u_id WHERE comment.comm_art_id = ? ORDER BY comment.comm_id DESC';
  pool.query(sql2,[obj.comm_art_id], (err, result) => {
    if (err) {
      next(err);
      //阻止往后执行
      return;
    }
    // console.log(result);
    if (result.length == 0) {
      res.send({ code: 201, msg: '没有数据', data: result });
    } else {
      res.send({ code: 200, msg: '查到数据', data: result });
    }
  });
});


//暴露路由对象
module.exports = community;