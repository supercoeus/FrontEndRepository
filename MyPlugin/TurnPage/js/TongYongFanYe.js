var app = angular.module('myApp', []);

app.controller('TurnPageController', function($scope) {
    //记录页面的信息
    $scope.pageObj = {};
    $scope.pageObj.pageSize = 4 ;			//页面大小
    $scope.pageObj.cuurPage = 1 ;			//当前页
    $scope.pageObj.count = 40;				//总的信息数目
    $scope.pageObj.pageCount = 0;			//一共有多少页
    $scope.pageObj.pageCountOfGroup = 4 	//每一组有多少页
    $scope.pageObj.firstPage = 1;			//当前组的第一页
    $scope.pageObj.isShowNextPages = true;	//下一组按钮是否显示
    $scope.pageObj.isShowlastPages = true;	//上一组按钮是否显示
    $scope.pageObj.goPage = 0;				//要跳转到的页面
    $scope.pageObj.data = [];				//用于存放当前页面的数据
    $scope.pageDates = {};					//用于存储当前页面的数据
    
    //计算总页数
    for(var i = 0 ; i < $scope.pageObj.count /$scope.pageObj.pageSize; i++){
    	$scope.pageObj.pageCount ++;
    }
    if($scope.pageObj.pageCount < $scope.pageObj.count/$scope.pageObj.pageSize){
    	$scope.pageObj.pageCount ++;
    }
    
    //选中页面
    $scope.selectIndex = function(index){
    	//取消选中
    	for(var i = 0 ; i < $scope.pageObj.data.length; i++){
    		$scope.pageObj.data[i].selected = false;
    	}
    	//选中点击的
    	$scope.pageObj.data[index].selected = true;
    	//获取数据，刷新页面
    	$scope.pageObj.cuurPage = $scope.pageObj.data[index].number;
    	$scope.frushPageDatas();
    }
    //下一组
    $scope.nextPages = function() {
    	if($scope.pageObj.firstPage + $scope.pageObj.pageCountOfGroup > $scope.pageObj.pageCount){
    		alert("超出页面范围！");
    	}else{
    		$scope.pageObj.firstPage = $scope.pageObj.firstPage + $scope.pageObj.pageCountOfGroup;
    		$scope.initPage();
    		$scope.frushPageDatas();
    	}
    }
    //上一组
    $scope.lastPages = function() {
    	if($scope.pageObj.firstPage - $scope.pageObj.pageCountOfGroup < 1){
    		alert("超出页面范围");
    	}else{
    		$scope.pageObj.firstPage =$scope.pageObj.firstPage - $scope.pageObj.pageCountOfGroup;
    		$scope.initPage();
    		$scope.frushPageDatas();
    	}
    }
    //跳转到指定的页面
    $scope.goToPage = function(index) {
    	if(index <= $scope.pageObj.pageCount && index >= 1) {
    		//判断要跳转的页在第几个分组，并选中跳转到的页面
    		$scope.pageObj.firstPage = 0;
    		var page = index / $scope.pageObj.pageCountOfGroup;
    		for(var i = 0 ; i < page ; i++) {
    			$scope.pageObj.firstPage = i * $scope.pageObj.pageCountOfGroup + 1;
    		}
    		$scope.initPage();
    		//选中点击的
    		for(var i = 0 ; i < $scope.pageObj.data.length ; i++) {
    			if(index == $scope.pageObj.data[i].number) {
    				$scope.pageObj.data[i].selected = true;
    			}else{
    				$scope.pageObj.data[i].selected = false;
    			}
    		}
    		$scope.pageObj.cuurPage = index;
	    	//刷新页面数据
	    	$scope.frushPageDatas();
    	}else{
    		if(typeof index == "number"){
    			alert("超出页面范围!");
    		}else{
    			alert("数字格式错误!");
    		}
    		
    	}
    	
    }
    
    //初始化页面
    $scope.initPage = function(){
    	//存储一组页面按钮的状态
    	$scope.pageObj.data = [];
	    for(var i = 0 ; i < $scope.pageObj.pageCountOfGroup ; i ++) {
	    	var o = {};
	    	o.number = $scope.pageObj.firstPage + i;
	    	o.selected = false;
	    	if(i == 0) {
	    		o.selected = true;
	    	}
	    	o.isShow = true;
	    	if($scope.pageObj.pageCount < $scope.pageObj.firstPage +i){
	    		o.isShow = false;
	    	}
	    	$scope.pageObj.data.push(o);
	    }
	    //判断上一组按钮以及下一组按钮是否显示
    	if($scope.pageObj.firstPage - $scope.pageObj.pageCountOfGroup > 0){
    		$scope.pageObj.isShowLastPages = true;
    	}else{
    		$scope.pageObj.isShowLastPages = false;
    	}
    	if($scope.pageObj.firstPage + $scope.pageObj.pageCountOfGroup > $scope.pageObj.pageCount){
    		$scope.pageObj.isShowNextPages = false;
    	}else{
    		$scope.pageObj.isShowNextPages = true;
    	}
    	$scope.pageObj.cuurPage = $scope.pageObj.firstPage;
    }
    //刷新页面数据
   	$scope.frushPageDatas = function(){
   		console.log($scope.pageObj.cuurPage);
   	}
   	
    
    //初始化
    $scope.initPage();
    $scope.frushPageDatas();
});