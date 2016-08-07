## 说明
基于angular的表单验证插件，比较简单容易扩展。

### 怎么用  
1. 引入文件

	
		<link rel="stylesheet" href="css/customValidator.css"/>
	
	    <script src="plugins/angular-1.4.8/angular.js"></script>
	    <script src="js/dataValidationFactory.js"></script>
	    <script src="js/customValidator.js"></script>
	    <script src="js/indexCtrl.js"></script>
	说明: indexCtrl是自己定义的 controller, 需要在controller里面引入 `validatorInfoDirective` 指令。
2. 在页面中添加验证

		<body ng-app="indexModule" ng-controller="indexCtrl">
		    <div>
		        <div style="width:100px; height: 50px;">
		            <label>姓名</label>
		            <div validator-info submit-button-id="saveData" class="validatorInfo_1"  name="姓名" field="name" functions="not_null,min_length_5,max_length_20"></div>
		            <input type="text" ng-model="name" >
		        </div>
		
		        <div  style="width:100px; height: 50px;">
		            <label>年龄</label>
		            <div validator-info submit-button-id="saveData" class="validatorInfo_1"  name="年龄" field="age" functions="not_null"></div>
		            <input type="text" ng-model="age" >
		        </div>
		
		        <div  style="width:100px; height: 50px;">
		            <label>地址</label>
		            <div validator-info submit-button-id="saveData" class="validatorInfo_1"  name="地址" field="address" functions="not_null"></div>
		            <input type="text" ng-model="address" >
		        </div>
		
		        <div  style="width:100px; height: 50px;">
		            <input id="saveData" type="button" value="保存">
		        </div>
		    </div>
		</body>

指令参数说明：

	<div validator-info submit-button-id="saveData" class="validatorInfo_1"  name="年龄" field="age" functions="not_null"></div>

* submit-button-id 绑定的提交按钮
* class 自定义的class用于覆盖原来的样式
* name 验证字段的名字
* field 验的字段（与angular绑定的数据）
* functions 需要验证的方法（多个方法用 `,` 分割）。目前支持的方法如下
	* not_null
	* min_length_n
	* max_length_n
	* is_tel
	* is_email
	* must_select
	* is_number
	* min_number_n
	* max_number_n
	
	说明：除了非空验证之外，其他的所有验证在字段的值为空的时候都会通过。方法名最后的 `_n` 为参数。`min_length_5` 长度大于等于5，所有的比较都为包含关系（例如 `min_length_5` 长度大于等于5）。