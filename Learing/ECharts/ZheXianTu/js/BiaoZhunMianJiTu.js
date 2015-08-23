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
	myChart = echarts.init(document.getElementById('BiaoZhunMianJiTu')); 
	option = {
	    title : {
	        text: '某楼盘销售情况',
	        subtext: '纯属虚构'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['意向','预购','成交']
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : ['周一','周二','周三','周四','周五','周六','周日']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'成交',
	            type:'line',
	            smooth:true,
	            itemStyle: {normal: {areaStyle: {type: 'default'}}},
	            data:[10, 12, 21, 54, 260, 830, 710]
	        },
	        {
	            name:'预购',
	            type:'line',
	            smooth:true,
	            itemStyle: {normal: {areaStyle: {type: 'default'}}},
	            data:[30, 182, 434, 791, 390, 30, 10]
	        },
	        {
	            name:'意向',
	            type:'line',
	            smooth:true,
	            itemStyle: {normal: {areaStyle: {type: 'default'}}},
	            data:[1320, 1132, 601, 234, 120, 90, 20]
	        }
	    ]
	};
                    
	myChart.setOption(option);
}
