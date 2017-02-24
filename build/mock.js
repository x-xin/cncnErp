var express = require('express'),
  app = express(),
  Mock = require('mockjs'),
  bodyParser = require('body-parser'); // body 模块用于获取post的参数数据

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* login */ 
app.post('/login', function (req, res) {

  var username = req.body.username,
      password = req.body.password,
      data = {};

  if(username === "Roda" && password === "123456"){
    data = {
      code: 1,
      msg: "成功",
      user: {
        id: 1,
        username: req.body.username
      }
    }
  }else{
    data = {
      code: 0,
      msg: "账号或者密码错误"
    }
  }
  setTimeout(() => {
    res.send(JSON.stringify(data, null, 4));
  },800)   
});

/* setPassword */ 
app.post('/setPassword', function (req, res) {
  var pass    = req.body.pass,
      oldPass = req.body.oldPass,
      data    = {};
  if(oldPass === '123456'){
    data = {
      code: 1,
      msg: "成功修改密码",
      pass: pass
    }
  }else{
    data = {
      code: 0,
      msg: "原始密码不对哦"
    }
  }
  setTimeout(() => {
    res.send(JSON.stringify(data, null, 4));
  },800)   
});

/* table list */
app.post('/table', function(req, res){

  var Random = Mock.Random,
      data   = Mock.mock({
        'code': '@integer(0, 1)',
        'data|15': [{
          'id|+1': 1, 
          'date': Random.date(),
          'name': Random.name(),
          'address': Random.county(true)
        }]
      });

  setTimeout(() => {
    res.send( JSON.stringify(data, null, 4) );
  },800);

}); 



module.exports = app;
