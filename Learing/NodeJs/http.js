var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'content':'没有了吗？',
	'rid':10000,
});

var options = {
	hostname:'www.imooc.com',
	port:80,
	path:'/',
	header:''
}

var req = http.request(options,function(res){
	console.log(res.statueCode);
	console.log(JSON.stringify(res.headers));
	
	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	});
	
	res.on('end', function(){
		console.log('------------请求结束-------------');
	});
	
});

req.on('error',function(e){
	console.log('Error:'+e.message);
});

req.write(postData);
req.end();

function stringToHeader (string) {
	var headers = string;
	headers = headers.replace(/,/g,"\',\'");
	headers = headers.replace(/:/g,"\':\'");
	headers = '\'' + headers + '\'';
	return headers;
}

var  headers = stringToHeader("sun:sss,dsds:dsad,asdasd:dasda");

console.log(headers);
