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
	myChart = echarts.init(document.getElementById('LouDouTu'));
	option = {
	    title : {
	        text: '漏斗图',
	        subtext: '纯属虚构'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c}%"
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
	    legend: {
	        data : ['展现','点击','访问','咨询','订单']
	    },
	    calculable : true,
	    series : [
	        {
	            name:'漏斗图',
	            type:'funnel',
	            width: '40%',
	            data:[
	                {value:60, name:'访问'},
	                {value:40, name:'咨询'},
	                {value:20, name:'订单'},
	                {value:80, name:'点击'},
	                {value:100, name:'展现'}
	            ]
	        },
	        {
	            name:'金字塔',
	            type:'funnel',
	            x : '50%',
	            sort : 'ascending',
	            itemStyle: {
	                normal: {
	                    // color: 各异,
	                    label: {
	                        position: 'left'
	                    }
	                }
	            },
	            data:[
	                {value:60, name:'访问'},
	                {value:40, name:'咨询'},
	                {value:20, name:'订单'},
	                {value:80, name:'点击'},
	                {value:100, name:'展现'}
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

