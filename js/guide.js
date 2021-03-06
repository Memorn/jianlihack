$(function(){
    //点击左侧导航切换编辑框
    var switchEditPanel = function(){
        var $leftPanelItems = $('.left-panel').find('.left-panel-item').children('a'),
            $editPanelItems = $('.edit-panel').children('div');

        $leftPanelItems.each(function(index,el){
            var $this = $(el),
                curItemIndex = index;

            $this.on('click',function(){
                //左边栏active
                $leftPanelItems.each(function(index,el){
                    $(el).parent().removeClass('active')
                });
                $this.parent().addClass('active');
                 //editPanel切换
                $editPanelItems.each(function(index,el){
                    $(el).addClass('hide');
                });
                $($editPanelItems[curItemIndex]).removeClass('hide');
            });
        });
    };

    //点击“上一步”、“下一步”切换编辑框
    var preAndNext = function(){
        var $preBtn = $('.info-footer-pre').children('input'),
            $nextBtn = $('.info-footer-next').children('input'),
            $leftPanelItems = $('.left-panel').find('.left-panel-item'),
            $editPanelItems = $('.edit-panel').children('div');

        $preBtn.each(function(index,el){
            var $this = $(el),
            curItemIndex = index;

            $this.on('click',function(){
                //左边栏active
                $leftPanelItems.each(function(index,el){
                    $(el).removeClass('active')
                });

                $($leftPanelItems[curItemIndex]).addClass('active');
    
                //editPanel切换
                $editPanelItems.each(function(index,el){
                    $(el).addClass('hide');
                });
                $this.parent().parent().parent().prev().removeClass('hide');
            });
        });

        $nextBtn.each(function(index,el){
            var $this = $(el),
            curItemIndex = index;

            $this.on('click',function(){
                //左边栏active
                $leftPanelItems.each(function(index,el){
                    $(el).removeClass('active')
                });

                $($leftPanelItems[curItemIndex+1]).addClass('active');
    
                //editPanel切换
                $editPanelItems.each(function(index,el){
                    $(el).addClass('hide');
                });
                $this.parent().parent().parent().parent().next().removeClass('hide');
            });
        });
    };

    //贴士条目打开及收起
    var tipsOpen = function(){
        var $tips = $('.tips-item-title');
        $tips.each(function(index,el){
            var $curTips = $(el);
            
            $curTips.on('click',function(){
                //收起所有tips
                $tips.parent().removeClass('active');
                //打开当前tips
                $(this).parent().addClass('active');
            });
        });
    };

    //展开条目方法
    var openItem = function(){
        var $tags = $('.info-content-item-tag');
        $tags.on('click',function(e){
            var $items = $(this).parent().parent().children('.info-content-item');
            $items.children('.info-content-item-form').addClass('hide');
            $items.children('.info-content-item-tag').removeClass('hide');

            $(this).next().removeClass('hide');
            $(this).addClass('hide')
        });
    };

    //初始化日期选择器
    var createTimePicker = function(){
        $('.time-picker').datetimepicker({
            language:"zh-CN",
            format: 'yyyy-mm-dd',
            minView: 2
        });
    };

    //编辑板块标题
    var editPanelTitle = function(){
        var editBtns = $('.info-title-edit-btn');
        var titleInputs = $('.info-title').children('input');

        editBtns.on('click',function(){
            var $inputTitle = $(this).prev();
            $inputTitle.removeClass('disabled');
            $inputTitle.attr('disabled',false);
            $inputTitle.focus();
            $(this).addClass('hide');
        });

        titleInputs.on('blur',function(){
            $(this).addClass('disabled');
            $(this).attr('disabled',true);
            $(this).next().removeClass('hide')

        });
    };

    //保存弹窗
    var showSaveModal = function(){
        var $saveBtns = $('.info-footer-save').children('input');
        $saveBtns.on('click',function(){
            if(!$('#save-suc-modal').hasClass('hide')){
                return;
            }
            $('#save-suc-modal').removeClass('hide');
            setTimeout(function(){
                $('#save-suc-modal').addClass('hide');
            },1000);
        });
    };

    //未保存时离开页面弹窗
    var showConfirmModal = function(){
        // window.onunload = function(event){
        //     console.log(1);
        //     if ( event && event.preventDefault ) {
        //         event.preventDefault(); 
        //     }else{
        //         window.event.returnValue = false; 
        //     }
        // }
        // window.onbeforeunload = function(event){
        //     console.log(1);
        //     if ( event && event.preventDefault ) {
        //         event.preventDefault(); 
        //     }else{
        //         window.event.returnValue = false; 
        //     }
        // }
    }

    /***********移动端相关方法**********/

    //控制左边导航栏
    var mobileNavCtrl = function(){
        var $navBtn = $('.mobile-nav-btn'),
        $mobileNav = $('#mobile-nav');

        $navBtn.on('click',function(){
            console.log(1);
            $mobileNav.removeClass('hide');
            document.documentElement.style.overflow='hidden';
            $('.mobile-nav-mask').on('click',function(event){
                $mobileNav.addClass('hide');
                document.documentElement.style.overflow='auto';
            });
        });
    }

    var mobilePreAndNext = function(){
         var $preBtn = $('.mobile-pre-btn'),
             $nextBtn = $('.mobile-next-btn'),
             $editPanelItems = $('.edit-panel').children('div');

        $preBtn.each(function(index,el){
            var $this = $(el),
            curItemIndex = index;

            $this.on('click',function(){    
                //editPanel切换
                $editPanelItems.each(function(index,el){
                    $(el).addClass('hide');
                });
                $this.parent().parent().parent().parent().prev().removeClass('hide');
            });
        });

        $nextBtn.each(function(index,el){
            var $this = $(el),
            curItemIndex = index;

            $this.on('click',function(){
                //editPanel切换
                $editPanelItems.each(function(index,el){
                    $(el).addClass('hide');
                });
                $this.parent().parent().parent().parent().next().removeClass('hide');
            });
        });
    };

    var mobileTabChange = function(){
        var $editContainerBtn = $('.edit-container-btn'), 
            $commonVerbBtn = $('.common-verb-btn'), 
            $viewCaseBtn = $('.view-case-btn'),
            $tipsBtn = $('.tips-btn'),
            
            $editContainer = $('.mobile-edit-container'),
            $commonVerb = $('.mobile-tips'),
            $viewCase = $('.common-verb'),
            $tips = $('.view-case');
        
        $editContainerBtn.on('click',function(el){
            $(el.target).parents('.title-nav').children('.nav-item').removeClass('active');
            $(el.target).parent('.nav-item').addClass('active');

            $(el.target).parents('.title-mobile').siblings('.mobile-edit-container').removeClass('hide');
            $(el.target).parents('.title-mobile').siblings('.mobile-tips').addClass('hide');
            $(el.target).parents('.title-mobile').siblings('.common-verb').addClass('hide');
            $(el.target).parents('.title-mobile').siblings('.view-case').addClass('hide');
        }); 
        $commonVerbBtn.on('click',function(el){
            $(el.target).parents('.title-nav').children('.nav-item').removeClass('active');
            $(el.target).parent('.nav-item').addClass('active');

            $(el.target).parents('.title-mobile').siblings('.mobile-edit-container').addClass('hide');
            $(el.target).parents('.title-mobile').siblings('.mobile-tips').addClass('hide');
            $(el.target).parents('.title-mobile').siblings('.common-verb').removeClass('hide');
            $(el.target).parents('.title-mobile').siblings('.view-case').addClass('hide');
        });  
        $viewCaseBtn.on('click',function(el){
            $(el.target).parents('.title-nav').children('.nav-item').removeClass('active');
            $(el.target).parent('.nav-item').addClass('active');

            $(el.target).parents('.title-mobile').siblings('.mobile-edit-container').addClass('hide');
            $(el.target).parents('.title-mobile').siblings('.mobile-tips').addClass('hide');
            $(el.target).parents('.title-mobile').siblings('.common-verb').addClass('hide');
            $(el.target).parents('.title-mobile').siblings('.view-case').removeClass('hide');
        }); 
        $tipsBtn.on('click',function(el){
            $(el.target).parents('.title-nav').children('.nav-item').removeClass('active');
            $(el.target).parent('.nav-item').addClass('active');

            $(el.target).parents('.title-mobile').siblings('.mobile-edit-container').addClass('hide');
            $(el.target).parents('.title-mobile').siblings('.mobile-tips').removeClass('hide');
            $(el.target).parents('.title-mobile').siblings('.common-verb').addClass('hide');
            $(el.target).parents('.title-mobile').siblings('.view-case').addClass('hide');
        }); 

     
    }


    //执行方法
    switchEditPanel();
    preAndNext();
    tipsOpen();
    createTimePicker();
    openItem();    
    editPanelTitle();
    showConfirmModal();
    showSaveModal();

    mobilePreAndNext();
    mobileNavCtrl();
    mobileTabChange();
});