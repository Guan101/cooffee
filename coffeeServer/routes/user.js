const express = require('express');
//引入连接池模块(注意路径)
const pool = require('../pool');
//创建路由对象
const router = express.Router();
// 加载MD5模块
const md5 = require('md5');

//接口
//用户注册接口  post 接口地址： http://127.0.0.1:3000/user/register
router.post('/register', (req, res) => {
  //console.log(md5('12345678'));
  // 获取用户名和密码信息
  let username = req.body.username;
  let password = req.body.password;
  let phone = req.body.phone;
  //以username为条件进行查找操作，以保证用户名的唯一性
  //现在数据库做个对比，count为0，说明用户名不重复，这个名字可以用
  let sql = 'SELECT COUNT(u_id) AS count FROM user WHERE u_name=?';
  // console.log(req.body);
  pool.query(sql, [username], (error, results) => {
    if (error) throw error;
    let count = results[0].count;
    if (count == 0) {
      // 将用户的相关信息插入到数据表
      sql = 'INSERT INTO user(u_name,u_pwd,phone) VALUES(?,MD5(?),?)';
      pool.query(sql, [username, password, phone], (error, results) => {
        if (error) throw error;
        res.send({ message: 'ok', code: 200 }); //注册成功
      });
    } else {
      res.send({ message: 'user exists', code: 201 }); //用户已经存在
    }
  });
});

// 用户登录接口 post   接口地址： http://127.0.0.1:3000/user/login
router.post('/login', (req, res) => {
  //获取用户名和密码信息
  let username = req.body.username;
  let password = req.body.password;
  // SQL语句
  let sql = 'SELECT u_id,u_name,phone,hpic FROM user WHERE u_name=? AND u_pwd=MD5(?)';
  pool.query(sql, [username, password], (error, results) => {
    if (error) throw error;
    if (results.length == 0) {
      //登录失败
      res.send({
        message: 'login failed',
        code: 201,
      });
    } else {
      //登录成功
      res.send({ message: 'ok', code: 200, result: results[0] });
    }
  });
});

//用户忘记密码 --手机验证码通过之后 修改密码
// put  访问的接口地址：http://127.0.0.1:3000/user/gaimi
router.put('/gaimi', (req, res, next) => {
  //接收参数
  let obj = req.body;
  //查看接收的参数
  //sql语句
  //修改的新的内容 字段=新值 where 字段=旧值
  // 修改用户密码 u_pwd
  let sql = 'UPDATE user SET u_pwd = MD5(?) WHERE phone = ?';
  //执行sql命令
  pool.query(sql, [obj.u_pwd, obj.phone], (err, data) => {
    //错误处理
    if (err) {
      next(err);
      return;
    }
    //判断是否有修改成功的数据
    if (data.affectedRows == 1) {
      res.send({
        code: 1,
        msg: '修改成功',
        data: data,
      });
    } else {
      res.send({
        code: 2,
        msg: '修改失败',
        data: data,
      });
    }
  });
});
//用户登录进入,根据u_id去数据库拿到手机号.头像和名字的接口
// post    /user/getinfo
// http://127.0.0.1:3000/user/getinfo
router.post('/getinfo', (req, res) => {
  //获取用户名和密码信息
  let u_id = req.body.u_id;
  // SQL语句
  let sql = 'SELECT u_name,phone,hpic FROM user WHERE u_id=?';
  pool.query(sql, [u_id], (error, results) => {
    if (error) throw error;
    if (results.length == 0) {
      //登录失败
      res.send({
        message: 'login failed',
        code: 201,
      });
    } else {
      //登录成功
      res.send({ message: 'ok', code: 200, result: results[0] });
    }
  });
});
//用户修改我的头像
// put /user/sethpic
router.put('/sethpic', (req, res, next) => {
  //接收参数
  let obj = req.body;
  //查看接收的参数
  // console.log(obj);
  //sql语句
  //修改的新的内容 字段=新值 where 字段=旧值
  // 修改用户名，用户手机号，头像hpic，性别gender,收货地址u_address,
  let sql = 'UPDATE user SET hpic= ? WHERE phone = ?';
  pool.query(sql, [obj.hpic, obj.phone], (err, data) => {
    //错误处理
    if (err) {
      next(err);
      return;
    }
    //判断是否有修改成功的数据
    if (data.affectedRows == 1) {
      res.send({
        code: 1,
        msg: '修改成功',
        data: data,
      });
    } else {
      res.send({
        code: 2,
        msg: '修改失败',
        data: data,
      });
    }
  });
});

//用户修改我的--个人信息
//put /edit
//访问的接口地址：http://127.0.0.1:3000/user/edit
//根据用户手机号查找 修改用户名，用户手机号，头像hpic，性别gender,收货地址u_address
router.put('/edit', (req, res, next) => {
  //接收参数
  let obj = req.body;
  //查看接收的参数
  // console.log(obj);
  //sql语句
  //修改的新的内容 字段=新值 where 字段=旧值
  // 修改用户名，用户手机号，头像hpic，性别gender,收货地址u_address,
  let sql = 'UPDATE user SET u_name= ? ,phone= ?  ,gender = ? ,u_address= ? WHERE phone = ?';
  pool.query(sql, [obj.uname, obj.phone, obj.gender, obj.address, obj.oldphone], (err, data) => {
    //错误处理
    if (err) {
      next(err);
      return;
    }
    //判断是否有修改成功的数据
    if (data.affectedRows == 1) {
      res.send({
        code: 1,
        msg: '修改成功',
      });
    } else {
      res.send({
        code: 2,
        msg: '修改失败',
      });
    }
  });
});

//暴露路由对象
module.exports = router;
