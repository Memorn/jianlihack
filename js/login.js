$(function(){
    //根据url判断当前表单类型
    var chooseFormByQuery = function(){
        var $regBtn = $('#tab-btn-reg');
        var $loginBtn = $('#tab-btn-login');
        
        function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        }

        var type = getUrlParam('type');

        if(type == 'login'){
            $loginBtn.click();
        }else if(type == 'reg'){
            $regBtn.click();
        }
    }

    //点击注册登录切换页面、切换登录方式、切换注册方式
    var changeTab = function(){
        //注册or登录 Btn
        var $regBtn = $('#tab-btn-reg');
        var $loginBtn = $('#tab-btn-login');

        //注册or登录Forms
        var $regForm = $('#registered-form');
        var $loginForm = $('#login-form');

        //注册Btns
        var $useEmailBtn = $('#btn-use-email');
        var $useTelBtn = $('#btn-use-tel');

        //注册Forms
        var $emailForm = $('#email-registered');
        var $telForm = $('#tel-number-registered');

        //登录Btns
        var $useCodeBtn = $('#btn-use-code');
        var $useAccountBtn = $('#btn-use-account');

        //登录Forms
        var $passwordForm = $('#login-by-password');
        var $codeForm = $('#login-by-verification-code');

        //切换注册、登录
        $regBtn.bind('click',function(){
            $(this).addClass('active');
            $loginBtn.removeClass('active');
            
            $loginForm.addClass('hide');
            $regForm.removeClass('hide');

            $telForm.removeClass('hide');
            $emailForm.addClass('hide');
        });

        $loginBtn.bind('click',function(){
            $(this).addClass('active');
            $regBtn.removeClass('active');

            $regForm.addClass('hide');
            $loginForm.removeClass('hide');

            $passwordForm.removeClass('hide');
            $codeForm.addClass('hide');
        });

        //切换注册方式
        $useEmailBtn.bind('click',function(){
            $emailForm.removeClass('hide');
            $telForm.addClass('hide');
        });

        $useTelBtn.bind('click',function(){
            $telForm.removeClass('hide');
            $emailForm.addClass('hide');
        });

        //切换登录方式
        $useCodeBtn.bind('click',function(){
            $codeForm.removeClass('hide');
            $passwordForm.addClass('hide');
        });

        $useAccountBtn.bind('click',function(){
            $passwordForm.removeClass('hide');
            $codeForm.addClass('hide');
        });
    }

    //点击过去验证码后读秒
    var getCode = function(){

        var handle4GetCode = function(e){
            var $this = $(e.target);
            $this.html('60s');
            $this.unbind('click');
            var count = 60;
            var timeInterval = setInterval(function(){
                if(count == 0){
                    clearInterval(timeInterval);
                    $this.html('获取验证码');
                    $this.on('click',handle4GetCode);
                    return;
                }
                $this.html(count-- + 's');
            },1000);
        };

        $('.get-code-btn').on('click',handle4GetCode);


    }


    //执行方法
    changeTab();
    chooseFormByQuery();
    getCode();
});