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
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 6,
    spaceBetween: 30,
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
