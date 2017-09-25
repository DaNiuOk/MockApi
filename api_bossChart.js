
var express = require('express');
var app = express();
var apiRoute = express.Router()

// *********添加接口*********************************************************************

apiRoute.post('/boosReport/getDateList', function (req, res) {
  setTimeout(function () {
    res.json({
      "body": {
        "content": {
          "dataArray": [
            {
              "typeArray": [
                {"id": "201708", "title": "八月"},
                {"id": "201707", "title": "七月"},
                {"id": "201706", "title": "六月"},
                {"id": "201705", "title": "五月"},
                {"id": "201704", "title": "四月"},
                {"id": "201703", "title": "三月"}
              ],
              "typeId": "",
              "typeName": "按月"
            }, {
              "typeArray": [
                {"describe": "20170801-20170811", "id": "20170801", "title": "第八周"},
                {"describe": "20170801-20170812", "id": "20170802", "title": "第七周"},
                {"describe": "20170801-20170813", "id": "20170803", "title": "第六周"},
                {"describe": "20170801-20170814", "id": "20170804", "title": "第五周"},
                {"describe": "20170801-20170815", "id": "20170805", "title": "第四周"},
                {"describe": "20170801-20170816", "id": "20170806", "title": "第三周"},
                {"describe": "20170801-20170817", "id": "20170807", "title": "第二周"},
                {"describe": "20170801-20170818", "id": "20170808", "title": "第一周"}
              ],
              "typeId": "",
              "typeName": "按周"
            }
          ]
        },
        "result": {
          "resultCode": "1",
          "resultMsg": "success"
        }
      },
      "head": {
        "code": "10000",
        "msg": "success"
      }
    });
  }, 300);
})


apiRoute.post('/boosReport/currentDataList', function (req, res) {
  setTimeout(function () {
    var map = {
      "avgRentRoomRate": "测试内容w5qq",
      "avgSalePrice": "测试内容1o3l",
      "billPayRate": "测试内容86u6",
      "billTotalAmount": "测试内容z68k",
      "checkoutCount": "测试内容g612",
      "orgId": "测试内容8a05",
      "orgName": "测试内容c48c",
      "otherPayAmount": "测试内容0b10",
      "rentPayAmount": "测试内容f56f",
      "rentRoomRate": "测试内容u0o3",
      "roomCount": "测试内容4l6w",
      "signCount": "测试内容3j84"
    };

    var array = [];
    for (var i = 0; i < 20; i++) {
      array.push(map);
    }

    res.json({
      "body": {
        "content": {
          "dataArray": array
        },
        "result": {
          "resultCode": "1",
          "resultMsg": "success"
        }
      },
      "head": {
        "code": "10000",
        "msg": "success"
      }
    });
  }, 300);
})


apiRoute.post('/boosReport/furrentDataList', function (req, res) {
  setTimeout(function () {
    var map = {
      "orgId": "测试内容3igd",
      "orgName": "测试内容ey87",
      "waitCheckoutDepositAmount": "测试内容1bvs",
      "waitCheckoutSignCount": "测试内容f3no",
      "waitIncomeOtherAmount": "测试内容9vg4",
      "waitIncomeOtherCount": "测试内容en5v",
      "waitIncomeRentAmount": "测试内容yxs6",
      "waitIncomeRentCount": "测试内容laqi"
    };

    var array = [];
    for (var i = 0; i < 20; i++) {
      array.push(map);
    }

    res.json({
      "body": {
        "content": {
          "dataArray": array
        },
        "result": {
          "resultCode": "1",
          "resultMsg": "success"
        }
      },
      "head": {
        "code": "10000",
        "msg": "success"
      }
    });
  }, 300);
})

apiRoute.post('/boosReport/findOrgList', function (req, res) {
  setTimeout(function () {
    var array = [];
    for (var i = 0; i < 10; i++) {
      array.push({
          "id": "id" + i,
          "orgName": "测试内容" + i
        });
    }
    res.json({
      "body": {
        "content": {
          "list": {
            "pageData": array
          },
          "page": {
            "currentPage": 1,
            "currentResult": 0,
            "hasNextPage": true,
            "showCount": 10,
            "totalPage": 4,
            "totalResult": 31
          }
        },
        "result": {
          "resultCode": "1",
          "resultMsg": "success"
        }
      },
      "head": {
        "code": "10000",
        "msg": "success"
      }
    });
  }, 3000);
})


apiRoute.post('/boosReport/findBossChartByOneOrg', function (req, res) {
  setTimeout(function () {
    res.json({
      "body": {
        "content": {
          dataArray: [{
            valueData: [0, 0.15, 0.47, -1, 0.145, 0.236, 0.14, -1],
            valueName: '啦啦啦1'
          }, {
            valueData: [0, 1200, 1300, 18, 1800, 3, 14, 1452],
            valueName: '啦啦啦2'
          }],
          xDataArray: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月']
        },
        "result": {
          "resultCode": "1",
          "resultMsg": "success"
        }
      },
      "head": {
        "code": "10000",
        "msg": "success"
      }
    });
  }, 300);
})

apiRoute.post('/boosReport/findBossChartByOneIndex', function (req, res) {
  setTimeout(function () {
    res.json({
      "body": {
        "content": {
          dataArray: [{
            valueData: [0, 0.15, 0.47, -1, 0.145, 0.236, 0.14, -1],
            valueName: '啦啦啦1'
          }, {
            valueData: [0, 1200, 1300, 18, 3900, 3, 14, 1452],
            valueName: '啦啦啦2'
          }],
          xDataArray: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月']
        },
        "result": {
          "resultCode": "1",
          "resultMsg": "success"
        }
      },
      "head": {
        "code": "10000",
        "msg": "success"
      }
    });
  }, 300);
})
// *********添加接口*********************************************************************

module.exports = apiRoute;