import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.elem = product;
  }

  addToCard(button) {
    button.addEventListener('click', function(e) {

      let productId = button.getAttribute('data-product-id');

      let event = new CustomEvent('product-add', {
        detail: productId, 
        bubbles: true
      });

      button.dispatchEvent(event);

    });
  }

  createProductHtml(product) {
    const card = document.createElement('div');
    const cardTop = document.createElement('div');
    const cardBody = document.createElement('div');

    const image = document.createElement('img');
    const price = document.createElement('span');
    const title = document.createElement('div');
    const button = document.createElement('button');
    const icon = document.createElement('img');

    card.classList.add('card');   
    cardTop.classList.add('card__top');    
    cardBody.classList.add('card__body');

    image.classList.add('card__image'); 
    price.classList.add('card__price');
    title.classList.add('card__title');
    button.classList.add('card__button');

    button.setAttribute('data-product-id', product.id);
    image.setAttribute('src', '/assets/images/products/' + product.image);
    image.setAttribute('alt', 'product');
    icon.setAttribute('src', '/assets/images/icons/plus-icon.svg');
    icon.setAttribute('alt', 'icon');

    price.innerHTML = '€' + product.price.toFixed(2);
    title.innerHTML = product.name;
    
    button.appendChild(icon);
    cardTop.appendChild(image);
    cardTop.appendChild(price);
    cardBody.appendChild(title);
    cardBody.appendChild(button);

    card.appendChild(cardTop);
    card.appendChild(cardBody);

    return card;
  }

  set elem(product) {
    const productCard = this.createProductHtml(product);
    const button = productCard.querySelector('.card__button');

    this.addToCard(button);
    this._elem = productCard;
  }

  get elem() {
    return this._elem;
  }
}
