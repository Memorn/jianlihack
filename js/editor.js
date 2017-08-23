$(function(){


    //左侧panel打开收起面板
    var closeLeftPanel = function(){
        $('.resume-advice-top-btn').on('click',function(){
            var $resumeAdvice = $('.resume-advice');

            if($resumeAdvice.hasClass('close-panel')){
                $resumeAdvice.removeClass('close-panel');
            }else{
                $resumeAdvice.addClass('close-panel');
            }
        });
        $('.resume-match-top-btn').on('click',function(){
            var $resumeMatch = $('.resume-match');
            
            if($resumeMatch.hasClass('close-panel')){
                $resumeMatch.removeClass('close-panel');
            }else{
                $resumeMatch.addClass('close-panel');
            }
        });
    }

    //编辑器控制条selector
    var editorControl = function(){
        //颜色选择器
        var colorSelector = function(){
            $('.control-bar-color').on('click',function(){
                var $colorPicker = $('.color-picker');
                if($colorPicker.hasClass('hide')){
                    $colorPicker.removeClass('hide');
                }else{
                    $colorPicker.addClass('hide');
                }
            })
        }
        
        //字体选择器
        var fontFamilySelector = function(){
            $('.font-family-selector').on('click',function(){
                var $fontFamilyList = $('.font-family-selector').find('.selector-list');
                if($fontFamilyList.hasClass('hide')){
                    $fontFamilyList.removeClass('hide');
                }else{
                    $fontFamilyList.addClass('hide');
                }
            });
        }

        //字体大小选择器
        var fontSizeSelector = function(){
            $('.font-size-selector').on('click',function(){
                var $fontSizeList = $('.font-size-selector').find('.selector-list');
                if($fontSizeList.hasClass('hide')){
                    $fontSizeList.removeClass('hide');
                }else{
                    $fontSizeList.addClass('hide');
                }
            });
        }

        //行间距大小选择器
        var spacingSelector = function(){
            $('.spacing-selector').on('click',function(){
                var $spacingList = $('.spacing-selector').find('.selector-list');
                if($spacingList.hasClass('hide')){
                    $spacingList.removeClass('hide');
                }else{
                    $spacingList.addClass('hide');
                }
            });
        }

        //添加模块
        var addModalSelector = function(){
            $('.add-modal-selector').on('click',function(){
                var $addModalList = $('.add-modal-selector').find('.selector-list');
                if($addModalList.hasClass('hide')){
                    $addModalList.removeClass('hide');
                }else{
                    $addModalList.addClass('hide');
                }
            });
        }

        colorSelector();
        fontFamilySelector();
        fontSizeSelector();
        spacingSelector();
        addModalSelector();
    };

    //简历提升建议弹窗
    var showRobotModal = function(){
        $('.resume-match-more').children('a').on('click',function(){
            $('#resume-robot-modal').modal('show');
        });
        $('.resume-advice-more').children('a').on('click',function(){
            $('#resume-robot-modal').modal('show');
        });

        $('#experience-btn').on('click',function(){
            $('#resume-robot-modal').modal('hide');
            $('#resume-confirm-modal').modal('show');
        });
    };

    showRobotModal();
    closeLeftPanel();
    editorControl();
});