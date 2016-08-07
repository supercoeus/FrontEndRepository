/**
 * @author       sunfeilong
 * @date         2016/7/13 11:05
 * @version      1.0
 * @Description  数据校验
 *
 */

angular.module('data.validation',[])
    .factory('dataValidation', function() {

        //自定义验证
        var customValid = {
            data : {
                success: false,
                msg:'',
            },
            clearData : function() {
                this.data.success = false;
                this.data.msg = '';
            },
            valueIsNull: function (value) {
                return (value == '' || value == null);
            },
            //邮箱验证
            is_email : function(name, value) {
                this.clearData();
                if(this.valueIsNull(value)) {
                    this.data.success = true;
                    this.data.msg = name + '为空';
                } else {
                    this.data.success = regexEnum.email.test(value);
                    if(this.data.success) {
                        this.data.msg = name + '格式正确';
                    } else {
                        if(value.indexOf('@') == -1) {
                            this.data.msg = name + '不包含 @ 字符';
                        } else{
                            this.data.msg = name + '格式不正确';
                        }
                    }
                }
                return this.data;
            },
            //非空验证
            not_null : function(name, value){
                this.clearData();
                this.data.success = !this.valueIsNull(value);
                if(this.data.success) {
                    this.data.msg = name + '格式正确';
                } else {
                    this.data.msg = name + '不能为空';
                }
                return this.data;
            },
            //最大长度验证
            max_length_n:function(name, value, maxLength) {
                this.clearData();
                if(this.valueIsNull(value)) {
                    this.data.success = true;
                    this.data.msg = name + '为空';
                } else {
                    this.data.success = (value.length <= maxLength);
                    if(this.data.success) {
                        this.data.msg = name + '格式正确';
                    } else {
                        this.data.msg = name + '的长度不能大于' + maxLength;
                    }
                }
                return this.data;
            },
            //最小长度验证
            min_length_n:function(name, value, minLength) {
                this.clearData();
                if(this.valueIsNull(value)) {
                    this.data.success = true;
                    this.data.msg = name + '为空';
                } else {
                    this.data.success = (value.length >= minLength);
                    if(this.data.success) {
                        this.data.msg = name + '格式正确';
                    } else {
                        this.data.msg = name + '的长度不能小于' + minLength;
                    }
                }
                return this.data;
            },
            //手机号码
            is_tel: function(name, value) {
                this.clearData();
                if(this.valueIsNull(value)) {
                    this.data.success = true;
                    this.data.msg = name + '为空';
                } else {
                    this.data.success = regexEnum.tel.test(value);
                    if(this.data.success) {
                        this.data.msg = name + "格式正确";
                    } else {
                        this.data.msg = name + "格式不正确";
                    }
                }
                return this.data;
            },
            //boolean值验证
            is_boolean: function(name, input) {
                if(this.valueIsNull(value)) {
                    this.data.success = true;
                    this.data.msg = name + '为空';
                } else {
                    this.data.success = input.val() == 'true' || input.val() == 'false' ||
                                        input.val() == true || input.val() == false ||
                                        input.val() == 1 || input.val() == 0;
                    if(this.data.success) {
                        this.data.msg = name + '格式是boolean值';
                    } else {
                        this.data.msg = name + '不是boolean值';
                    }
                }
                return this.data;
            },
            //必选
            must_select: function(name, value) {
                this.clearData();
                if(value == null || value == '' || value == undefined) {
                    this.data.success = false;
                    this.data.msg = name + '为必选项';
                } else {
                    this.data.msg = name + '已经选择';
                    this.data.success = true;
                }
                return this.data;
            },
            //数字
            is_number : function(name, value) {
                this.clearData();
                if(this.valueIsNull(value)) {
                    this.data.success = true;
                    this.data.msg = name + '为空';
                } else {
                    this.data.success = regexEnum.intege1.test(value);
                    if(this.data.success) {
                        this.data.msg = name + '格式正确'
                    } else {
                        this.data.msg = name + '只能为数字'
                    }
                }
                return this.data;
            },
            //最小数
            min_number: function(name, value, minNumber) {
                this.clearData();
                if(this.valueIsNull(value)) {
                    this.data.success = true;
                    this.data.msg = name + '为空';
                } else {
                    if(!regexEnum.intege1.test(value)) {
                        this.data.success = false;
                        this.data.msg = name + '必须为数字!';
                    } else {
                        if(Number(value) >= Number(minNumber)) {
                            this.data.success = true;
                            this.data.msg = name + '格式正确';
                        } else {
                            this.data.success = false;
                            this.data.msg = name + '不能小于'+ minNumber;
                        }
                    }
                }
                return this.data;
            },
            //最大数
            max_number : function(name, value, maxNumber) {
                this.clearData();
                if(this.valueIsNull(value)) {
                    this.data.success = true;
                    this.data.msg = name + '为空';
                } else {
                    if(regexEnum.intege1.test(value)) {
                        this.data.success = false;
                        this.data.msg = name + '必须为数字!';
                    } else {
                        if(Number(value) <= Number(maxNumber)) {
                            this.data.success = true;
                            this.data.msg = name + '格式正确';
                        } else {
                            this.data.success = false;
                            this.data.msg = name + '不能大于'+ maxNumber;
                        }
                    }
                }

                return this.data;
            },

        }

        //用于特殊验证的正则表达式
        var regexEnum  = {
            intege:'^-?[1-9]\\d*$',                     //整数
            intege1:/^[1-9]\d*$/,                      //正整数
            intege2:'^-[1-9]\\d*$',                     //负整数
            num:'^([+-]?)\\d*\\.?\\d+$',                //数字
            num1:'^[1-9]\\d*|0$',                       //正数（正整数 + 0）
            num2:'^-[1-9]\\d*|0$',                      //负数（负整数 + 0）
            decmal:'^([+-]?)\\d*\\.\\d+$',              //浮点数
            decmal1:'^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$', //正浮点数
            decmal2:'^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$',//负浮点数
            decmal3:'^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$',         //浮点数
            decmal4:'^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$',             //非负浮点数（正浮点数 + 0）
            decmal5:'^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$',        //非正浮点数（负浮点数 + 0）
            email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,   //邮件
            color:'^[a-fA-F0-9]{6}$',                                       //颜色
            url:'^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$',    //url
            chinese:'^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$',                  //仅中文
            ascii:'^[\\x00-\\xFF]+$',                                       //仅ACSII字符
            zipcode:'^\\d{6}$',                                             //邮编
            mobile:'^13[0-9]{9}|15[012356789][0-9]{8}|18[0256789][0-9]{8}|147[0-9]{8}$',            //手机
            ip4:'^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$',  //ip地址
            notempty:'^\\S+$',                                              //非空
            picture:'(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$',   //图片
            rar:'(.*)\\.(rar|zip|7zip|tgz)$',                               //压缩文件
            date:'^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$',                 //日期
            qq:'^[1-9]*[1-9][0-9]*$',                                       //QQ号码
            tel:/^1\d{10}$/,
            username:'^\\w+$',                                              //用来用户注册。匹配由数字、26个英文字母或者下划线组成的字符串
            letter:'^[A-Za-z]+$',                                           //字母
            letter_u:'^[A-Z]+$',                                            //大写字母
            letter_l:'^[a-z]+$',                                            //小写字母
            idcard:'^[1-9]([0-9]{14}|[0-9]{17})$'                           //身份证
        }

        return customValid;
    }
);