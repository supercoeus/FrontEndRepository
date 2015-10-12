//引入文件IO模块
var fs = require("fs");

//所有的同步操作只需在方法名后面添加Sync
//同步和异步的区别：同步必须执行完当前的任务，才能继续执行其他任务。
//			        异步当前任务执行的同时可以执行其他任务。

/*
//异步读文件
fs.readFile("./sun.txt",function(err,data){
	if(err) {
		console.log(err);
	}else{
		console.log("异步操作\n"+data.toString());
	}
});
*/

//同步读文件
var dataSync = fs.readFileSync("./sun.txt");
console.log("同步操作\n"+dataSync);

//更改文件的名字
fs.rename("./sun.txt","./sunNewName.txt",function(err){
	if(err) {
		console.log(err);
	}
	//改回原来的名字
	var result = fs.renameSync("./sunNewName.txt","./sun.txt");
	console.log("---"+result);
});

//创建文件
fs.open("./sun1.txt","w",function(err,fd){
	fs.close(fd,function(){});
	//删除文件
	fs.unlink("./sun1.txt",function(err){
		if(err) {
			console.log(err);
		}
	})
});

////删除文件
//fs.unlink("./sun1.txt",function(err){
//	if(err) {
//		console.log(err);
//	}
//})

//打开文件，并向文件中写入内容
fs.open("./sun.txt","r+",function(err,fd){
	 fs.write(fd,"sunfelong",function(err, written, string){
	 	if(err) {
	 		console.log(err);
	 	}else{
	 		console.log("写入的长度为"+written+"写入的内容为:"+string);
	 	}
	 });
});

////添加到文件结尾
//fs.appendFile("./sun.txt","111",function(err){
//	if(err) {
//		console.log(err);	
//	}
//});

