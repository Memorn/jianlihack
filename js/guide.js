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
        var $preBtn = $('.info-footer-pre').children('a'),
            $nextBtn = $('.info-footer-next').children('a'),
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
                $this.parent().parent().parent().next().removeClass('hide');
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

   

    //添加条目方法

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



    //执行方法
    switchEditPanel();
    preAndNext();
    tipsOpen();
    createTimePicker();
    openItem();
});