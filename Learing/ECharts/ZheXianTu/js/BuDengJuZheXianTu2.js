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
	myChart = echarts.init(document.getElementById('BuDengJuZheXianTu2')); 
	option = {
	    title : {
	        text: '双数值轴折线',
	        subtext: '纯属虚构'
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer:{
	            show: true,
	            type : 'cross',
	            lineStyle: {
	                type : 'dashed',
	                width : 1
	            }
	        },
	        formatter : function (params) {
	            return params.seriesName + ' : [ '
	                   + params.value[0] + ', ' 
	                   + params.value[1] + ' ]';
	        }
	    },
	    legend: {
	        data:['数据1','数据2']
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            mark : {show: true},
	            dataZoom : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type: 'value'
	        }
	    ],
	    yAxis : [
	        {
	            type: 'value',
	            axisLine: {
	                lineStyle: {
	                    color: '#dc143c'
	                }
	            }
	        }
	    ],
	    series : [
	        {
	            name:'数据1',
	            type:'line',
	            data:[
	                [1.5, 10], [5, 7], [8, 8], [12, 6], [11, 12], [16, 9], [14, 6], [17, 4], [19, 9]
	            ],
	            markPoint : {
	                data : [
	                    // 纵轴，默认
	                    {type : 'max', name: '最大值',symbol: 'emptyCircle', itemStyle:{normal:{color:'#dc143c',label:{position:'top'}}}},
	                    {type : 'min', name: '最小值',symbol: 'emptyCircle', itemStyle:{normal:{color:'#dc143c',label:{position:'bottom'}}}},
	                    // 横轴
	                    {type : 'max', name: '最大值', valueIndex: 0, symbol: 'emptyCircle', itemStyle:{normal:{color:'#1e90ff',label:{position:'right'}}}},
	                    {type : 'min', name: '最小值', valueIndex: 0, symbol: 'emptyCircle', itemStyle:{normal:{color:'#1e90ff',label:{position:'left'}}}}
	                ]
	            },
	            markLine : {
	                data : [
	                    // 纵轴，默认
	                    {type : 'max', name: '最大值', itemStyle:{normal:{color:'#dc143c'}}},
	                    {type : 'min', name: '最小值', itemStyle:{normal:{color:'#dc143c'}}},
	                    {type : 'average', name : '平均值', itemStyle:{normal:{color:'#dc143c'}}},
	                    // 横轴
	                    {type : 'max', name: '最大值', valueIndex: 0, itemStyle:{normal:{color:'#1e90ff'}}},
	                    {type : 'min', name: '最小值', valueIndex: 0, itemStyle:{normal:{color:'#1e90ff'}}},
	                    {type : 'average', name : '平均值', valueIndex: 0, itemStyle:{normal:{color:'#1e90ff'}}}
	                ]
	            }
	        },
	        {
	            name:'数据2',
	            type:'line',
	            data:[
	                [1, 2], [2, 3], [4, 2], [7, 5], [11, 2], [18, 3]
	            ]
	        }
	    ]
	};
                                  
	myChart.setOption(option);
}
