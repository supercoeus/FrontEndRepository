## Angular JS

### 过滤器 Filter

转换为大写   `{{name||uppercase}}`

保留两位小数 `{{ 123.456789 | number:2 }}`
	
转换为货币   `{{ 123 | currency }}`



	app.controller('DemoController', ['$scope', '$filter', 
	function($scope, $filter) { 
		$scope.name = $filter('lowercase')('Ari'); 
	}]); 

### 自定义过滤器（how to use?）
	angular.module('myApp.filters', []) 
	.filter('capitalize', function() { 
		return function(input) { 
			// input是我们传入的字符串
			if (input) { 
				return input[0].toUpperCase() + input.slice(1); 
			} 
	});

## 表单验证

* 必填项   `required`
* 最小长度 `ng-minlength="5"`
* 最大长度 `ng-maxlength="20"`
* 模式匹配 `ng-pattern="[a-zA-Z]"`
* 电子邮件 `type="email"`
* 数字 `type="number"`
* URL `type="url"`
* 自定义验证 
* 在表单中控制变量
* 未修改的表单 `formName.inputFieldName.$pristine `
* 修改过的表单 `formName.inputFieldName.$dirty `
* 合法的表单 `formName.inputFieldName.$valid `
* 不合法的表单 `formName.inputFieldName.$invalid `
* 错误 `formName.inputfieldName.$error`

* 有用的css样式

		.ng-pristine {} 
		.ng-dirty {} 
		.ng-valid {} 
		.ng-invalid {} 
## 表单验证 例子
	<form name="signup_form" novalidateng-submit="signupForm()"> 
		<fieldset> 
			<legend>Signup</legend> 
			<button type="submit" class="button radius">Submit</button> 
		</fieldset> 
	</form> 

	