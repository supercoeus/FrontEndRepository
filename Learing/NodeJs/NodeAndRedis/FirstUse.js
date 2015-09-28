var redis= require('redis');

//创建链接
var client = redis.createClient('6379','127.0.0.1');

//设置键为foo的值，然后执行回调函数
client.set('foo','bar',function(){
	//从redis中读取数据
	client.get('foo',function(error,fooValue){
		console.log(error);
		console.log(fooValue);
	});
});

//事务
var multi = client.multi();
multi.set('name','sunfeilong');
multi.sadd('set','a');
multi.sadd('set','b');
//error存储错误信息,repleis为数组存储运行结果
multi.exec(function(error,replies){
	console.log(replies);
});

// 发布/订阅模式
var pub = redis.createClient('6379','127.0.0.1');		//发布者
var sub = redis.createClient('6379','127.0.0.1');		//订阅者

//订阅频道
sub.subscribe('chat1');
//接收到信息之后执行
sub.on('message',function(channel,message){
	console.log('订阅者'+channel+'发来消息内容如下:'+message);
});
//订阅成功之后
sub.on('subscribe',function(channel,count){
	pub.publish('chat1',"小心袭击！");
})
