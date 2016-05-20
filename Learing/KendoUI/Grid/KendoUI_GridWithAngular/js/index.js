var myAppModule = angular.module("myApp", ["kendo.directives"]);

myAppModule.controller("myController", function($scope, $http) {

    $scope.mainGridOptions = {
        dataSource: {
            type: "odata",
            transport: {
                read: function(options) {
                    $http({
                        method: "GET",
                        url: "./data/data.json"
                    }).success(function (data) {
                        options.success(data.data);
                    }).error(function() {
                        console.log("请求出错!");
                    });
                }
            },
            schema: {
                data: function (response) {
                    var list = [];
                    if (response != null) {
                        list = response.content;
                    }
                    return list;
                },
                total: function (response) {
                    if (response != null) {
                        return response.totalElements;
                    } else {
                        return 0;
                    }
                }
            },
            pageSize: 10,
            serverPaging: true,
            serverSorting: true
        },
        sortable: true,
        pageable: true,
        dataBound: function() {
            this.expandRow(this.tbody.find("tr.k-master-row").first());
        },
        columns: [{
            field: "number",
            title: "number",
            width: "120px"
        },{
            field: "status",
            title: "status",
            width: "120px"
        },{
            field: "executeUnit",
            title: 'executeUnit',
            width: "120px"
        },{
            field: "createTime",
            title: 'createTime',
            width: "120px"
        },{
            field: "property",
            title: 'property',
        }]
    };
})