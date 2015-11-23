//第一个模块

var firstModule = angular.module("firstApp",[]);

firstModule.controller('FirstController1',function($scope){
	$scope.number = 1;
});

firstModule.controller('FirstController2',function($scope){
	$scope.number = 2;
});

firstModule.controller('FirstController3',function($scope){
	$scope.number = 3;
});

//第二个模块
var secondModule = angular.module("secondModule", []);
secondModule.controller('FirstController',function($scope) {
        $scope.number = 5;
});
angular.element(document).ready(function() {
    angular.bootstrap(secondAppId, ['secondModule']);
});