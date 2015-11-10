// 定义全局的chart对象
var myChart;
var option;
var echarts;


//配置图表的路径，如bar(柱状图)
//  ./当前路径  ../当前路径上一级路径
require.config({
    paths: {
        echarts: '../plugin/echarts/js/echarts'
    }
});

//皮肤的使用   随机皮肤
var themeArr = ['default','blue','dark','gray','green','mint','red','roma','shine','sakura','macarons'];
var num = Math.random()*themeArr.length+" ";
var theme = 'default';
if( themeArr[parseInt(num.substr(0,1))] != null ) {
	theme = themeArr[parseInt(num.substr(0,1))];
}

// 使用
require(
    [
        'echarts',
        'echarts/theme/' + theme,
        'echarts/chart/line',
        'echarts/chart/bar',
        'echarts/chart/scatter',
        'echarts/chart/k',
        'echarts/chart/pie',
        'echarts/chart/radar',
        'echarts/chart/force',
        'echarts/chart/chord',
        'echarts/chart/gauge',
        'echarts/chart/funnel',
        'echarts/chart/eventRiver',
        'echarts/chart/venn',
        'echarts/chart/treemap',
        'echarts/chart/tree',
        'echarts/chart/wordCloud',
        'echarts/chart/heatmap',
        'echarts/chart/map'
    ],
    function (ec) {
    	//获取echarts对象，用于初始化图表
        echarts = ec;
        //初始化图表数据
        setData();
    }
);

function setData(){
	// 基于准备好的dom，初始化echarts图表
	myChart = echarts.init(document.getElementById('DongTaiShuJu'));
	option = {
	    title : {
	        text: '动态数据',
	        subtext: '纯属虚构'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['最新成交价', '预购队列']
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
	    dataZoom : {
	        show : false,
	        start : 0,
	        end : 100
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : true,
	            data : (function (){
	                var now = new Date();
	                var res = [];
	                var len = 10;
	                while (len--) {
	                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
	                    now = new Date(now - 2000);
	                }
	                return res;
	            })()
	        },
	        {
	            type : 'category',
	            boundaryGap : true,
	            data : (function (){
	                var res = [];
	                var len = 10;
	                while (len--) {
	                    res.push(len + 1);
	                }
	                return res;
	            })()
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            scale: true,
	            name : '价格',
	            boundaryGap: [0.2, 0.2]
	        },
	        {
	            type : 'value',
	            scale: true,
	            name : '预购量',
	            boundaryGap: [0.2, 0.2]
	        }
	    ],
	    series : [
	        {
	            name:'预购队列',
	            type:'bar',
	            xAxisIndex: 1,
	            yAxisIndex: 1,
	            data:(function (){
	                var res = [];
	                var len = 10;
	                while (len--) {
	                    res.push(Math.round(Math.random() * 1000));
	                }
	                return res;
	            })()
	        },
	        {
	            name:'最新成交价',
	            type:'line',
	            data:(function (){
	                var res = [];
	                var len = 10;
	                while (len--) {
	                    res.push((Math.random()*10 + 5).toFixed(1) - 0);
	                }
	                return res;
	            })()
	        }
	    ]
	};
	
	var lastData = 11;
	var axisData;	
	timeTicket = setInterval(function (){
	    lastData += Math.random() * ((Math.round(Math.random() * 10) % 2) == 0 ? 1 : -1);
	    lastData = lastData.toFixed(1) - 0;
	    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
	    // 动态数据接口 addData
	    myChart.addData([
	        [
	            0,        // 系列索引
	            Math.round(Math.random() * 1000), // 新增数据
	            true,     // 新增数据是否从队列头部插入
	            false     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
	        ],
	        [
	            1,        // 系列索引
	            lastData, // 新增数据
	            false,    // 新增数据是否从队列头部插入
	            false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
	            axisData  // 坐标轴标签
	        ]
	    ]);
	}, 2100);
	
	timeTicket
                    
	// 加载主题
	require(['echarts/theme/' + theme], function(tarTheme){
        curTheme = tarTheme;
        setTimeout(refreshTheme, 500);
    })
	function refreshTheme(){
		myChart.setTheme(curTheme);
		// 为echarts对象加载数据 
		myChart.setOption(option); 
	}
}

