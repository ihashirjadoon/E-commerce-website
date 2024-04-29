// $(document).ready(function(){
//     $('#signup-show').click(function(){
//         $('#signup-form').fadeIn(1500);
//         $('#login-form').hide();
//     })

//     $('#login-show').click(function(){
//         $('#login-form').fadeIn(1500);
//         $('#signup-form').hide();
//     })
// })

// function loginmsg(){
//     alert('You are logged in...');
// }
// function signupmsg(){
//     alert('Your account has been created');
// }

// brand
$(document).ready(function () {
  var slideCount = $('.slider').children().length;
  var slideWidth = $('.brand-slider-container').width() / 4;
  var slideIndex = 0;

  $('.slider').css('width', slideCount * slideWidth);

  $('.next').click(function () {
    if (slideIndex < slideCount - 5) {
      slideIndex++;
      $('.slider').css('transform', 'translateX(-' + slideIndex * slideWidth + 'px)');
    }
  });

  $('.prev').click(function () {
    if (slideIndex > 0) {
      slideIndex--;
      $('.slider').css('transform', 'translateX(-' + slideIndex * slideWidth + 'px)');
    }
  });
});

// brand  

// touch slider

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
