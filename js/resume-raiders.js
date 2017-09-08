$(function(){
  //轮播器启动 
  var swiperStart = function(){
    //用户反馈
    var feedbackSwiper = function(){
        var mySwiper = new Swiper ('#swiper-container', {
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

  //右边panel滚动后固定位置（根据窗口大小）
  var scrollFixedPanel = function(){
      var availHeight = $(window).height()-56-316;

      var $rightPanel = $('.right-panel'),
          $rightFixed1 = $('.right-fixed-1'),
          $rightFixed2 = $('.right-fixed-2'),
          $rightFixed3 = $('.right-fixed-3'),
          $rightFixed4 = $('.right-fixed-4');

      function scrollCallBack(panelPart){
        return function(){
            var top = $(window).scrollTop();
            var leftPosition = $rightPanel.offset().left+'px';
            switch(panelPart){
                case 1 :
                    if( top >= 48){
                        $rightFixed1.css({
                            'position':'fixed',
                            'left':leftPosition,
                            'top': '56px',
                            'z-index':'9999'
                        });
                    }else{
                        $rightFixed1.css({
                        'position':'relative',
                        'left': 'auto',
                        'top': 'auto',
                        })
                    };
                    break;
                case 2 :
                    if( top >= 90){
                        $rightFixed2.css({
                            'position':'fixed',
                            'left':leftPosition,
                            'top': '56px',
                            'z-index':'9999'
                        });
                    }else{
                        $rightFixed2.css({
                        'position':'relative',
                        'left': 'auto',
                        'top': 'auto',
                        })
                    };
                    break;
                case 3 :
                    if( top >= 641){
                        $rightFixed3.css({
                            'position':'fixed',
                            'left':leftPosition,
                            'top': '56px',
                            'z-index':'9999'
                        });
                    }else{
                        $rightFixed3.css({
                        'position':'relative',
                        'left': 'auto',
                        'top': 'auto',
                        })
                    };
                    break;
                case 4 :
                    if( top >= 956){
                        $rightFixed4.css({
                            'position':'fixed',
                            'left':leftPosition,
                            'top': '56px',
                            'z-index':'9999'
                        });
                    }else{
                        $rightFixed4.css({
                        'position':'relative',
                        'left': 'auto',
                        'top': 'auto',
                        })
                    };
                    break;
            }
        }
      };

      if(availHeight >= 1325){
        $(window).scroll(scrollCallBack(1));
      }else if(availHeight < 1325 && availHeight >= 1283){
        $(window).scroll(scrollCallBack(2));
      }else if(availHeight < 1283 && availHeight >= 732){
        $(window).scroll(scrollCallBack(3));
      }else if(availHeight < 732 && availHeight >= 417){
        $(window).scroll(scrollCallBack(4));
      }else if(availHeight < 417){

      }

  }

  swiperStart();
  scrollFixedPanel();
});