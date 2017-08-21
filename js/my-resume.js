$(function(){
    //简历模板hover效果
    var resumeTplHover = function(){

        // $tpls = $('.resume-tpl').find('li:not(.li-create-resume)');
        $tpls = $('.resume-tpl').find('li');
        $tpls.bind('mouseover',function(){
            $(this).children('.tpl-content').addClass('hide');
            $(this).children('.tpl-choose-lan').removeClass('hide');
        });
        $tpls.bind('mouseout',function(){
            $(this).children('.tpl-content').removeClass('hide');
            $(this).children('.tpl-choose-lan').addClass('hide');
        });

        $tpls
    };

    //有简历时点击导入切换卡片内容
    var createInsertResume = function(){
        var $liCreateResume = $('.li-create-resume');
        var $createResume = $liCreateResume.children('.create-resume');
        var $createResumeType = $liCreateResume.children('.create-resume-type');
        var $insertResumeTpl = $liCreateResume.children('.insert-resume-tpl');

        $('#create-insert-resume-btn').on('click',function(){
            $('.resume-tpl').find('li:nth-child(1)').unbind('mouseover');
            $('.resume-tpl').find('li:nth-child(1)').unbind('mouseout');
            $createResume.addClass('hide'); 
            $createResumeType.addClass('hide'); 
            $insertResumeTpl.removeClass('hide');

            // $insertResumeTpl.on('mouseout',function(){
            //     $createResume.removeClass('hide'); 
            //     $createResumeType.addClass('hide'); 
            //     $insertResumeTpl.addClass('hide');
            //     // resumeTplHover();
            // });
        });
    };

    //无简历页面点击“导入已有简历”弹窗
    var insertResume = function(){
        $('#insert-resume-btn').bind('click',function(){
            $('#insert-resume-modal').modal('show');
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

            $('.has-resume').removeClass('hide');
        });
    }

    resumeTplHover();
    insertResume();
    createInsertResume();
    editResumeInfo();
    iconHover();
    chooseResumeTpl();
    switchPage();
});
