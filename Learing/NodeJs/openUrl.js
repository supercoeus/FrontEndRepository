var schedule = require('node-schedule');
var http = require('http');

var k1 = schedule.scheduleJob('*/1 * * * * *',function(){
	var url = "http://www.17k.com/list/1066152.html";
	//请求url
	http.get(url,function(res){
		var html = '';
		//获取数据
		res.on('data',function(data){
			html += data;
		});
		//获取数据结束
		res.on('end',function(){	
			console.log('一分执行一次(*:*:01)'+new Date());
		});
	}).on('error',function(){	//获取错误的时候的处理
		console.log('获取课程数据失败！');
	})
});
