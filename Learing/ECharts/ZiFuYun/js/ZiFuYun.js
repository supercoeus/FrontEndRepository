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
	myChart = echarts.init(document.getElementById('ZiFuYun'));
	
	function createRandomItemStyle() {
	    return {
	        normal: {
	            color: 'rgb(' + [
	                Math.round(Math.random() * 160),
	                Math.round(Math.random() * 160),
	                Math.round(Math.random() * 160)
	            ].join(',') + ')'
	        }
	    };
	}
	
	option = {
	    title: {
	        text: 'Google Trends',
	        link: 'http://www.google.com/trends/hottrends'
	    },
	    tooltip: {
	        show: true
	    },
	    series: [{
	        name: 'Google Trends',
	        type: 'wordCloud',
	        size: ['80%', '80%'],
	        textRotation : [0, 45, 90, -45],
	        textPadding: 0,
	        autoSize: {
	            enable: true,
	            minSize: 14
	        },
	        data: [
	            {
	                name: "Sam S Club",
	                value: 10000,
	                itemStyle: {
	                    normal: {
	                        color: 'black'
	                    }
	                }
	            },
	            {
	                name: "Macys",
	                value: 6181,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "Amy Schumer",
	                value: 4386,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "Jurassic World",
	                value: 4055,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "Charter Communications",
	                value: 2467,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "Chick Fil A",
	                value: 2244,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "Planet Fitness",
	                value: 1898,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "Pitch Perfect",
	                value: 1484,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "Express",
	                value: 1112,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "Home",
	                value: 965,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "Johnny Depp",
	                value: 847,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "Lena Dunham",
	                value: 582,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "Lewis Hamilton",
	                value: 555,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "KXAN",
	                value: 550,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "Mary Ellen Mark",
	                value: 462,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "Farrah Abraham",
	                value: 366,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "Rita Ora",
	                value: 360,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "Serena Williams",
	                value: 282,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "NCAA baseball tournament",
	                value: 273,
	                itemStyle: createRandomItemStyle()
	            },
	            {
	                name: "Point Break",
	                value: 265,
	                itemStyle: createRandomItemStyle()
	            }
	        ]
	    }]
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

