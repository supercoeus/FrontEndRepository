## 简单的图表的实现
* Step:1 引入一个模块加载器，如esl.js或require.js(html)

		<script src="js/esl.js"></script>
* Step:2 为ZRender准备一个具备大小（宽高）的Dom(html)

		<div id="first" style="width:100%;height: 400px; background-color: black;" ></div>
* Step:3 为模块加载器配置zrender的路径，从当前页面链接到zrender.js(js).相当于配置zrender.js的文件路径

		../../build 是zrender的目录路径 
		require.config({
		        paths:{ 
		            zrender:'../../build/zrender',
		            'zrender/shape/Circle' : '../../build/zrender'
		        }
		 });

* Step:4 动态加载zrender然后在回调函数中开始使用(js)，从配置的路径中 加载js

		require(
		    ['zrender','zrender/shape/Circle'],
		    function(zrender) {
		        var zr = zrender.init(document.getElementById('first'));
		        var CircleShape = require('zrender/shape/Circle');
				zr.addShape(
				    new CircleShape({
				        style : {
				            x : 100,
				            y : 100,
				            r : 50,
				            color : 'rgba(220, 20, 60, 0.8)'
				        }
				    })
				);
				zr.render();
		    }
		);
