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

    // $('.box1').on('click', function(){
    //   $('.box1').addClass('box1-ext');
    // });
    //
    // $('.box1').mouseout(function(){
    //   $('.box1').removeClass('box1-ext');
    // });



// 6-7
    // $('.bg1').on('click', function(){
    //   $('.bg1').slideUp();
    // });
    //
    // $('.bg2').on('click', function(){
    //   $('.bg2').slideUp();
    // });
    //
    // $('.bg3').on('click', function(){
    //   $('.bg3').slideUp();
    // });
    //
    // $('.bg4').on('click', function(){
    //   $('.bg4').slideUp();
    // });

    // $('.box1').on('click', function(){
    //   $(this).slideUp();
    // });

    $('button').on('click', function(){
      $('ul').children().css('color', 'red');
    });
});
