var myChart;
var option;
var echarts;

//配置图表的路径，如bar(柱状图)
//  ./当前路径  ../当前路径上一级路径
require.config({
    paths: {
        echarts: './js/'
    }
});

//加载需要的图表，生成对应的echarts对象
require(
	    [
	        'echarts',
	        'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
	    ],
	    function(ec){
	    	//获取echarts对象，用于初始化图表
	        echarts = ec;
	        //初始化图表数据
	        setData();
    	}
);
    
    
function setData(){
	myChart = echarts.init(document.getElementById('DuiShuZhou')); 
	option = {
	   title: {
	       text: "对数轴示例",
	       x: "center"
	   },
	   tooltip: {
	       trigger: "item",
	       formatter: "{a} <br/>{b} : {c}"
	   },
	   legend: {
	       x: 'left',
	       data: ["2的指数", "3的指数"]
	   },
	   xAxis: [
	       {
	           type: "category",
	           name: "x",
	           splitLine: {show: false},
	           data: ["一", "二", "三", "四", "五", "六", "七", "八", "九"]
	       }
	   ],
	   yAxis: [
	       {
	           type: "log",
	           name: "y"
	       }
	   ],
	    toolbox: {
	       show: true,
	       feature: {
	           mark: {
	               show: true
	           },
	           dataView: {
	               show: true,
	               readOnly: true
	           },
	           restore: {
	               show: true
	           },
	           saveAsImage: {
	               show: true
	           }
	       }
	   },
	   calculable: true,
	   series: [
	       {
	           name: "3的指数",
	           type: "line",
	           data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
	
	       },
	       {
	           name: "2的指数",
	           type: "line",
	           data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
	
	       }
	   ]
	};
	                                  
	myChart.setOption(option);
}
