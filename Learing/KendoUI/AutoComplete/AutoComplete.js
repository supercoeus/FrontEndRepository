//自动提示框的内容
$(function () {
	//数据
	var data =[{ id: 1, ProductName: "Apples" },{ id: 2, name: "ProductName" }];
	//从服务器获取数据
	var dataSource = new kendo.data.DataSource({
	  transport: {
	    read: {
	      url: "http://demos.telerik.com/kendo-ui/service/products",
	      dataType: "jsonp"
	    }
	  }
	});
	
	//初始化输入框
	$("#autoComplete").kendoAutoComplete({
		//输入框显示的内容 data.ProductName
	  	 dataTextField: "ProductName",
	  	//是否显示加载动画,默认false，打开之后可能出现问题
	  	animation: false,
	  	//弹出和关闭动画的设置,配置显示选择列表和隐藏选择列表的时间
	  	animation: {
		   close: {
		     effects: "fadeOut zoom:out",
		     duration: 300
		   },
		   open: {
		     effects: "fadeIn zoom:in",
		     duration: 300
		   }
		},
		//键盘多长时间没有被点击的时候显示提示框
		delay:200,
		//输入框是否可以编辑,默认true
		enable:true,
		//过滤规则，默认startswith, 有startswith endswith contains
		filter: "startswith",
		//提示框的高度
		height: 300,
		//过滤的时候是否忽略大小写,默认false
		ignoreCase: false,
		//弹出提示框的最小输入长度,默认为1，最小为1
		minLength: 1,
		//输入框的提示信息
		placeholder : "请输入，输入任意字符再删除可以显示所有提示",
		//多选的时候的分隔符,设置之后就可以多选，默认为""
		//separator:",",
		//自动把匹配的第一个放入输入框
		suggest: true,
	  	//数据源可以为 对象、数组和 kendo.data.DataSource
	  	//dataSource: data,	
	  	dataSource: dataSource,
	  	//提示框的表头
	  	headerTemplate: '<div><h5>请选择</h5></div>'
	  	//自动提示框初始化的位置，通过元素的id指定
//	  	popup: {
//		    appendTo: $("#autoComplete")
//		}
	});
	
	
});


//其他
//自定义输入框的模板
//template: kendo.template($("#template").html())
//<script id="template" type="text/x-kendo-template">
//<span>
//  <img src="/img/#: id #.png" alt="#: name #" />
//  #: name #
//</span>
//</script>