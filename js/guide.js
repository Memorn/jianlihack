$(function(){
    //简历模板hover效果
    var resumeTplHover = function(){
        $tpls = $('#resume-tpl').find('li');
        $tpls.bind('mouseover',function(){
            $(this).children('.tpl-content').addClass('hide');
            $(this).children('.tpl-choose-lan').removeClass('hide');
        });
        $tpls.bind('mouseout',function(){
            $(this).children('.tpl-content').removeClass('hide');
            $(this).children('.tpl-choose-lan').addClass('hide');
        });
    }

    resumeTplHover();
});