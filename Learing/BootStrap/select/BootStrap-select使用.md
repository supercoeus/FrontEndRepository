##bootstrap-selelect的使用
1. 引入文件

		<!--引入bootstrap的css-->
		<link rel="stylesheet" href="css/bootstrap.css" />
		<link rel="stylesheet" href="css/bootstrap-theme.css" />
		<!--引入bootstrap-select的css文件-->
		<link rel="stylesheet" href="css/bootstrap-select.css" />
		
		<script type="text/javascript" src="js/jquery-1.9.1.min.js" ></script>
		<!--引入bootstrap的js文件-->
		<script type="text/javascript" src="js/bootstrap.js" ></script>
		<script type="text/javascript" src="js/bootstrap-select.js" ></script>
		<!--引入bootstrap-select的js文件-->
		<script type="text/javascript" src="js/useBootstrap-select.js" ></script>

2. 简单的下拉选择框
		<select class="selectpicker">
			   <option>Mustard</option>
			   <option>Ketchup</option>
			   <option>Relish</option>
		</select>

			<select class="selectpicker">
				<option>Mustard</option>
				<option>Ketchup</option>
				<option>Relish</option>
			</select>
3. 分组的下拉选择框
<select class="selectpicker">
   <optgroup label="Picnic">
     <option>Mustard</option>
     <option>Ketchup</option>
     <option>Relish</option>
   </optgroup>
   <optgroup label="Camping">
     <option>Tent</option>
     <option>Flashlight</option>
     <option>Toilet Paper</option>
   </optgroup>
</select>

		<select class="selectpicker">
		   <optgroup label="Picnic">
		     <option>Mustard</option>
		     <option>Ketchup</option>
		     <option>Relish</option>
		   </optgroup>
		   <optgroup label="Camping">
		     <option>Tent</option>
		     <option>Flashlight</option>
		     <option>Toilet Paper</option>
		   </optgroup>
		</select>
4. 多选

		<select class="selectpicker" multiple>
			<option>11</option>
			<option>11</option>
			<option>11</option>
		</select>

6. 一些属性  

> multiple 多选  
> data-max-options="2" 最多选择的个数   
> data-style="btn-danger" 样式  btn-default,btn-primary,btn-success,btn-info,btn-warning,btn-danger  
> data-live-search="true" 显示搜索框
> title="请选择" 没有选择的时候的提示信息，用于多选  
> data-selected-text-format={'values'|'count'|'count > x'}
> > values:显示选中的值  
> > count > x 当大于x的时候显示数量，小于x的时候显示值  
> > count 默认当大于1的时候显示数量  

> show-tick 下拉框的样式 单选  
> data-width="auto" 下拉框自适应宽度  
> disabled optgroup 不可编辑用于select 
> disabled="disabled" 用于option  
> data-divider="true" 分隔线  
> data-subtext="333" option的一个辅助说明  
> data-header="Select a condiment" 下拉框的提示  


## 一个简单的应用：
html:

	<div >
		<select id="select1" class="selectpicker" multiple data-style="btn-info">
		   <option>Mustard</option>
		   <option>Ketchup</option>
		   <option>Relish</option>
		</select>
	</div>
js:

	//设定当前的选定值
	$('#select1').val('Ketchup');
	$('#select1').selectpicker('render');
	//选择全部
	$("#select1").selectpicker('selectAll');
	//取消选择全部
	$("#select1").selectpicker('deselectAll');
	
	// Replace Class
    $('#select1').selectpicker('setStyle', 'btn-danger');
    // Add Class
    $('#select1').selectpicker('setStyle', 'btn-large', 'add');
    // Remove Class
    $('#select1').selectpicker('setStyle', 'btn-large', 'remove');
    
    //刷新下拉框，添加/删除opiton
    $('#select1').selectpicker('refresh');
    
    //隐藏显示
    $('#select1').selectpicker('hide');
    $('#select1').selectpicker('show');
    //永久的移除
    //$('#select1').selectpicker('destroy');


