'use strict';

/**
 * cheerIO的使用
 */

var cheerio = require('cheerio');
var http = require('http');
//要获取的地址的url
var beijing = "http://aqicn.org/city/beijing/";
//存储天气信息
var weartherAQI = {};



//请求数据
http.get(beijing,function(res){
	var html = '';
	//获取数据
	res.on('data',function(data){
		html += data;
	});
	//获取数据结束
	res.on('end',function(){
		//解析网页数据，获取空气质量信息
		var courseData = praseHtml(html);
	});
}).on('error',function(){	//获取错误的时候的处理
	console.log('获取课程数据失败！');
})

function praseHtml(html) {
  var $ = cheerio.load(html); 
  //pm2.5
  weartherAQI.cur_pm25 = $("#cur_pm25").text();
  weartherAQI.min_pm25 = $("#min_pm25").text();
  weartherAQI.max_pm25 = $("#max_pm25").text();
  //pm10 
  weartherAQI.cur_pm10 = $("#cur_pm10").text();
  weartherAQI.min_pm10 = $("#min_pm10").text();
  weartherAQI.max_pm10 = $("#max_pm10").text();
  //o3
  weartherAQI.cur_o3 = $("#cur_o3").text();
  weartherAQI.min_o3 = $("#min_o3").text();
  weartherAQI.max_o3 = $("#max_o3").text();
  //no2
  weartherAQI.cur_no2 = $("#cur_no2").text();
  weartherAQI.min_no2 = $("#min_no2").text();
  weartherAQI.max_no2 = $("#max_no2").text();
  //so2
  weartherAQI.cur_so2 = $("#cur_so2").text();
  weartherAQI.min_so2 = $("#min_so2").text();
  weartherAQI.max_so2 = $("#max_so2").text();
  //
  weartherAQI.cur_o3 = $("#cur_o3").text();
  weartherAQI.min_o3 = $("#min_o3").text();
  weartherAQI.max_o3 = $("#max_o3").text();
  //co
  weartherAQI.cur_co = $("#cur_co").text();
  weartherAQI.min_co = $("#min_co").text();
  weartherAQI.max_co = $("#max_co").text();
  //t
  weartherAQI.cur_t = $("#cur_t").text();
  weartherAQI.min_t = $("#min_t").text();
  weartherAQI.max_t = $("#max_t").text();
  //d
  weartherAQI.cur_d = $("#cur_d").text();
  weartherAQI.min_d = $("#min_d").text();
  weartherAQI.max_d = $("#max_d").text();
  //p
  weartherAQI.cur_p = $("#cur_p").text();
  weartherAQI.min_p = $("#min_p").text();
  weartherAQI.max_p = $("#max_p").text();
  //h
  weartherAQI.cur_h = $("#cur_h").text();
  weartherAQI.min_h = $("#min_h").text();
  weartherAQI.max_h = $("#max_h").text();
  //w
  weartherAQI.cur_w = $("#cur_w").text();
  weartherAQI.min_w = $("#min_w").text();
  weartherAQI.max_w = $("#max_w").text();
  console.log(JSON.stringify(weartherAQI));
}


