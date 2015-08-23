var formModule = angular.module("formValid",['ngMessages']);

formModule.controller("formValidController",function($scope){
	$scope.userName ="";
	

	$scope.signupForm = function(){
		alert("submit");
	}
});
