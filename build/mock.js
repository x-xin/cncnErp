var express = require('express'),
  app = express(),
  Mock = require('mockjs'),
  bodyParser = require('body-parser'); // body 模块用于获取post的参数数据

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/login', function (req, res) {

  if(req.body.username === "Roda" && req.body.password === "123456"){
    var data = {
      code: 1,
      msg: "成功",
      user: {
        id: 1,
        username: req.body.username
      }
    }
  }else{
    var data = {
      code: 0,
      msg: "账号或者密码错误"
    }
  }

  res.send(JSON.stringify(data, null, 4));
    
});

module.exports = app;
