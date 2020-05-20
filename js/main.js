$(function () {
  $('.slider__wrapper').slick({
    arrow: true,
    asNavFor: '.slider__nav',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/arrow-prev.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/arrow-next.png" alt=""></button>',
  });
  
  $('.slider__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slider__wrapper',
    focusOnSelect: true,
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu > ul').slideToggle();
});
});