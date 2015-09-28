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
	        'echarts/chart/gauge' // 使用柱状图就加载gauge模块，按需加载
	    ],
	    function(ec){
	    	//获取echarts对象，用于初始化图表
	        echarts = ec;
	        //初始化图表数据
	        setData();
    	}
);
    
    
function setData(){
	myChart = echarts.init(document.getElementById('BiaoZhunYiBiaoPan')); 
	var option = {
	    tooltip : {
	        formatter: "{a} <br/>{b} : {c}%"
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            mark : {show: true},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    series : [
	        {
	            name:'业务指标',
	            type:'gauge',
	            startAngle: 180,
	            endAngle: 0,
	            center : ['50%', '90%'],    // 默认全局居中
	            radius : 320,
	            axisLine: {            // 坐标轴线
	                lineStyle: {       // 属性lineStyle控制线条样式
	                    width: 200
	                }
	            },
	            axisTick: {            // 坐标轴小标记
	                splitNumber: 10,   // 每份split细分多少段
	                length :12,        // 属性length控制线长
	            },
	            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
	                formatter: function(v){
	                    switch (v+''){
	                        case '10': return '低';
	                        case '50': return '中';
	                        case '90': return '高';
	                        default: return '';
	                    }
	                },
	                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                    color: '#fff',
	                    fontSize: 15,
	                    fontWeight: 'bolder'
	                }
	            },
	            pointer: {
	                width:50,
	                length: '90%',
	                color: 'rgba(255, 255, 255, 0.8)'
	            },
	            title : {
	                show : true,
	                offsetCenter: [0, '-60%'],       // x, y，单位px
	                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                    color: '#fff',
	                    fontSize: 30
	                }
	            },
	            detail : {
	                show : true,
	                backgroundColor: 'rgba(0,0,0,0)',
	                borderWidth: 0,
	                borderColor: '#ccc',
	                width: 100,
	                height: 40,
	                offsetCenter: [0, -40],       // x, y，单位px
	                formatter:'{value}%',
	                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                    fontSize : 50
	                }
	            },
	            data:[{value: 50, name: '完成率'}]
	        }
	    ]
	};	                                  
	myChart.setOption(option);
}
