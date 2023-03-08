 //네비게이션 셋팅
$(function(){
$('.gnb>li').hover(function(){
  $('ul.lnb').stop().slideToggle();
});

 //슬라이드
setInterval(slideImg, 2500);

}); //jquery

function slideImg(){
  $('.slidein').animate(
  {'left':'-1200px'},
  500,function(){
    $('.slidein .imgbox:eq(0)').clone().appendTo('.slidein');
    $('.slidein .imgbox:eq(0)').remove();
    $('.slidein ').css('left', 0);
  }
  );
};