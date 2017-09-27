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

        //左侧fold or unfold
        var leftFoldSwitch = function(){
            var windowWidth = $(document.body).outerWidth(true) + 15;
            //展开
            $('.fold-container').children('a').on('click',unfoldHandle);
            $('.nav-btn').on('click',unfoldHandle);
            function unfoldHandle(e){
                $('.fold-container').addClass('hide');
                $('.unfold-container').removeClass('hide');
                if($(e.target).hasClass('inteligent-check-bgc') || $(e.target).parents().hasClass('inteligent-check-bgc')){
                    $('.inteligent-check').siblings().addClass('hide');
                    $('.inteligent-check').removeClass('hide');
                }
                if($(e.target).hasClass('fill-in-tips-bgc') || $(e.target).parents().hasClass('fill-in-tips-bgc')){
                    $('.fill-in-tips').siblings().addClass('hide');
                    $('.fill-in-tips').removeClass('hide');
                }
                if($(e.target).hasClass('view-cases-bgc') || $(e.target).parents().hasClass('view-cases-bgc')){
                    $('.view-cases').siblings().addClass('hide');
                    $('.view-cases').removeClass('hide');
                }
                if($(e.target).hasClass('tutor-bgc') || $(e.target).parents().hasClass('tutor-bgc')){
                    $('.tutor').siblings().addClass('hide');
                    $('.tutor').removeClass('hide');
                }
                if(windowWidth < 1100){
                    $('.right-panel').css({
                        'margin-left': '138px'
                    })
                }
            }

            //收起
            $('.fold-btn').on('click',fold);
            function fold(){
                $('.unfold-container').addClass('hide');
                $('.unfold-container').children().addClass('hide');
                $('.fold-container').removeClass('hide');
                if(windowWidth < 1100){
                    $('.right-panel').css({
                        'margin-left': '10px'
                    })
                }
            }

            //selector产开收起
            $('.selector-content').on('click',function(e){
                $('.selector').removeClass('open');
                $this = $(e.target).hasClass('selector-content')? $(e.target):$(e.target).parents('.selector-content');
                console.log($this);
                $this.parents('.selector').addClass('open');
                $this.siblings('.selector-options').find('a').on('click',function(event){
                    var curText = $(event.target).text();
                    $this.children('.text').text(curText);
                    $this.parents('.selector').removeClass('open');
                })

            })

            //panel展开收起
            $('.title-btn').on('click',function(e){
                $this = $(e.target).hasClass('title-btn')? $(e.target): $(e.target).parents('.title-btn');
                $panel = $this.parent().parent();
                if($panel.hasClass('close-panel')){
                    $panel.removeClass('close-panel')
                }else{
                    $panel.addClass('close-panel')
                }
            });

        };
    
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
                });
    
                $('body').on('click',function(e){
                    var $colorPicker = $('.color-picker');
                    if(!$(e.target).parents('.control-bar-color').length){
                        $colorPicker.addClass('hide');
                    }
                });
            }
            
            //字体选择器
            var fontFamilySelector = function(){
                $('.font-family-selector .selector-icon').on('click',function(){
                    var $fontFamilyList = $('.font-family-selector').find('.selector-list');
                    if($fontFamilyList.hasClass('hide')){
                        $fontFamilyList.removeClass('hide');
                    }else{
                        $fontFamilyList.addClass('hide');
                    }
                });
    
                $('body').on('click',function(e){
                    var $colorPicker = $('.font-family-selector').find('.selector-list');
                    if(!$(e.target).parents('.font-family-selector').length){
                        $colorPicker.addClass('hide');
                    }
                });
            }
    
            //字体大小选择器
            var fontSizeSelector = function(){
                $('.font-size-selector .selector-icon').on('click',function(){
                    var $fontSizeList = $('.font-size-selector').find('.selector-list');
                    if($fontSizeList.hasClass('hide')){
                        $fontSizeList.removeClass('hide');
                    }else{
                        $fontSizeList.addClass('hide');
                    }
                });
    
                $('body').on('click',function(e){
                    var $colorPicker = $('.font-size-selector').find('.selector-list');
                    if(!$(e.target).parents('.font-size-selector').length){
                        $colorPicker.addClass('hide');
                    }
                });
            }
    
            //行间距大小选择器
            var spacingSelector = function(){
                $('.spacing-selector .selector-icon').on('click',function(){
                    var $spacingList = $('.spacing-selector').find('.selector-list');
                    if($spacingList.hasClass('hide')){
                        $spacingList.removeClass('hide');
                    }else{
                        $spacingList.addClass('hide');
                    }
                });
    
                $('body').on('click',function(e){
                    var $colorPicker = $('.spacing-selector').find('.selector-list');
                    if(!$(e.target).parents('.spacing-selector').length){
                        $colorPicker.addClass('hide');
                    }
                });
            }
    
            //添加模块
            var addModalSelector = function(){
                $('.typesetting-selector').on('click',function(){
                    var $addModalList = $('.typesetting-selector').find('.selector-list');
                    if($addModalList.hasClass('hide')){
                        $addModalList.removeClass('hide');
                    }else{
                        $addModalList.addClass('hide');
                    }
                });
    
                $('body').on('click',function(e){
                    var $colorPicker = $('.typesetting-selector').find('.selector-list');
                    if(!$(e.target).parents('.typesetting-selector').length){
                        $colorPicker.addClass('hide');
                    }
                });
    
    
                //弹出添加头像弹窗
                $('#add-avatar').on('click',function(){
                    $('#add-avatar-modal').modal('show');
                    
                    var addAvatar = function(){
                        $('#add-avatar-modal .modal-content-tabs div').on('click', function(){
                            if($(this).hasClass('modal-content-tab-1')){
                                $('#add-avatar-modal .modal-content-main').removeClass('cut-pic');
                                $('#add-avatar-modal .modal-content-main').addClass('choose-pic');
                            }else{
                                $('#add-avatar-modal .modal-content-main').removeClass('choose-pic');
                                $('#add-avatar-modal .modal-content-main').addClass('cut-pic');
                            }
                        })    
    
                        $('#add-avatar-modal').find('.title-icon').on('click', function(){
                            if($(this).parents('.faq-item').hasClass('active')){
                                $(this).parents('.faq-item').removeClass('active');
                            }else{
                                $(this).parents('.faq-item').addClass('active');
                            }
                        });
    
                        $('#add-avatar-modal .btn-pre').on('click',function(){
                            $('#add-avatar-modal .modal-content-main').removeClass('cut-pic');
                            $('#add-avatar-modal .modal-content-main').addClass('choose-pic');
                        });
    
                    };
    
                    addAvatar();
                });
                
                
                //弹出添加校徽弹窗
                $('#add-school-logo').on('click',function(){
                    $('#add-school-logo-modal').modal('show');
                });
            }
    
            //排版设置
            var typesettingSelector = function(){
                $('.add-modal-selector').on('click',function(){
                    var $addModalList = $('.add-modal-selector').find('.selector-list');
                    if($addModalList.hasClass('hide')){
                        $addModalList.removeClass('hide');
                    }else{
                        $addModalList.addClass('hide');
                    }
                });
    
                $('body').on('click',function(e){
                    var $colorPicker = $('.add-modal-selector').find('.selector-list');
                    if(!$(e.target).parents('.add-modal-selector').length){
                        $colorPicker.addClass('hide');
                    }
                });
            }
    
            colorSelector();
            fontFamilySelector();
            fontSizeSelector();
            spacingSelector();
            addModalSelector();
            typesettingSelector();
        };
    
        //左侧固定控制条吸顶
        var scrollFixedPanel = function(){
            function scrollCallBack(){
                var top = $(window).scrollTop();
                var $controlBar = $('.right-panel-control-bar');
                var $controlBarContainer = $('.right-panel-control-bar-container');
                var $controlBarContainerDownload = $('.right-panel-control-bar-container').children('.control-download');
                var $editPanel = $('.right-panel-resume-editor');
                var $leftPanel = $('.left-panel-actual');
                var $rightPanel = $('.right-panel');
                
                var screenWidth = $(document.body).outerWidth(true) + 15;
               
                var leftFoldPanelWidth = parseInt($('.fold-container').css('width'));
                var rightPanelDisplacement = parseInt($('.unfold-container').css('width')) - parseInt($('.fold-container').css('width'));
              
                if( top >= 145){
                    $controlBar.css({
                        'position':'fixed',
                        'left': '0px',
                        'top': '0px',
                        'z-index':'999'
                    });

                    $controlBarContainer.css({
                        'max-width': '1100px',
                        'float': 'right'
                    });

                    $controlBarContainerDownload.css('display','inline-block');

                    $editPanel.css({
                        'margin-top': '78px'
                    });

                }else{
                    if(screenWidth >= 1738){
                        $controlBar.css({
                            'position':'relative',
                            'left': '0px',
                            'top': '0px',
                            'z-index':'9'
                        });
                        $controlBarContainer.css({
                            'max-width': '9999px',
                            'float': 'none'
                        });
                        $controlBarContainerDownload.css('display','none');
                        
                        $editPanel.css({
                            'margin-top': '10px'
                        });
                    }else{
                        $controlBar.css({
                            'position':'relative',
                            'left': '0px',
                            'top': '0px',
                            'z-index':'9'
                        });
    
                        $controlBarContainer.css({
                            'max-width': '9999px',
                            'float': 'none'
                        });
    
                        $controlBarContainerDownload.css('display','none');
                        
                        $editPanel.css({
                            'margin-top': '10px'
                        });
                        
                    }
                   
                }
            }
            $(window).scroll(scrollCallBack);
        };

        //根据窗口变化指定左侧panel宽度
        var leftPanelWidth = function(){
            
            $(window).resize(function(){
                var $leftPanel = $('.left-panel-actual');
                var screenWidth = $(document.body).outerWidth(true) + 15;

                if(screenWidth < 1300 && screenWidth > 993){
                    // console.log(screenWidth);
                    var leftPanelWidth = (screenWidth - 870) + 'px';
                    console.log(leftPanelWidth)
                    $leftPanel.css('width',leftPanelWidth);
                }

            });
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
    
        //添加简历模块弹窗
        var showPlateModal= function(){
            $('.bar-add-btn').on('click',function(){
                var $this = $(this);
                $('#add-resume-plate-modal').find('.edit-panel').children().addClass('hide');
                if($this.parents('.others').length){
                    $('#add-resume-plate-modal').find('.other-info').removeClass('hide');
                }else{
                    $('#add-resume-plate-modal').find('.edit-panel').children(':not(".other-info")').removeClass('hide')
                }
                $('#add-resume-plate-modal').modal('show');
            })
        };
    
        //编辑器textarea实现自适应增高
        var textareaSelfHeight = function(){
            var $textarea = $('.expandingArea').find('textarea');
            $textarea.each(function(){
                $(this).prev().children('div').html($(this).val());
            });
            $textarea.on('keydown',function(){
                console.log($(this).val);
                $(this).prev().children('div').html($(this).val());
            });
        };
    
        //点击编辑器中文段出现可编辑框
        var eidtPlateItem = function(){
            var $plateItems = $('.resume-editor-plate-item.without-form');
            
            $plateItems.on('click',function(){
                $('.resume-editor-plate-item.editable').addClass('hide');
                $('.resume-editor-plate-item.without-form').removeClass('hide');
                $(this).prev('.editable').removeClass('hide')
                $(this).addClass('hide');
            });
    
            $('body').on('click',function(e){
                if(!$(e.target).parents('.resume-editor-plate-item').length){
                    $('.resume-editor-plate-item.editable').addClass('hide');
                    $('.resume-editor-plate-item.without-form').removeClass('hide');
                }
            });
        };
    
        //初始化日期选择器
        var createTimePicker = function(){
            $('.time-picker').datetimepicker({
                language:"zh-CN",
                format: 'yyyy/mm',
                minView: 3
            });
        };
    
        //点击“结束时间”出现“至今选择框”
        var endTimeFocus = function(){
            $endTimeInputs = $('.end-time');
            $endTimeInputs.on('focus',function(){
                var $thisEndTimeInput = $(this);
                var htmlStr = '<span class="to-date-dot"><span class="to-date-dot-inline"></span></span><span class="to-date-text">至今</span>'
                var spanToDate = document.createElement('span');
                var $spanToDate = $(spanToDate);
                $spanToDate.addClass('to-date');
                $spanToDate.html(htmlStr);
    
                var top = $(this).offset().top;
                var left = $(this).offset().left;
    
                $spanToDate.css('left',left+85);
                $spanToDate.css('top',top-5);
    
                $('body').append($spanToDate);
    
                $('.to-date').on('click',function(){
                    var $inlineDot = $(this).find('.to-date-dot-inline');
                    if($inlineDot.hasClass('active')){
                        $inlineDot.removeClass('active');
                    }else{
                        $inlineDot.addClass('active');
                        $thisEndTimeInput.val('至今');
                    }
        
                });
    
                $('body').on('click',function(e){
                    if(!$(e.target).parents('.to-date').length && !$(e.target).parents('.end-time').length && !$(e.target).hasClass('end-time')){
                        $('.to-date').remove();
                    }
                });
            });
    
    
        };
    
        closeLeftPanel();
        leftFoldSwitch();
        editorControl();
        scrollFixedPanel();
        leftPanelWidth();
        showRobotModal();
        showPlateModal();
        textareaSelfHeight();
        eidtPlateItem();
        createTimePicker();
        endTimeFocus();
    });