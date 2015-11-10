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
	myChart = echarts.init(document.getElementById('ReLiTu'));
	var heatData = [];
	for (var i = 0; i < 20; ++i) {
	    heatData.push([
	        400 + Math.random() * 300,
	        5 + Math.random() * 10,
	        Math.random()
	    ]);
	}
	for (var i = 0; i < 100; ++i) {
	    heatData.push([
	        100 + Math.random() * 600,
	        150 + Math.random() * 50,
	        Math.random()
	    ]);
	}
	for (var i = 0; i < 200; ++i) {
	    heatData.push([
	        Math.random() * 1000,
	        Math.random() * 800,
	        Math.random() * 0.5
	    ]);
	}
	option = {
	    title : {
	        text: '热力图自定义样式'
	    },
	    series : [
	        {
	            type : 'heatmap',
	            data : heatData,
	            hoverable : false,
	            gradientColors: [{
	                offset: 0.4,
	                color: 'green'
	            }, {
	                offset: 0.5,
	                color: 'yellow'
	            }, {
	                offset: 0.8,
	                color: 'orange'
	            }, {
	                offset: 1,
	                color: 'red'
	            }],
	            minAlpha: 0.2,
	            valueScale: 2,
	            opacity: 0.6
	        }
	    ]
	};
                    
	
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

