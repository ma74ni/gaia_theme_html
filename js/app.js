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
});
