function Father(){
		this.name = "";
		this.active = false;
}

function Child(){
	this.name = "";
	this.id = "";
	this.descripe = "二级菜单";
	this.select = false;
}

var secondMenuModule = angular.module('secondMenuModule',[]);

secondMenuModule.controller('twoMenuController',function($scope, $timeout, $http){
	//模拟数据二级菜单的数据
	$scope.topMenus = new Array();
	$scope.secondMenus = new Array();
	//当前选中的菜单的信息
	$scope.menu = new Object();
	
	$scope.menu.selectTop = 0;
	$scope.menu.selectMenu = 0;
	
	//初始化top菜单数据
	for (var i = 0 ; i < 5 ; i++ ) {
		var father = new Father();
		father.name = "father"+i;
		$scope.topMenus.push(father);
	}
	//初始化二级菜单数据
	for(var i = 0  ; i < 5 ; i ++){
		var childs = new Array();
		for(var j = 0 ; j < i+1 ; j++){
			var child = new Child();
			child.name = "child"+i+j;
			child.id = ""+i+j;
			childs.push(child);
		}
		$scope.secondMenus.push(childs);
	}
	//初始化的时候选中以一个菜单下的第一个元素
	$scope.topMenus[$scope.menu.selectTop].active  = true;
	$scope.secondMenus[$scope.menu.selectTop][$scope.menu.selectMenu].select = true;
	
	//展开第i个菜单
	$scope.showTop = function(i){
		//重新设置当前选中的元素
		$scope.topMenus[$scope.menu.selectTop].active = false;
		$scope.secondMenus[$scope.menu.selectTop][$scope.menu.selectMenu].select = false;
		$scope.menu.selectTop = i;
		$scope.menu.selectMenu = 0;
		//设置第i个菜单的第一个元素为选中元素
		$scope.topMenus[$scope.menu.selectTop].active  = true;
		$scope.secondMenus[$scope.menu.selectTop][$scope.menu.selectMenu].select = true;
	}
	
	
	//选中第i个菜单的第j个元素(top不变)
	$scope.selectSecond = function(j){
		$scope.secondMenus[$scope.menu.selectTop][$scope.menu.selectMenu].select = false;
		$scope.menu.selectMenu = j;
		$scope.secondMenus[$scope.menu.selectTop][$scope.menu.selectMenu].select = true;
	}
	
})





