$(function(){
    //简历模板hover效果
    var resumeTplHover = function(){
        $tpls = $('.resume-tpl').find('li');
        $tpls.bind('mouseover',function(){
            $(this).children('.tpl-content').addClass('hide');
            $(this).children('.tpl-choose-lan').removeClass('hide');
        });
        $tpls.bind('mouseout',function(){
            $(this).children('.tpl-content').removeClass('hide');
            $(this).children('.tpl-choose-lan').addClass('hide');
        });
    };

    //点击编辑简历信息弹出弹窗
    var editResumeInfo = function(){
        $('.resume-info-edit').bind('click',function(){
            $('#resume-info-modal').modal('show');
        });
    };

    //操作简历图标hover效果
    var iconHover = function(){
        $icons = $('.resume-info-control a');

        $icons.on('mouseover',function(){
            $(this).children('.resume-info-control-popover').removeClass('hide');
        });
        $icons.on('mouseout',function(){
            $(this).children('.resume-info-control-popover').addClass('hide');
        });
    }
    
    //点击选择模板弹出弹窗
    var chooseResumeTpl = function(){
        $('#choose-tpl-btn').bind('click',function(){
            $('#choose-resume-tpl-modal').modal('show');
        });
    };

    //切换各板块
    var switchPage = function(){
        //创建新简历
        $('#create-resume-btn').bind('click',function(){
            $('.no-resume').addClass('hide');
            $('.has-resume').addClass('hide');
            $('.insert-resume').addClass('hide');

            $('.has-resume').removeClass('hide');
        });

        //导入已有简历
        $('#insert-resume-btn').bind('click',function(){
            $('.no-resume').addClass('hide');
            $('.has-resume').addClass('hide');
            $('.insert-resume').addClass('hide');

            $('.insert-resume').removeClass('hide');
        });
    }

    resumeTplHover();
    editResumeInfo();
    iconHover();
    chooseResumeTpl();
    switchPage();
});
