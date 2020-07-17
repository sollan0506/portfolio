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


  // ScrollMagic Call
  var controller = new ScrollMagic.Controller();

  // 장면(Scene) 설정시작
  var pb1 = $('.progress-bar1'),
       pb2 = $('.progress-bar2'),
       pb3 = $('.progress-bar3'),
       pb4 = $('.progress-bar4'),
       pb5 = $('.progress-bar5'),
       pb6 = $('.progress-bar6'),
       tl1 = new TimelineMax();

  tl1.fromTo(pb1, 1, {width: 0}, {width: "70%"}, 0.5)
    .fromTo(pb2, 1, {width: 0}, {width: "60%"}, 0.5)
    .fromTo(pb3, 1, {width: 0}, {width: "90%"}, 0.5)
    .fromTo(pb4, 1, {width: 0}, {width: "85%"}, 0.5)
    .fromTo(pb5, 1, {width: 0}, {width: "75%"}, 0.5)
    .fromTo(pb6, 1, {width: 0}, {width: "80%"}, 0.5);

  var scene2 = new ScrollMagic.Scene({
    triggerElement: '#skill',  
    triggerHook: "0.9"
  })
  .setTween(tl1)
  .addTo(controller);
  


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