// Step:3 为模块加载器配置zrender的路径，从当前页面链接到zrender.js
//require.config({
//      paths:{ 
//          zrender:'../js/zrender/zrender',
//          'zrender/shape/Circle' : '../js/zrender/zrender'
//      }
// });

//一个比较全面的配置文件
var fileLocation = '../js/zrender/zrender';
    require.config({
        paths:{ 
            zrender: fileLocation,
            'zrender/shape/Rose': fileLocation,
            'zrender/shape/Trochoid': fileLocation,
            'zrender/shape/Circle': fileLocation,
            'zrender/shape/Sector': fileLocation,
            'zrender/shape/Ring': fileLocation,
            'zrender/shape/Ellipse': fileLocation,
            'zrender/shape/Rectangle': fileLocation,
            'zrender/shape/Text': fileLocation,
            'zrender/shape/Heart': fileLocation,
            'zrender/shape/Droplet': fileLocation,
            'zrender/shape/Line': fileLocation,
            'zrender/shape/Image': fileLocation,
            'zrender/shape/Star': fileLocation,
            'zrender/shape/Isogon': fileLocation,
            'zrender/shape/BezierCurve': fileLocation,
            'zrender/shape/Polyline': fileLocation,
            'zrender/shape/Path': fileLocation,
            'zrender/shape/Polygon': fileLocation
        }
});
 
// Step:4 动态加载zrender然后在回调函数中开始使用
//require(
//  ['zrender','zrender/shape/Circle'],
//  function(zrender) {
//      var zr = zrender.init(document.getElementById('MyFirstZrenderChart'));
//      var CircleShape = require('zrender/shape/Circle');
//		zr.addShape(
//		    new CircleShape({
//		        style : {
//		            x : 100,
//		            y : 100,
//		            r : 50,
//		            color : 'rgba(220, 20, 60, 0.8)'
//		        }
//		    })
//		);
//		zr.render();
//  }
//);

//比较全面的加载文件
require(
    	['zrender',
        'zrender/shape/Rose',
        'zrender/shape/Trochoid',
        'zrender/shape/Circle',
        'zrender/shape/Sector',
        'zrender/shape/Ring',
        'zrender/shape/Ellipse',
        'zrender/shape/Rectangle',
        'zrender/shape/Text',
        'zrender/shape/Heart',
        'zrender/shape/Droplet',
        'zrender/shape/Line',
        'zrender/shape/Image',
        'zrender/shape/Star',
        'zrender/shape/Isogon',
        'zrender/shape/BezierCurve',
        'zrender/shape/Polyline',
        'zrender/shape/Path',
        'zrender/shape/Polygon'],
    function(zrender) {
        var zr = zrender.init(document.getElementById('MyFirstZrenderChart'));
        var CircleShape = require('zrender/shape/Circle');
		zr.addShape(
		    new CircleShape({
		        style : {
		            x : 100,
		            y : 100,
		            r : 50,
		            color : 'rgba(220, 20, 60, 0.8)'
		        }
		    })
		);
		zr.render();
    }
);