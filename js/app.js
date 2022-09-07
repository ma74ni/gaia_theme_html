$(document).ready(function () {
  const itemsProducts = document.querySelectorAll(
    '#carouselProducts.carousel .carousel-item'
  );
  const itemsLifeStyle = document.querySelectorAll(
    '#carouselLifeStyle.carousel .carousel-item'
  );
  const itemsOtherCategory = document.querySelectorAll(
    '#carouselOtherCategory.carousel .carousel-item'
  );
  const itemsAllCampaigns = document.querySelectorAll(
    '#carouselAllCampaigns.carousel .carousel-item'
  );
  duplicateItems(itemsProducts, 6);
  duplicateItems(itemsOtherCategory, 4);
  duplicateItems(itemsLifeStyle, 3);
  duplicateItems(itemsAllCampaigns, 4);

  function duplicateItems(listItems, perSlide) {
    listItems.forEach((el) => {
      let next = el.nextElementSibling;
      for (let i = 1; i < perSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = listItems[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  }
  function showNavbar(toggleId, navId, coverId) {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      cover = document.getElementById(coverId);

    // Validate that all variables exist
    if (toggle && nav) {
      $(toggle).on('click', () => {
        // show navbar
        nav.classList.toggle('show');
        cover.classList.toggle('active');
      });
    }
  }
  function closeNavbar(navId, coverId, btnId) {
    const nav = document.getElementById(navId),
      cover = document.getElementById(coverId);
    if ((navId, coverId, btnId)) {
      $(btnId).on('click', () => {
        nav.classList.toggle('show');
        cover.classList.toggle('active');
      });
    }
  }
  showNavbar('header-toggle', 'nav-bar', 'cover');
  closeNavbar('nav-bar', 'cover', '#navbarClose');
  closeNavbar('nav-bar', 'cover', '#cover');

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
});
