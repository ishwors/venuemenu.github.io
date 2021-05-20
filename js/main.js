$(document).ready(function(){
   
    $('#collapes-btn i').click(function(){
        $('.header-nav').toggle('fast');
    });

    $('.drop-link').mouseenter(function(e){
        let count = $(this).find('.sub-item').length;
        let delay = 0;
       for(let i=1; i<=count; i++){
            console.log('count');
            let sec = 0.2;
            $(this).find('.sub-item:nth-child('+i+')').css({
                'animation': 'open '+sec+'s ease-in-out '+delay+'s'+' forwards',
                
            });
            delay = delay + 0.1;
       }
    });
   
});

// Slider Stack Overflow
console.clear();

var slides = $('input[name="slider"]'),
    amount = slides.length,
    number = null,
    currentSlide = null;
console.log(slides);

$(function() {
  setInterval(function () {
    currentSlide = $('input[name="slider"]:checked');
    number = parseInt($(currentSlide).attr('title').slice(5,6));

    console.log('---Current slide');
    console.log(number); //current slide number

    console.log('---Slides array');
    console.log(slides);

    if (number < (amount - 1)) {
      $(slides[number+1]).prop('checked', true);
      console.log('%c---Slide changed to next', 'color: green;');
    } else {
      $(slides[0]).prop('checked', true);
      console.log('%c---Slide changed to 0', 'color: red;');
    }
  }, 3000);
});


$(document).ready(function(){
  $('.slider').slick({
      centerMode: true,
      centerPadding: '60px',
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true
  });
});
