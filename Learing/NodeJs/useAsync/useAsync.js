var async = require("async");

var dataArr = ['1','2','3','4'];

async.forEachSeries(dataArr,function(item,lalalla){
	console.log("原始数据:"+item);
	setTimeout(function(){
		console.log('异步调用的内容，输出:'+item+1);
//		console.log("延时:"+item.delay);
	},2000);
},function(err){});

function lalalla(err){
	
}
