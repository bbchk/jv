import html from './index.html?raw';
import css from './index.scss?inline';

import { ROUTE_CHANGED_EVENT } from '/config/constants';
import routes from '/services/router/routes';

window.on(ROUTE_CHANGED_EVENT, (ev) => {
  if (ev.detail.contentPath === routes['/']) {
    const gallery = $('#homeGalleryContent--first');
    if (gallery) {
      let galleryContent = '';

      // TODO: sort by real label `favorite choice` from db in the future
      let idx = 0;

      console.log(ev.detail.data);

      // "id": "pf001",
      // "imageUrl": "/public/goods_placeholder.svg",
      // "name": "Royal Canine Adult 10kg",
      // "count": 20,
      // "weight": "10kg",
      // "price_discount": 45.99,
      // "price_orig": 55.00,
      // "type": "Dry Food",
      // "animal": "Dog"

      for (const { name, image_url, price_orig, price_discount } of ev.detail
        .data) {
        // TODO: sort by real label `favorite choice` from db in the future
        if (idx > 7) {
          break;
        }
        //
        //
        // <img class='gallery__cardImage' src="/goods_placeholder.svg" alt="${name}"/>
        galleryContent += `
    <div class='gallery__card'>
      <img class='gallery__cardImage' src="${image_url}" alt="${name}"/>
      <h3 class="gallery__cardName">${name}</h3>
      <div class="gallery__cardPrices">
        <del>${price_orig}<span>₴</span></del>
        <ins>${price_discount}<span>₴<span></ins>
      </div>
      <p class="rating--galleryCard">
       <span class="rating__stars"> ⭐⭐⭐⭐⭐</span>
       <span class="rating__reviewCount">0</span>
       <span class="rating__reviewIcon">💬</span>
      </p>
      <div class="gallery__cardBuyBtn emoji--mono">
        <button>
          🛒
        </button>
      </div>
    </div>
        `;

        // TODO: sort by real label `favorite choice` from db in the future
        ++idx;
      }
      gallery.innerHTML = galleryContent;
    }
  }
});

export { html, css };
