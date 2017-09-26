var express = require('express')
var requestData = require('../requestData')
var router = express.Router()

/**
  * [信息 IM 消息]
  */
router.post('/api/message', function(req, res){
  if(req.body){
    var type = req.body.type
    var data = {
        code: 200,
        data:[]
    };
    switch(type){
      case 'received':
        if(requestData && requestData.message){
          for(var i = 0; i < requestData.message.length; i++){
            var list = requestData.message[i]
            if(list.to == 'ME'){
              data.data.push(list)
            }
          }
        }
      break;
      case 'send':
      break;
    }
    res.status(200).send(data).end();
  }
})

/**
  * [待办事项 待办]
  */
router.post('/api/todo', function(req, res){
    var resData = {
        code: 200,
        data: requestData.todo
    };
    res.status(200).send(resData).end();
})

/**
  * [记录]
  */
router.post('/api/record', function(req, res){
    var resData = {
        code: 200,
        data: requestData.record
    };
    res.status(200).send(resData).end();
})

/**
  * [新闻 最新资讯]
  */
router.post('/api/news', function(req, res){
    var resData = {
        code: 200,
        data: requestData.news
    };
    res.status(200).send(resData).end();
})

/**
  * [企业动态]
  */
router.post('/api/companyNews', function(req, res){
    var resData = {
        code: 200,
        data: requestData.companyNews
    };
    res.status(200).send(resData).end();
})

// login
router.post('/api/login', function(req, res){
    if(req.body){
        var obj = req.body
        var responseData = {
            data: {}
        };
        if(obj.username == 'admin' && obj.pwd == 'admin'){
            responseData.code = 200;
            responseData.data.username =  obj.username;
            responseData.data.userID = '000001';
            res.status(200).cookie('token', 'ssssssss').send(responseData).end();
        } else {
            responseData.code = -100;
            if(obj.username != 'admin'){
                responseData.msg = 'error: 用户名错误！'
            } else if(obj.pwd != 'admin'){
                responseData.msg = 'error: 密码错误！'
            } else {
                responseData.msg = 'error: 用户名、密码错误！'
            }
            res.status(200).send(responseData)
        }
    }
})

// table
router.post('/api/guest', function(req, res){
    if(req.body){
        var obj = req.body
        var responseData = {
            data: {}
        }
        switch(obj.type){
          case 'my':
            responseData.code = 200
            responseData.data = (requestData && requestData.table.guest)? requestData.table.guest[obj.type] : []
          break;
          case 'send':
          break;
        }
        res.status(200).send(responseData).end();
    }
})

router.get('/api', function(req, res){
    res.send('Api testing is ready to use')
})

module.exports = router;
