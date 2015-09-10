$(function(){
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
});
