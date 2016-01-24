

angular.module('MyApp', ['toaster', 'ngAnimate'])
    .controller('MyCtrl', function($scope, toaster) {
        $scope.buttonClick = function(type){
            //弹出窗口
            toaster.pop({
                type: type,             //类型
                title: 'Title text',    //标题
                body: 'Body text',      //内容
                showCloseButton: true,  //是否显示关闭按钮
            });
        };
    });