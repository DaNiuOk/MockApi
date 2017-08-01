
var express = require('express');
var app = express();
var apiRoute = express.Router()

// *********添加接口*********************************************************************

// 获取楼栋
apiRoute.post('/getbuildings', function (req, res) {
	var map = {
    "buildId": "998",
    "buildName": "小区啦啦啦-5号",
    "leasedNum": "54",
    "totalNum": "27",
    "unleasedNum": "27"
  };

	var mapArray = [];
	for (var i = 0; i < 10; i++) {
		mapArray.push(map);
	}


  setTimeout(function () {
    res.json({
      hasNext: (parseInt(req.body.currentPage) > 1) ? 0 : 1,
      message: '成功',
      status: 3001,
      payload: {
        buildArray: mapArray
      }
    });
  }, 300);
})

// 获取房间列表
apiRoute.post('/gethouses', function (req, res) {
  var mapArray = [];
  for (var i = 0; i < 10; i++) {
    mapArray.push({
      "emptyDays": "12",
      "houseId": "998",
      "houseFloor": req.body.currentPage + "层",
      "houseNum": "54",
      "housePrice": "2007",
      "houseTenant": "小明",
      "leaseType": (i % 2) ? '1' : '0'
    });
  }

  setTimeout(function () {
    res.json({
      hasNext: (parseInt(req.body.currentPage) > 1) ? 0 : 1,
      message: '成功',
      status: 3001,
      payload: {
        buildName: "XX小区-楼",
        leasedNum: "54",
        totalNum: "27",
        unleasedNum: "27",
        houseArray: mapArray
      }
    });
  }, 300);
})


// 保存房源
apiRoute.post('/savehouse', function (req, res) {
  setTimeout(function () {
    res.json({
      message: '保存成功',
      status: 3001,
      payload: {}
    });
  }, 300);
})
// 上传图片
apiRoute.post('/uploadimage', function (req, res) {
  setTimeout(function () {
    res.json({
      message: '上传成功',
      status: 3001,
      payload: {
        url: '9999999999',
        size: 1568,
      }
    });
  }, 300);
})


// *********添加接口*********************************************************************

module.exports = apiRoute;