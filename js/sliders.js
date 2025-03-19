$(document).ready(function () {
  function toggleDots(slider) {
    const slideCount = $(slider).find('.slick-slide').length;
    const slidesToShow = $(slider).slick('getSlick').options.slidesToShow;
    
    // Hide dots if the number of slides is less than or equal to slidesToShow
    if (slideCount <= slidesToShow) {
      $(slider).find('.slick-dots').css('display', 'none');
    } else {
      $(slider).find('.slick-dots').css('display', 'flex');
    }
  }

  // Initialize the sliders
  $('#slider_project').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#slider_product').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#slider_blog').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Call the toggleDots function on initialization and after each position change
  $('#slider_project, #slider_product, #slider_blog').on('init setPosition', function() {
    toggleDots(this); // 'this' refers to the current slider
  });

  // Call toggleDots function when window is resized
  $(window).on('resize', function() {
    $('#slider_project, #slider_product, #slider_blog').each(function() {
      toggleDots(this); // Recheck the dots visibility for each slider
    });
  });
});
