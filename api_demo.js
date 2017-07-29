
var express = require('express');
var app = express();
var apiRoute = express.Router()

// mock接口demo
var data = require('./data/data.json');
var movies = data.movies
apiRoute.get('/movies', function (req, res) {
  console.log(req.query);
  setTimeout(function () {
    res.json({
      message: '成功',
      status: 3001,
      payload: {
        data: movies
      }
    });
  }, 300);
})

apiRoute.post('/postdemo', function (req, res) {
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