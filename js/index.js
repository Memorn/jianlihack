$(function(){

  //简历对比翻转
  var filpOver = function(){

  };





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
});