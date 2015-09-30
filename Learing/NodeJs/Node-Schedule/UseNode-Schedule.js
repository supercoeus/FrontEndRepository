//引入 node-schedule
var schedule = require('node-schedule');

//定时执行需要完成的功能
//1、到指定时间执行一次。
//2、每隔一段时间执行一次。
//3、从指定的时间开始，每隔一段时间执行一次。
//4、从指定的时间开始，执行固定的次数。


//通过表达式设置
//*    *    *    *    *    *
//┬    ┬    ┬    ┬    ┬    ┬
//│    │    │    │    │    |
//│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
//│    │    │    │    └───── month (1 - 12)
//│    │    │    └────────── day of month (1 - 31)
//│    │    └─────────────── hour (0 - 23)
//│    └──────────────────── minute (0 - 59)
//└───────────────────────── second (0 - 59, OPTIONAL)


//每分钟执行一次 (*:*:01) (1 */1 * * * *) ==>(1 * * * * *)
var k1 = schedule.scheduleJob('1 */1 * * * *',function(){
	console.log('一分执行一次(*:*:01)'+new Date());
});

//每天执行一次
//每天的 16:01:01 执行一次
var k2 = schedule.scheduleJob('01 01 16 */1 * *',function(){
	console.log('每天的 16:01:01 执行一次'+new Date());
});

//周一到周三 的任意一小时的32分01秒执行
var k3 = schedule.scheduleJob('01 33 * * * 1-3', function(){
    console.log('Today is recognized by Rebecca Black!'+new Date());
});


//指定的时间执行：2015年9月30号15:46:01执行,若果日期超过当前日期则执行。
//js的日期月份（0到 11）
var date = new Date(2015, 8, 30, 16, 33, 01);
var m = schedule.scheduleJob(date, function(){
    console.log('现在时间是：'+date);
});


//通过对象的方式设置
var rule = new schedule.RecurrenceRule();
rule.second = 1;

var j = schedule.scheduleJob(rule,function(){
	console.log("执行了。。。");
});

//从指定的时间开始每隔一段时间执行一次
var date = new Date(2015, 9, 30, 16, 39, 01);					//指定的时间
var m = schedule.scheduleJob(date, function(){
	//每隔1s执行一次
	var m1 = schedule.scheduleJob('*/1 * * * * *',function(){	//每隔一秒执行一次
		console.log('到'+date+'之后,每隔一秒执行一次');
	});
});

//到指定的时间之后，每隔一秒执行一次，执行5次
var date = new Date(2015, 8, 30, 16, 42, 30);					//指定的时间
var m = schedule.scheduleJob(date, function(){
	//每隔1s执行一次
	var times = 1;
	var m1 = schedule.scheduleJob('*/1 * * * * *',function(){	//每隔一秒执行一次
		console.log('到'+date+'之后,每隔一秒执行一次');
		times ++ ;
		if(times > 5) {
			m1.cancel();
		}
	});
});

//在未来使用当前数据
var data = "curr";
var n = schedule.scheduleJob('*/1 * * * * *',function(y){
	console.log('没有绑定数据 curr='+data);
});
var n = schedule.scheduleJob('*/1 * * * * *',function(y){
	console.log('绑定数据之后 curr='+y);
}.bind(null,data));
data = "future";






