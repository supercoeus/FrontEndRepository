/**
 *
 * Description   :   index的 controller
 * Project Name  :   FrontEndRepository
 * Author        :   FieLong Sun
 * Date          :   2016-08-07  17:37
 */

'use strict';

angular.module('indexModule', ['validatorInfoDirective'])
    .controller('indexCtrl',function($scope) {
        $scope.name = '张三';
        $scope.age ='23';
        $scope.address = '火星';
    });