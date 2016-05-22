
angular.module('myApp',['myProviderModule'])
	.controller('myController', function($scope, myProvider) {
		myProvider.sayHello();
		console.log(myProvider.text);
	})
	.config(function(myProviderProvider){
		myProviderProvider.text = "World !";
	});
	
