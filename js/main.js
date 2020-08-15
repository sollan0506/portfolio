$(function(){
  
  // gmenu JS
  var gMenu = $('#filters-container .cbp-filter-item');

  gMenu.click(function(){
    gMenu.removeClass('gmenu-act');
    $(this).addClass('gmenu-act');

    event.preventDefault();
  });

  // cubeportfolio
  $('#grid-container').cubeportfolio({
    filters: '#filters-container',
    animationType: 'slideLeft',
    gapHorizontal: 0,
    gapVertical: 0,
    mediaQueries: [
      {width: 1200, cols: 4}, 
      {width: 991, cols: 4}, 
      {width: 768, cols: 2}, 
      {width: 480, cols: 2}
     ] 
  });

  // 검정 반투명 hover 
  $('.cbp-item').hover(
    function(){
      $(this).find('.img-hover-box').css('z-index', 0);
    },
    function(){
      $(this).find('.img-hover-box').css('z-index', -1);
    }
  );

  // 검정 반투명 위 원형 버튼
  $('.link-btn, .detail-btn').hover(
    function(){
      $(this).css('background-color', '#fff');
      $(this).children('i').css('color', '#000');
    },
    function(){
      $(this).css('background-color', 'rgba(0,0,0,0)');
      $(this).children('i').css('color', '#fff');
  });
  


  // jarallax Call
  $('.jarallax').jarallax({
    speed: 0.2
    // videoPlayOnlyVisible: false,
    // videoLazyLoading: false
  });


  // wow.js call
  new WOW().init();
  

  // magnificPopup Call
  $('.detail-btn').magnificPopup({
    type: 'inline',
    closeBtnInside: true,
    closeOnBgClick: true,
    // gallery: {
    //   enabled: true
    // }
  });


  // sticky Call
  $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();

    // 상단 네비게이션 설정
    if(scrollPos>20){
      $('#navi').addClass('fixed');
    }else {
      $('#navi').removeClass('fixed');
    }

    // top-btn 보이기/숨기기
    if(scrollPos>300){
      $('.top-btn').css('display', 'block');
    }else {
      $('.top-btn').css('display', 'none');
    }

  });

  // 상단 네비게이션 스크롤이동 설정
  var menuItem = $('#gnb li a, #navi h1 a, .top-btn, #intro .intro-inner a');

  menuItem.click(function(){
    var el = $(this).attr('href');  //ex) #about
    var elWrap = $(el);           //ex) $('#about')
    
    scrollMove(elWrap, 50);
  });

  // 부드러운 이동 함수 만들기
  function scrollMove(elWrap, navHeight){
    var offset = elWrap.offset().top; //위로부터 얼만큼 떨어져 있는지
    var totalScroll = offset - navHeight;

    $('html, body').animate({scrollTop: totalScroll}, 800);
  }

  // Scrollspy Call
  $('body').scrollspy({ 
    offset: 51  
  });
  
});