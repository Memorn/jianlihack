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

  //右边panel滚动后固定位置
  var scrollFixedPanel = function(){
      var $rightPanel = $('.right-panel');
      
      $(window).scroll(function(){
          var top = $(window).scrollTop();
          var leftPosition = $rightPanel.offset().left+'px';
          if( top >= 48){
              $rightPanel.css({
                  'position':'fixed',
                  'left':leftPosition,
                  'top': '56px',
                  'z-index':'9999'
                });
          }else{
              $rightPanel.css({
                'position':'relative',
                'left': 'auto',
                'top': 'auto',
              })
          }
      });
  }

  swiperStart();
  scrollFixedPanel();
});