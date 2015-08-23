## 一个简单的自定义指令的demo

**html:**  

	<div ng-app="directiveModule"> 
		<my-directive></my-directive>
	</div>

**js:**  

	var directiveModule = angular.module("directiveModule",[]);
	
	directiveModule.directive("myDirective",function(){
		return {	
			restrict:'E',
			//把自定义标签从页面移除,只显示template里面的内容
			replace: true,
			template:'<a href="http://www.baidu.com">百度</a>'
		};
	});     

 `directive:` 函数第一个参数是要创建的指令的名称，第二个参数是是返回值。
指令名应该是驼峰命名风格的，函数应该返回一个对象。   
`myDirective` 对应<my-directive>标签

##向指令中传数据
**html:**

	<div ng-app="directiveModule"> 
			<input type="text" ng-model="urlF" />
			<div have-param-directive url-b="urlF" name1="百度  带参数">
			</div>
	</div>
**js：**

	//含有参数
	directiveModule.directive("haveParamDirective",function(){
		return {	
			restrict:'A',
			//把自定义标签从页面移除,只显示template里面的内容
			replace: true,
			scope:{
				url:'=urlB',	//绑定策略，可以指定别名,相当于标签的属性名
				//@ 和 = 有区别，=用来和页面实现双向绑定
				name:'@name1'	//绑定策略，可以指定别名，相当于标签的属性名
			},
			template:'<div><input type="text" ng-model="url"/><a href="{{url}}">{{name}}</a></div>',
			
		};
	});

##一些参数的作用
* `replace: true` 把自定义标签从页面移除,只显示template里面的内容
* `template` 自定义标签返回的内容
* `restrict(限定，约束)`  以什么样的格式来调用指令。元素 （E）、属性（A）、类（C）或注释（M）。尽量使用属性的方式 `<div my-directive></div>`
