$(function(){

// 6-5
    // $('.box1').slideDown(function(){
    //   $('.box1').css({
    //     'background-color': '#0000ff',
    //     'width': '200px',
    //     'height' : '100px'
    //   }).slideUp();
    // });

// 6-6
    // $('.box1').mouseover(function(){
    //   $('.box1').addClass('box1-ext');
    // });

    $('.box1').on('click', function(){
      $('.box1').addClass('box1-ext');
    });

    $('.box1').mouseout(function(){
      $('.box1').removeClass('box1-ext');
    });
});
