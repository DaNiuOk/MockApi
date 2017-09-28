
var express = require('express');
var app = express();
var apiRoute = express.Router()

var axios = require('./ajax')

// mock接口demo
apiRoute.get('/transGet', function (req, res) {
  // 获取Header的某个值
  console.log(req.get('Token'));
  // 获取get请求的参数
  console.log(req.query);
  axios.post('/login', {
    authCode: req.query.authCode,
    jobNum: req.query.jobNum
  })
    .then((oriRes) => {
      res.json(oriRes);
    })
    .catch((error) => {
      console.log(error);
    });
})

apiRoute.post('/transPost', function (req, res) {
  // 获取post请求的参数
  console.log(req.body);
  setTimeout(function () {
    res.json({
      hasNext: (parseInt(req.body.currentPage) > 1) ? 0 : 1,
      message: '成功',
      status: 3001,
      payload: {
      }
    });
  }, 300);
})

module.exports = apiRoute;