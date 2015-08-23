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
	myChart = echarts.init(document.getElementById('ZheXianTu')); 
	option = {
	    legend: {
	        data:['高度(km)与气温(°C)变化关系']
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    tooltip : {
	        trigger: 'axis',
	        formatter: "Temperature : <br/>{b}km : {c}°C"
	    },
	    xAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} °C'
	            }
	        }
	    ],
	    yAxis : [
	        {
	            type : 'category',
	            axisLine : {onZero: false},
	            axisLabel : {
	                formatter: '{value} km'
	            },
	            boundaryGap : false,
	            data : ['0', '10', '20', '30', '40', '50', '60', '70', '80']
	        }
	    ],
	    series : [
	        {
	            name:'高度(km)与气温(°C)变化关系',
	            type:'line',
	            smooth:true,
	            itemStyle: {
	                normal: {
	                    lineStyle: {
	                        shadowColor : 'rgba(0,0,0,0.4)'
	                    }
	                }
	            },
	            data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
	        }
	    ]
	};              
	myChart.setOption(option);
}
