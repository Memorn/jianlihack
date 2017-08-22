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

    // //教育、工作、活动条目相关操作方法
    // var editItemsData = {
    //     educate: [{
    //         school: '',
    //         major: '',
    //         education: '', 
    //         graduateTime: '',
    //         GPA: '',
    //         honor: '',
    //         course: ''
    //     }],
    //     work: [{
    //         company: '',
    //         city: '',
    //         position: '',
    //         department: '',
    //         startTime: '',
    //         endTime: '',
    //         job: ''
    //     }],
    //     active: [{
    //         organization: '',
    //         city: '',
    //         position: '',
    //         department: '',
    //         startTime: '',
    //         endTime: '',
    //         job: ''
    //     }],
    //     customize: [{
    //         name: '',
    //         city: '',
    //         position: '',
    //         department: '',
    //         startTime: '',
    //         endTime: '',
    //         job: ''
    //     }]
    // };

    // var addItem = function(type){
    //     var newEducateItem = {
    //             school: '',
    //             major: '',
    //             education: '', 
    //             graduateTime: '',
    //             GPA: '',
    //             honor: '',
    //             course: ''
    //         },
    //         newWorkItem = {
    //             company: '',
    //             city: '',
    //             position: '',
    //             department: '',
    //             startTime: '',
    //             endTime: '',
    //             job: ''
    //         },
    //         newActiveItem = {
    //             organization: '',
    //             city: '',
    //             position: '',
    //             department: '',
    //             startTime: '',
    //             endTime: '',
    //             job: ''
    //         },
    //         customize = {
    //             name: '',
    //             city: '',
    //             position: '',
    //             department: '',
    //             startTime: '',
    //             endTime: '',
    //             job: ''
    //         };

    //     switch(type){
    //         case 'eduction':
    //             editItemsData.educate.push(newEducateItem);
    //             break;
    //         case 'work':
    //             editItemsData.work.push(newWorkItem);
    //             break;
    //         case 'active':
    //             editItemsData.active.push(newActiveItem);
    //             break;
    //         case 'customize':
    //             editItemsData.customize.push(newCustomizeItem);
    //             break;
    //     }
    // };
    // var delItem = function(type,index){
    //     editItemsData[type].splice(index,1);
    // };
    // var aheadItem = function(type,index){
    //     var newArr1 = [], 
    //         newArr2 = [], 
    //         curArr = editItemsData[type], 
    //         curItem = editItemsData[type][index];

    //     for(var i=0 ; i<curArr.length; i++){
    //         if( i < index-1){
    //            newArr1.push(curArr[i]);
    //         }else if(i >= index-1 && i !== index){
    //            newArr2.push(curArr[i]);
    //         }
    //     }

    //     editItemsData[type] = [].concat(newArr1,[curItem],newArr2);

    // };
    // var backItem = function(type,index){
    //     var newArr1 = [], 
    //     newArr2 = [], 
    //     curArr = editItemsData[type], 
    //     curItem = editItemsData[type][index];

    //     for(var i=0 ; i<curArr.length; i++){
    //         if( i <= index+1 && i !== index){
    //         newArr1.push(curArr[i]);
    //         }else if(i > index+1){
    //         newArr2.push(curArr[i]);
    //         }
    //     }

    //     editItemsData[type] = [].concat(newArr1,[curItem],newArr2);
    // };
    // var renderItems = function(type){
    //     var $educatePanel = $('.edit-panel').children('.educate-info').children('.info-content'),
    //         $workPanel = $('.edit-panel').children('.work-info').children('.info-content'),
    //         $activePanel = $('.edit-panel').children('.activity-info').children('.info-content'),
    //         $customizePanel = $('.edit-panel').children('.customize-info').children('.info-content');
        
    //     function renderEducatePanel(){

    //     }

    //     function renderWorkPanel(){}
        
    //     function renderActivityPanel(){}
        
    //     function renderCustomizePanel(){}

    //     switch(type){
    //         case 'eduction':
    //             renderEducatePanel();
    //             break;
    //         case 'work':
    //             renderWorkPanel();
    //             break;
    //         case 'active':
    //             renderActivityPanel();
    //             break;
    //         case 'customize':
    //             renderCustomizePanel();
    //             break;
    //     }
            
    // };

    //执行方法
    switchEditPanel();
    preAndNext();
    tipsOpen();
    createTimePicker();
    openItem();    
});