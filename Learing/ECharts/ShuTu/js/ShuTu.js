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
	myChart = echarts.init(document.getElementById('ShuTu'));
	option = {
	    title : {
	        text: '手机品牌',
	        subtext: '线、节点样式'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{b}: {c}"
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
	    calculable : false,
	
	    series : [
	        {
	            name:'树图',
	            type:'tree',
	            orient: 'horizontal',  // vertical horizontal
	            rootLocation: {x: 100, y: '60%'}, // 根节点位置  {x: 'center',y: 10}
	            nodePadding: 20,
	            symbol: 'circle',
	            symbolSize: 40,
	            itemStyle: {
	                normal: {
	                    label: {
	                        show: true,
	                        position: 'inside',
	                        textStyle: {
	                            color: '#cc9999',
	                            fontSize: 15,
	                            fontWeight:  'bolder'
	                        }
	                    },
	                    lineStyle: {
	                        color: '#000',
	                        width: 1,
	                        type: 'broken' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
	                    }
	                },
	                emphasis: {
	                    label: {
	                        show: true
	                    }
	                }
	            },
	            data: [
	                {
	                    name: '手机',
	                    value: 6,
	                    symbolSize: [90, 70],
	                    symbol: 'image://http://www.iconpng.com/png/ecommerce-business/iphone.png',
	                    itemStyle: {
	                        normal: {
	                            label: {
	                                show: false
	                            }
	                        }
	                    },
	                    children: [
	                        {
	                            name: '小米',
	                            value: 4,
	                            symbol: 'image://http://pic.58pic.com/58pic/12/36/51/66d58PICMUV.jpg',
	                            itemStyle: {
	                                normal: {
	                                    label: {
	                                        show: false
	                                    }
	                                }
	                            },
	                            symbolSize: [60, 60],
	                            children: [
	                                {
	                                    name: '小米1',
	                                    symbol: 'circle',
	                                    symbolSize: 20,
	                                    value: 4,
	                                    itemStyle: {
	                                        normal: {
	                                            color: '#fa6900',
	                                            label: {
	                                                show: true,
	                                                position: 'right'
	                                            },
	                                            
	                                        },
	                                        emphasis: {
	                                            label: {
	                                                show: false
	                                            },
	                                            borderWidth: 0
	                                        }
	                                    }
	                                },
	                                {
	                                    name: '小米2',
	                                    value: 4,
	                                    symbol: 'circle',
	                                    symbolSize: 20,
	                                    itemStyle: {
	                                        normal: {
	                                            label: {
	                                                show: true,
	                                                position: 'right',
	                                                formatter: "{b}"
	                                            },
	                                            color: '#fa6900',
	                                            borderWidth: 2,
	                                            borderColor: '#cc66ff'
	
	                                        },
	                                        emphasis: {
	                                            borderWidth: 0
	                                        }
	                                    }
	                                },
	                                {
	                                    name: '小米3',
	                                    value: 2,
	                                    symbol: 'circle',
	                                    symbolSize: 20,
	                                    itemStyle: {
	                                        normal: {
	                                            label: {
	                                                position: 'right'
	                                            },
	                                            color: '#fa6900',
	                                            brushType: 'stroke',
	                                            borderWidth: 1,
	                                            borderColor: '#999966',
	                                        },
	                                        emphasis: {
	                                            borderWidth: 0
	                                        }
	                                    }
	                                }
	                            ]
	                        },
	                        {
	                            name: '苹果',
	                            symbol: 'image://http://www.viastreaming.com/images/apple_logo2.png',
	                            symbolSize: [60, 60],
	                            itemStyle: {
	                                normal: {
	                                    label: {
	                                        show: false
	                                    }
	                                    
	                                }
	                            },
	                            value: 4
	                        },
	                        {
	                            name: '华为',
	                            symbol: 'image://http://market.huawei.com/hwgg/logo_cn/download/logo.jpg',
	                            symbolSize: [60, 60],
	                            itemStyle: {
	                                normal: {
	                                    label: {
	                                        show: false
	                                    }
	                                    
	                                }
	                            },
	                            value: 2
	                        },
	                        {
	                            name: '联想',
	                            symbol: 'image://http://www.lenovo.com.cn/HomeUpload/Home001/6d94ee9a20140714.jpg',
	                            symbolSize: [100, 40],
	                            itemStyle: {
	                                normal: {
	                                    label: {
	                                        show: false
	                                    }
	                                    
	                                }
	                            },
	                            value: 2
	                        }
	                    ]
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

