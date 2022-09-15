$(document).ready(function () {
  //inputs
  $('.custom-input-group input')
    .focusin(function () {
      $(this).parent().parent().addClass('selected');
    })
    .focusout(function () {
      if ($(this).val() === '') {
        $(this).parent().parent().removeClass('selected');
      }
    });
  $('.custom-input-group button').on('click', () => {
    const currentInput = $('.selected .custom-input-group input');
    const typeInput = currentInput.prop('type');
    typeInput === 'password'
      ? currentInput.prop('type', 'text')
      : currentInput.prop('type', 'password');
  });
  $('.content-input-group.verified').addClass('selected');
  /* --- new carousel --- */
  var swiper = new Swiper('.carouselTypeOne', {
    slidesPerView: 6,
    spaceBetween: 20,
    rewind: true,
    navigation: {
      nextEl: '.carousel-next',
      prevEl: '.carousel-prev',
    },
    autoplay: {
      delay: 5000,
    },
  });
  var swiper_two = new Swiper('.carouselTypeTwo', {
    slidesPerView: 3,
    spaceBetween: 20,
    rewind: true,
    navigation: {
      nextEl: '.carousel-next',
      prevEl: '.carousel-prev',
    },
    autoplay: {
      delay: 5000,
    },
  });
  var swiper_three = new Swiper('.carouselTypeThree', {
    slidesPerView: 4,
    spaceBetween: 20,
    rewind: true,
    navigation: {
      nextEl: '.carousel-next',
      prevEl: '.carousel-prev',
    },
    autoplay: {
      delay: 5000,
    },
  });
  var swiper_three = new Swiper('.carouselTypeFour', {
    slidesPerView: 4,
    spaceBetween: 20,
    rewind: true,
    navigation: {
      nextEl: '.carousel-next',
      prevEl: '.carousel-prev',
    },
    autoplay: {
      delay: 5000,
    },
  });
  /**/
});
