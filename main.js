var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// 加response header 解决跨域
var headerMap = {
	'Access-Control-Allow-Credentials':true,
	'Access-Control-Allow-Headers':'Token,AppId,AppVersion,Channel,Model,OS,OSVersion,Sign,Timestamp,UUID,content-type,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range',
	'Access-Control-Allow-Methods':'POST, GET, OPTIONS, DELETE',
	'Access-Control-Allow-Origin':'*',
	'Access-Control-Max-Age':3600,
	'Allow':'GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH',
};
app.all('*', function(req, res, next) {  
	res.set(headerMap); 
  next();
});


var apiFengRouter = require('./api_feng');
var apiJiaRouter = require('./api_jia');
var apiDemoRouter = require('./api_demo');
var apiBossChartRouter = require('./api_bossChart');
var apitransTestRouter = require('./transTest/api_trans');
app.use('/api', apiFengRouter);
app.use('/api', apiJiaRouter);
app.use('/api', apiDemoRouter);
app.use('/api', apiBossChartRouter);
app.use('/api', apitransTestRouter);

var server = app.listen(3030, function () {
    var port = server.address().port
    console.log("port:" + port)
})