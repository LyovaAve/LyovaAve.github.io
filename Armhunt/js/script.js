$(document).ready(function(){
    $('.sale__slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        cssEase: 'linear'
    });
    $('.slider-plenty').slick({
        dots: false,
        infinite: false,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: "<img src='img/new_product/left.svg' class='prev' alt='1'>",
        nextArrow: "<img src='img/new_product/right.svg' class='next' alt='2'>",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  });
