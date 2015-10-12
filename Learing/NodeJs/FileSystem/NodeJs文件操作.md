## **NodeJs** 文件操作

引入依赖的模块：  `var fs = require("fs");`

#### 同步和异步的区别：
* 同步必须执行完当前的任务，才能继续执行其他任务。
* 异步当前任务执行的同时可以执行其他任务。
* 所有的同步操作只需在方法名后面添加Sync。如readFile()和readFileSync()

## 一些常用方法

* 读文件 `fs.readFile()`  
* 
		//异步读文件 
		fs.readFile("./sun.txt",function(err,data){
			if(err) {
				console.log(err);
			}else{
				console.log("异步操作\n"+data.toString());
			}
		});