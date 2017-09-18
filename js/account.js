$(function(){
    //左侧导航点击事件
    var leftNav = function(){
        var $listItems = $('.left-panel').find('a');
        $listItems.on('click',function(){
            $listItems.parent().removeClass('active');
            $(this).parent().addClass('active');

            $('.right-panel').children().addClass('hide');
            if($(this).hasClass('account')){$('.right-panel').children('.account-info').removeClass('hide')}
            if($(this).hasClass('order')){$('.right-panel').children('.my-order').removeClass('hide')}
            if($(this).hasClass('promotion')){$('.right-panel').children('.promotions').removeClass('hide')}
        });
    };

    //点击扫码分享显示二维码
    var qrCode = function(){
        $('.scan-code').on('click',function(){
            $('.qr-code').removeClass('hide');
        });
    };

    leftNav();
    qrCode();
});