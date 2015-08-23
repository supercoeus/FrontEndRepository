var directiveModule = angular.module("directiveModule",[]);
//简单测试
directiveModule.directive("myDirective",function(){
	return {	
		restrict:'EA',
		//把自定义标签从页面移除,只显示template里面的内容
		replace: true,
		template:'<a href="http://www.baidu.com">百度</a>'
	};
});

//含有参数
directiveModule.directive("haveParamDirective",function(){
	return {	
		restrict:'A',
		//把自定义标签从页面移除,只显示template里面的内容
		replace: true,
		scope:{
			url:'=urlB',	//绑定策略，可以指定别名,相当于标签的属性名
			name:'@name1'	//绑定策略，可以指定别名，相当于标签的属性名
		},
		template:'<div><input type="text" ng-model="url"/><a href="{{url}}">{{name}}</a></div>',
		
	};
});

//内置指令

directiveModule.controller("innerDirectiveController",function($scope,$timeout){
	
	//
	$timeout(function() { 
		$scope.imgSrc = 'http://img6.cache.netease.com/photo/0003/2015-06-30/900x600_ATCDPR7500AJ0003.jpg';
		$scope.imgHref = 'http://img6.cache.netease.com/photo/0003/2015-06-30/900x600_ATCDPR7500AJ0003.jpg';
	}, 2000); 
	
});

//隔离指令的作用域
directiveModule.controller("CloseOffScopeController",
		function($scope){}).directive('closeOffScopeDirective',function(){
			return {
				restrict:'A',
				scope:{},
				priority:100,
				template:'<div>指令内部{{myProprity}}</div>'
			}
		}).directive('myInheritScopeDirective', function() { 
			return { 
				restrict: 'A', 
				template: 'Inside myDirective, isolate scope: {{ myProperty }}', 
				scope: true 
			}; 
		});
		
		
//自定以验证
directiveModule.directive('ensureUnique',function($http) { 
	return{ 
		require: 'ngModel', 
		link: function(scope, ele, attrs, c) { 
			scope.$watch(attrs.ngModel, function() { 
				$http({ 
					method: 'POST', 
					url: '/api/check/' + attrs.ensureUnique, 
					data: {field: attrs.ensureUnique, valud:scope.ngModel}
				}).success(function(data,status,headers,cfg) { 
					c.$setValidity('unique', data.isUnique); 
				}).error(function(data,status,headers,cfg) { 
					c.$setValidity('unique', false);
					alert(false);
				});
			}); 
		} 
	}
});
