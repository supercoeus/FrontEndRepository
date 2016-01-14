var app = angular.module('myApp', []);

app.controller('TurnPageController', function($scope, $http) {
    //记录页面的信息
    $scope.pageObj = {};
    $scope.pageObj.pageSize = 4 ;			//页面大小,一页显示多少条数据
    $scope.pageObj.cuurPage = 1 ;			//当前页,当前显示的是第几页的内容
    $scope.pageObj.count = 40;				//总的信息数目(需要初始化)
    $scope.pageObj.pageCount = 0;			//一共有多少页
    $scope.pageObj.pageCountOfGroup = 4 	//每一组有多少页
    $scope.pageObj.firstPage = 1;			//当前组的第一页
    $scope.pageObj.isShowNextPages = true;	//下一组按钮是否显示
    $scope.pageObj.isShowlastPages = true;	//上一组按钮是否显示
    $scope.pageObj.goPage = 0;				//要跳转到的页面
    $scope.pageObj.data = [];				//用于存放    当前页面的分页 信息   数据(分页按钮是否显示等)
    $scope.allPageDates = [];				//用于存放    列表的所有数据
    $scope.pageDates = [];					//用于存放    当前页列表展示的        数据
   
    //计算总页数
    $scope.pageObj.pageCount = Math.ceil($scope.pageObj.count /$scope.pageObj.pageSize);

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
    		$scope.resetTurnPageButton();
    		$scope.frushPageDatas();
    	}
    }
    
    //上一组
    $scope.lastPages = function() {
    	if($scope.pageObj.firstPage - $scope.pageObj.pageCountOfGroup < 1){
    		alert("超出页面范围");
    	}else{
    		$scope.pageObj.firstPage =$scope.pageObj.firstPage - $scope.pageObj.pageCountOfGroup;
    		$scope.resetTurnPageButton();
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
    		$scope.resetTurnPageButton();
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
    	//通过http请求获取数据
    	var name = "s";
    	$http(
    		{
    			method:"POST",
    			url:"127.0.0.1:8080/test",
    			params:{param1:"1",param2:name}
    		}
    	).success(function(data){
    		//从对应的地址获取数据,获取的数据为二维数组，第一列为表头信息
    		if(data != null && data != "") {
    			$scope.allPageDates = data.data;
    			$scope.pageObj.count = $scope.allPageDates.length - 1;
    			$scope.pageObj.pageCount = Math.ceil($scope.pageObj.count /$scope.pageObj.pageSize);
    			$scope.resetTurnPageButton();
				$scope.frushPageDatas();
    		}
    	}).error(function(data){
    		//因为没有对应的地址，所以请求失败，手动模拟测试数据
    		$scope.allPageDates = [];
    		$scope.allPageDates.push(["i","(i*i)"]);
    		for(var i = 1 ; i <= 1000 ; i++) {
    			$scope.allPageDates.push([i,i*i]);
    		}
    		
			$scope.pageObj.count = $scope.allPageDates.length - 1;
			$scope.pageObj.pageCount = Math.ceil($scope.pageObj.count /$scope.pageObj.pageSize);
			$scope.resetTurnPageButton();
			$scope.frushPageDatas();
    	});
    }
    
    //重置翻页按钮的状态
    $scope.resetTurnPageButton = function(){
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
   		$scope.pageDates = [];
        //显示在列表中的信息
        var startIndex = ($scope.pageObj.cuurPage-1) * $scope.pageObj.pageSize+1;
        var endIndex   = ($scope.pageObj.cuurPage) * $scope.pageObj.pageSize;
        //超出数据的部分放入空
        for(var i = startIndex; i <= endIndex; i++) {
            $scope.pageDates.push($scope.allPageDates[i]);
        }
        console.log($scope.pageDates);
   	}
   	
    //初始化页面数据
	$scope.initPage();
});