

angular.module('MyApp', ['toaster', 'ngAnimate'])
    .controller('MyCtrl', function($scope, toaster) {
        $scope.buttonClick = function(type){
            //��������
            toaster.pop({
                type: type,             //����
                title: 'Title text',    //����
                body: 'Body text',      //����
                showCloseButton: true,  //�Ƿ���ʾ�رհ�ť
            });
        };
    });