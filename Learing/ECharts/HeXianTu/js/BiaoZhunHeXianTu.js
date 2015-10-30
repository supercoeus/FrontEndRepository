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
	myChart = echarts.init(document.getElementById('BiaoZhunHeXianTu'));
	option = {
	    title : {
	        text: '测试数据',
	        subtext: 'From d3.js',
	        x:'right',
	        y:'bottom'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: function (params) {
	            if (params.indicator2) { // is edge
	                return params.value.weight;
	            } else {// is node
	                return params.name
	            }
	        }
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            restore : {show: true},
	            magicType: {show: true, type: ['force', 'chord']},
	            saveAsImage : {show: true}
	        }
	    },
	    legend: {
	        x: 'left',
	        data:['group1','group2', 'group3', 'group4']
	    },
	    series : [
	        {
	            type:'chord',
	            sort : 'ascending',
	            sortSub : 'descending',
	            showScale : true,
	            showScaleText : true,
	            data : [
	                {name : 'group1'},
	                {name : 'group2'},
	                {name : 'group3'},
	                {name : 'group4'}
	            ],
	            itemStyle : {
	                normal : {
	                    label : {
	                        show : false
	                    }
	                }
	            },
	            matrix : [
	                [11975,  5871, 8916, 2868],
	                [ 1951, 10048, 2060, 6171],
	                [ 8010, 16145, 8090, 8045],
	                [ 1013,   990,  940, 6907]
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

