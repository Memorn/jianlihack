$(function(){

  //简历对比翻转
  var filpOver = function(){

  };


  //header移动后变换样式
  var headerTrans = function(){
      var $header = $('#header');
      var $body = $('body');

      function scrollCallBack(){
        var windowTop = $(window).scrollTop();
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
      }

      $(window).scroll(scrollCallBack);
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

    var $draggable = $('#slider-btn').draggabilly({
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
            // var sliderWidth =  navigator.userAgent.indexOf('Safari') > -1 ? 324 : 425;
            var sliderWidth =  parseInt($('.pic1').css('width'));
            
            var j = 180 * ((mouseMoveX-mouseDownX)/sliderWidth) + deg;
            
            if(j>=0 && j<=180){
                $("#view-container").attr("style","transform: rotateY("+j+"deg)");                
            }
            if(j <= 10){
                $('#slider-btn').removeClass('btn-left');
            }
            if(j >= 170){
                $('#slider-btn').addClass('btn-left');
            }
        }  

    })
    $draggable.on( 'dragEnd', function( event, pointer ) {
        flag = false; 
    })    
  };

  //PC端简历模板hover效果
  var resumeTplHoverPC = function(){
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
  //移动端简历模板hover效果
  var resumeTplHoverMobile = function(){
    $tpls = $('#resume-tpl').find('li');
    $tpls.bind('click',function(){
        var $curTpl = $(this);
        $curTpl.children('.tpl-choose-lan').removeClass('hide');
        $('.mask').removeClass('hide');
        $('.resume-tpl-with-mask').on('click', function(e){
            if($(e.target).hasClass('mask')){
                $curTpl.children('.tpl-choose-lan').addClass('hide');
                $('.mask').addClass('hide');
            }
        });

        
    });
   
  }


  //轮播器启动
  var swiperStart = function(){
    //用户反馈
    var feedbackSwiper = function(){
        var mySwiper = new Swiper ('#feedback-swiper', {
            direction: 'horizontal',
            loop: true,
            autoplay: 10000,
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

  //判断浏览器类型添加类名以处理兼容性问题
  var compatibleFun = function(){
    // debugger
    function myBrowser(){
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1;
        if (isOpera) {
            return "Opera"
        }; //判断是否Opera浏览器
        if (userAgent.indexOf("Firefox") > -1) {
            return "FF";
        } //判断是否Firefox浏览器
        if (userAgent.indexOf("Chrome") > -1){
      return "Chrome";
     }
        if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
        } //判断是否Safari浏览器
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
            return "IE";
        }; //判断是否IE浏览器
    }

    var curBrowser = myBrowser();
    if(curBrowser == 'Safari'){
        $('body').addClass('well-safari');
    }
    
  };

  //判断是否是移动端浏览器

  var isMobile = function(){
      if(navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)){
        resumeTplHoverMobile();
      }else{
        resumeTplHoverPC();
      }
  };

  compatibleFun();
  isMobile();

  swiperStart();
  filpOver();
  headerTrans();
  headerNavHover();
  fliperResume();
});