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
  /* --- datapicker --- */
  $(function () {
    if ($('.input-daterange').length) {
      $.fn.datepicker.dates['es'] = {
        months: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre',
        ],
        monthsShort: [
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul',
          'Ago',
          'Sep',
          'Oct',
          'Nov',
          'Dic',
        ],
        days: [
          'Domingo',
          'Lunes',
          'Martes',
          'Mi??rcoles',
          'Jueves',
          'Viernes',
          'S??bado',
        ],
        daysShort: ['Dom', 'Lun', 'Mar', 'Mi??', 'Juv', 'Vie', 'S??b'],
        daysMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S??'],
        today: 'Hoy',
        clear: 'Limpiar',
        format: 'dd/mm/yyyy',
        weekStart: 1,
        titleFormat: 'M yyyy',
      };
      $('#filter-orders-dp .input-daterange').datepicker({
        todayBtn: true,
        todayHighlight: true,
        language: 'es',
        maxViewMode: 2,
        templates: {
          leftArrow: '<div class="calendar-chev calendar-chev-left"></div>',
          rightArrow: '<div class="calendar-chev calendar-chev-right"></div>',
        },
      });

      $(".group input[name='start']")
        .focusin(function () {
          $(this).parent().addClass('selected');
        })
        .focusout(function () {
          if ($(this).val() === '') {
            $(this).parent().removeClass('selected');
          }
        });
      $(".group input[name='end']")
        .focusin(function () {
          $(this).parent().addClass('selected');
        })
        .focusout(function () {
          if ($(this).val() === '') {
            $(this).parent().removeClass('selected');
          }
        });

      $('.group input').on('change', function () {
        $(this).parent().addClass('selected');
      });
    }
  });
  /* ---end datapicker --- */
  /* --- select --- */
  $('.custom-select select').change(function () {
    if ($(this).val() !== '') {
      $(this).parent().addClass('changed');
    } else {
      $(this).parent().removeClass('changed');
    }
  });
  $('.custom-select select')
    .focusin(function () {
      $(this).parent().removeClass('active  ');
    })
    .focusout(function () {
      if ($(this).val() !== '') {
        $(this).parent().addClass('active');
      } else {
        $(this).parent().removeClass('active');
      }
    });
  /* --- end select --- */
  /* --- select product gallery --- */
  $('.product-thumbnails img').on('click', function () {
    const image = $(this).attr('src');
    if (image) {
      $('.product-image img').attr('src', image);
    }
  });
  /* --- end select product gallery --- */
  /* select image on modal */
  $('.modal-thumbnail img').on('click', function () {
    const image = $(this).attr('src');
    if (image) {
      $('.modal-product-image img').attr('src', image);
    }
  });
  /* end select image on modal */
});
