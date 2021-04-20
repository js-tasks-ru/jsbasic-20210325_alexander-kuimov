import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
  }

  setListeners(html) {
    const inner = html.querySelector('.ribbon__inner');
    const btnLeft = html.querySelector('.ribbon__arrow_left');
    const btnRight = html.querySelector('.ribbon__arrow_right'); 
    
    const step = 350;

    btnRight.classList.add('ribbon__arrow_visible');

    html.addEventListener('click', function(e) {    
      const target = e.target;      

      if (target.tagName === 'BUTTON' || target.tagName === 'IMG') {
        if (target.classList.contains('ribbon__arrow_left') || target.parentNode.classList.contains('ribbon__arrow_left')) {
          let scrollLeft = inner.scrollLeft;
          inner.scrollBy(-step, 0);
          
          btnRight.classList.add('ribbon__arrow_visible');
    
          if (scrollLeft <= step) {
            btnLeft.classList.remove('ribbon__arrow_visible');
          }
        }

        if (target.classList.contains('ribbon__arrow_right') || target.parentNode.classList.contains('ribbon__arrow_right')) {
          let scrollWidth = inner.scrollWidth;
          let scrollLeft = inner.scrollLeft;
          let clientWidth = inner.clientWidth;

          let scrollRight = scrollWidth - scrollLeft - clientWidth;

          btnLeft.classList.add('ribbon__arrow_visible');
          inner.scrollBy(step, 0);

          if (scrollRight <= step) {
            btnRight.classList.remove('ribbon__arrow_visible');
          }
        }
      }

      if (target.tagName === 'A') {
        const item = target;
        const categoryId = item.getAttribute('data-id');

        const event = new CustomEvent('ribbon-select', { 
          detail: categoryId, 
          bubbles: true
        });

        item.dispatchEvent(event);
      }

    });

  }

  getWrapper(categories) {
    const wrap = document.createElement('div');
    const btnLeft = document.createElement('button');
    const btnRight = document.createElement('button');
    const iconLeft = document.createElement('img');
    const iconRight = document.createElement('img');
    const inner = this.getNavItems(categories); 

    wrap.classList.add('ribbon');
    btnLeft.classList.add('ribbon__arrow', 'ribbon__arrow_left');
    btnRight.classList.add('ribbon__arrow', 'ribbon__arrow_right');

    iconLeft.setAttribute('alt', 'icon');
    iconRight.setAttribute('alt', 'icon');

    iconLeft.setAttribute('src', '/assets/images/icons/angle-icon.svg');
    iconRight.setAttribute('src', '/assets/images/icons/angle-icon.svg');

    btnLeft.appendChild(iconLeft);
    btnRight.appendChild(iconRight);

    wrap.appendChild(btnLeft);
    wrap.appendChild(inner);
    wrap.appendChild(btnRight);

    return wrap;
  }

  getNavItems(categories) {
    const nav = document.createElement('nav');
    nav.classList.add('ribbon__inner');

    for (const key in categories) {
      const item = document.createElement('a');
      item.classList.add('ribbon__item');
      item.setAttribute('data-id', categories[key]['id']);
      item.innerHTML = categories[key]['name'];
      nav.appendChild(item);
    }

    return nav;
  }

  set categories(categories) {
    const html = this.getWrapper(categories);
    this.setListeners(html);
    return this._elem = html;
  }

  get elem() {
    return this._elem;
  }
}
