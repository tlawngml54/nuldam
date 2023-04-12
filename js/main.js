$(document).ready(function(){

    //nav

    $('nav').hover(function(){
        $('.depth').stop().slideDown();
    },function(){
        $('.depth').stop().slideUp();
    });


    //메인 슬라이드

    $('#main_banner').slick({
        infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay:true,
         dots: true,

    });

    //하단 사이트 슬라이드        
    $('#bottom_slide').slick({
        infinite: true,
         slidesToShow: 5,
         slidesToScroll: 1,
         autoplay:true,
    });

    });