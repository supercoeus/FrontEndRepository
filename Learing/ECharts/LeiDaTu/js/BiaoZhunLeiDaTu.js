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
	myChart = echarts.init(document.getElementById('BiaoZhunLeiDaTu'));
	option = {
	    title : {
	        text: '预算 vs 开销（Budget vs spending）',
	        subtext: '纯属虚构'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        orient : 'vertical',
	        x : 'right',
	        y : 'bottom',
	        data:['预算分配（Allocated Budget）','实际开销（Actual Spending）']
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    polar : [
	       {
	           indicator : [
	               { text: '销售（sales）', max: 6000},
	               { text: '管理（Administration）', max: 16000},
	               { text: '信息技术（Information Techology）', max: 30000},
	               { text: '客服（Customer Support）', max: 38000},
	               { text: '研发（Development）', max: 52000},
	               { text: '市场（Marketing）', max: 25000}
	            ]
	        }
	    ],
	    calculable : true,
	    series : [
	        {
	            name: '预算 vs 开销（Budget vs spending）',
	            type: 'radar',
	            data : [
	                {
	                    value : [4300, 10000, 28000, 35000, 50000, 19000],
	                    name : '预算分配（Allocated Budget）'
	                },
	                 {
	                    value : [5000, 14000, 28000, 31000, 42000, 21000],
	                    name : '实际开销（Actual Spending）'
	                }
	            ]
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

