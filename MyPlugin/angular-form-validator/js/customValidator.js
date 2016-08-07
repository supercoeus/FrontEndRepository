/**
 * @author       sunfeilong
 * @date         2016/7/12 15:51
 * @version      1.0
 * @Description  校验-指令
 *
 */

angular.module('validatorInfoDirective', ['data.validation'])
    .directive('validatorInfo', function(dataValidation){
        return {
            restrict:'A',

            //把自定义标签从页面移除,只显示template里面的内容
            replace: false,

            scope:{
                //字段的名字
                name:'@',
                //字段的值
                field:'=',
                //要验证的方法,中间用逗号分隔
                functions:'@',
                //验证提交按钮的id
                submitButtonId: '@',
                //额外的样式文件
                className : '@'
            },
            //
            //template:'<div class="validatorInfo"><div class="tag"><div class="arrow"> <em>◆</em><span>◆</span> </div><nobr>{{tips}}<nobr></div></div>',
            template:'<div ng-show="isShowTips" class="validatorInfo {{className}}">' +
                        '<div class="tag">' +
                            '<div class="arrow"> ' +
                                '<em>◆</em>' +
                                '<span>◆</span> ' +
                            '</div>' +
                            '<nobr>{{tips}}<nobr>' +
                        '</div>' +
                    '</div>',

            controller: ["$scope", function ($scope) {
                //提交按钮覆盖样式
                $scope.submitCover = 'submitCover';
                //用户记录该验证是否已经在提交按钮上面添加覆盖样式
                $scope.hasAddCover = false;

                //用户控制是否显示提示框
                $scope.isShowTips = false;

                //提示信息
                $scope.tips = "Hello World!";

                //监听字段的变化
                $scope.$watch('field', function() {

                    //页面初始化，如果字段为 undefined 则把字段的初始值设置为空
                    if($scope.field == undefined) {
                        $scope.field = '';
                    }

                    //验证字段
                    var result = $scope.validationField($scope.name, $scope.field);

                    if (result.success) {
                        $scope.resetSubmit();
                        $scope.hideTips();
                    } else {
                        $scope.changeSubmitColorAndCannotClick();
                        $scope.tips = result.msg;
                        $scope.showTips();
                    }
                });

                //验证字段是否合法
                $scope.validationField = function() {
                    var result = {};
                    //要验证的函数
                    var functions = $scope.functions.split(',');

                    for(var i = 0 ; i < functions.length; i++) {
                        //分离方法和参数
                        var numberReg = /[0-9]{1}$/;

                        //方法名
                        var func = '';
                        //参数
                        var param = '';

                        if(numberReg.test(functions[i])) {
                            var funcAndParamArr = functions[i].split('_');
                            for(var j = 0; j < funcAndParamArr.length - 1; j++) {
                                func = func + funcAndParamArr[j]+'_';
                            }
                            func = func.substr(0, func.length -1);
                            param = funcAndParamArr[funcAndParamArr.length - 1];
                        } else {
                            func = functions[i];
                            param = '';
                        }

                        switch (func) {
                            case 'not_null':
                                result = dataValidation.not_null($scope.name, $scope.field);
                                break;
                            case 'min_length':
                                result = dataValidation.min_length_n($scope.name, $scope.field, param)
                                break;
                            case 'max_length':
                                result = dataValidation.max_length_n($scope.name, $scope.field, param)
                                break;
                            case 'is_tel':
                                result = dataValidation.is_tel($scope.name, $scope.field)
                                break;
                            case 'is_email':
                                result = dataValidation.is_email($scope.name, $scope.field)
                                break;
                            case 'must_select':
                                result = dataValidation.must_select($scope.name, $scope.field)
                                break;
                            case 'is_number':
                                result = dataValidation.is_number($scope.name, $scope.field)
                                break;
                            case 'min_number':
                                result = dataValidation.min_number($scope.name, $scope.field, param)
                                break;
                            case 'max_number':
                                result = dataValidation.max_number($scope.name, $scope.field, param);
                                break;
                            default :
                                console.log('--------非法的验证方法:' +functions[i] + '-----------');
                                break;
                        }
                        //验证不通过返回验证
                        if(!result.success) {
                            return result;
                        }
                    }
                    return result;
                }

                //显示提示框
                $scope.showTips = function() {
                    $scope.isShowTips = true;
                }

                //隐藏提示框
                $scope.hideTips = function() {
                    $scope.isShowTips = false;
                }

                //提交按钮改变颜色，且不可点击
                $scope.changeSubmitColorAndCannotClick = function() {
                    if(!$scope.hasAddCover) {
                        var submitButton = document.getElementById($scope.submitButtonId);
                        $scope.addClass(submitButton, $scope.submitCover);
                        $scope.cannotClick(submitButton);
                        $scope.hasAddCover = true;
                    }
                }

                //还原点击按钮的状态
                $scope.resetSubmit = function() {
                    if($scope.hasAddCover) {
                        var submitButton = document.getElementById($scope.submitButtonId);
                        if($scope.onlyHasOneClass(submitButton, $scope.submitCover)) {
                            $scope.canClick(submitButton);
                        }
                        $scope.removeClass(submitButton, $scope.submitCover);
                        $scope.hasAddCover = false;
                    }
                }

                $scope.hasClass = function(obj, className) {
                    var classList = obj.className.split(' ');
                    for(var i = 0;i < classList.length; i++) {
                        if(classList[i] == className) {
                            return true;
                        }
                    }
                    return false;
                }

                $scope.addClass = function(obj, className) {
                    obj.className = obj.className + " " + className;
                }


                $scope.clearCoverClass = function(obj, className) {
                    if ($scope.hasClass(obj, className)) {
                        var str = "";
                        var classList = obj.className.split(' ');
                        for(var i = 0; i < classList.length; i++) {
                            if(classList[i] == className) {
                                str = str + " ";
                            } else {
                                str = str + " " + classList[i];
                            }
                        }
                        obj.className = str;
                    }
                }

                $scope.removeClass = function(obj, className) {
                    if ($scope.hasClass(obj, className)) {
                        var str = "";
                        var flag = false;
                        var classList = obj.className.split(' ');
                        for(var i = 0; i < classList.length; i++) {
                            if(classList[i] == className && !flag) {
                                str = str + " ";
                                flag = true;
                            } else {
                                str = str + " " + classList[i];
                            }
                        }
                        obj.className = str;
                    }
                }

                $scope.onlyHasOneClass = function(obj, className) {
                    var classCount = 0;
                    var classList = obj.className.split(' ');
                    for(var i = 0; i < classList.length; i++) {
                        if(classList[i] == className) {
                            classCount ++;
                        }
                    }
                    return classCount == 1 ? true : false;
                }

                $scope.cannotClick = function(obj) {
                    obj.disabled = 'disabled';
                }

                $scope.canClick = function(obj) {
                    obj.disabled = '';
                }
            }]
        };
    }
);

