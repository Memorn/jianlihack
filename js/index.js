$(function(){

  //简历对比翻转
  var filpOver = function(){

  };


  //header移动后变换样式
  var headerTrans = function(){
      var $header = $('#header');
      var $body = $('body');
      setInterval(function(){
        var windowTop = $body[0].scrollTop;
        var $imgFir = $('#header').find('.logo-fir'); 
        var $imgSec = $('#header').find('.logo-sec'); 
        if(windowTop > 0){
            $header.addClass('header-move');
            $imgFir.addClass('hide');
            $imgSec.removeClass('hide');
        }else{
            $header.removeClass('header-move');
            $imgSec.addClass('hide');
            $imgFir.removeClass('hide');
        }
      },100);
  };

  //header hover 效果
  var headerNavHover = function(){
      $navItem = $('#header').children('.nav').find('li');
      console.log($navItem);
      $navItem.bind('mouseover',function(){
        $(this).children('.nav-border-bottom').removeClass('hide');
      });

      $navItem.bind('mouseout',function(){
        $(this).children('.nav-border-bottom').addClass('hide');
      });
  };

  //简历对比拖动动画
  var fliperResume = function(){
    var mouseDownX,mouseDownY,initX,initY,flag,deg = false;    

    var $draggable = $('#btn').draggabilly({
        axis: 'x',
        containment: '.track'
    });

    $draggable.on( 'dragStart', function( event, pointer ) {
        mouseDownX = pointer.pageX; 
        flag = true;
        deg = Math.ceil($("#view-container").attr('style').split('(')[1].split(')')[0].slice(0,-3));
    })
    $draggable.on( 'dragMove', function( event, pointer ) {
        if(flag) {  
            var mouseMoveX = pointer.pageX; 
            var j = 180 * ((mouseMoveX-mouseDownX)/326) + deg;
            
            if(j>=0 && j<=180){
                $("#view-container").attr("style","transform: rotateY("+j+"deg)");

                // $("#view-container").rotate(j);
            }
        }  

    })
    $draggable.on( 'dragEnd', function( event, pointer ) {
        flag = false; 
    })    
  };

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



  //轮播器启动
  var swiperStart = function(){
    //用户反馈
    var feedbackSwiper = function(){
        var mySwiper = new Swiper ('#feedback-swiper', {
            direction: 'horizontal',
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
        });

        $('#swiper-btn-left').click(function(){
            mySwiper.slidePrev(); 
        })        
        $('#swiper-btn-right').click(function(){
            mySwiper.slideNext(); 
        })        
    }
    feedbackSwiper();
  }  

  swiperStart();
  filpOver();
  headerTrans();
  headerNavHover();
  fliperResume();
  resumeTplHover();
});