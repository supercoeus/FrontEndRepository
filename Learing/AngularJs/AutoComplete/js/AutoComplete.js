angular.module('myApp', ['ngTagsInput'])
	.controller('MyCtrl', function($scope, $http) {
	    $scope.tags = [];
	    $scope.loadTags = function() {
	        return [
		        { text: '孙飞龙' },
		        { text: '孙龙飞' },
		        { text: '理想' },
		        { text: '理智' },
		        { text: '理解' },
		        { text: '道理' },
		        { text: '啦啦' }
	    	];
	    };
	});