var useJsonMdule = angular.module('UseJsonModule',[]);

//测试Json.js 的使用
useJsonMdule.controller('UseJsonController',function($scope){
	var o = {};
	o.name = "sunfeilong";
	o.age = "22";
	o.sex = "man";
	
	console.log(o);
	//对象转换为JSON字符串
	console.log('JSON.stringify()把js对象转换为JSON字符串\t'+JSON.stringify(o));
	//JSON字符串转换为对象
	console.log('JSON.parse() 把字符串转换为对象\t'+JSON.parse(JSON.stringify(o)));
});
