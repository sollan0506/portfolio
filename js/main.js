$(function(){
  
  // 포트폴리오 버튼 선택상태 만들기
  var gMenu = $('#filters-container .cbp-filter-item');

  gMenu.click(function(){
    gMenu.removeClass('gmenu-act');
    $(this).addClass('gmenu-act');
  });

  // cubeportfolio
  $('#grid-container').cubeportfolio({
    filters: '#filters-container',      //필터들
    animationType: 'slideLeft',     //필터 적용시 애니메이션 효과
    gapHorizontal: 0,                //가로 여백
    gapVertical: 0,                    //세로 여백
    mediaQueries: [                  //창 크기에 따른 컬럼 수 변화
      {width: 1183, cols: 4}, 
      {width: 974, cols: 4}, 
      {width: 751, cols: 2}, 
      {width: 463, cols: 2}
     ] //17px씩 뺌(스크롤바 사이즈)
    // mediaQueries: [
    //   {width: 1200, cols: 4}, 
    //   {width: 991, cols: 4}, 
    //   {width: 768, cols: 2}, 
    //   {width: 480, cols: 2}
    //  ]
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
    speed: 0.2    //스크롤 시 움직이는 속도
  });


  // wow.js call
  new WOW().init();
  

  // magnificPopup Call
  $('.detail-btn').magnificPopup({
    type: 'inline',                 //기본값
    closeBtnInside: true,       //팝업창에 x버튼 생김
    closeOnBgClick: true      //배경 클릭시 팝업창 닫힘
  });


  // sticky Call
  $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();    //스크롤바 수직 위치 저장

    // 상단 고정 네비게이션 설정
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

  // 스크롤이동 설정
  // gnb 링크, 로고, 맨위로가기 버튼, View More 버튼
  var menuItem = $('#gnb li a, #navi h1 a, .top-btn, #intro .intro-inner a');

  menuItem.click(function(){
    var el = $(this).attr('href');  //ex) #about
    var elWrap = $(el);           //ex) $('#about')
    
    scrollMove(elWrap, 50);

    event.preventDefault();      //기본 동작(링크 이동)을 중단한다.
  });

  // 부드러운 이동 함수 만들기
  function scrollMove(elWrap, navHeight){
    var offset = elWrap.offset().top; //위로부터 얼만큼 떨어져 있는지
    var totalScroll = offset - navHeight;

    $('html, body').animate({scrollTop: totalScroll}, 800);
  }

  // Scrollspy Call
  $('body').scrollspy({ 
    offset: 51  //맨 위로부터 얼만큼 떨어져 있는지
  });
  
});