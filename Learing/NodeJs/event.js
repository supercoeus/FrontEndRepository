var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

//设置事件的监听器的最大个数
life.setMaxListeners = 11;

function call110(name) {
	console.log(name+' first call 110')
}
function call120(name) {
	console.log(name+' second call 110')
}

//监听110事件
life.on('110',call110);
//监听110事件
life.on('110',call120);



//监听120事件
life.on('120',function(name){
	console.log(name+' second call 120')
})



//触发事件110,返回值为事件是否被监听过
life.removeListener('110',call110);
var hasChuFa1 = life.emit('110','A');
var hasChuFa2 = life.emit('120','B');
var hasChuFa3 = life.emit('119','A');
console.log(hasChuFa1+":"+hasChuFa2+":"+hasChuFa3)

//一处所有的监听函数
//life.removeAllListeners();
life.removeAllListeners('120');
//监听者的个数
var numberoOf110 = life.listeners('110').length;
var numberoOf110Second = EventEmitter.listenerCount(life,'120');


console.log(numberoOf110);
console.log(numberoOf110Second);


