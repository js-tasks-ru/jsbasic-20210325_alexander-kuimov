import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
  }

  addToCard(html) {
    html.addEventListener('click', function(e) {
      let target = e.target;

      if (target.tagName == 'BUTTON') {
        let button = target;       
        let productId = button.getAttribute('data-product-id');

        let event = new CustomEvent('product-add', {
          detail: productId, 
          bubbles: true
        });

        button.dispatchEvent(event);
      }
    });
  }

  initCarousel(carousel) {
    const slide = carousel.querySelectorAll('.carousel__slide');
    const wrapper = carousel.querySelector('.carousel__inner');
    const prevBtn = carousel.querySelector('.carousel__arrow_left');
    const nextBtn = carousel.querySelector('.carousel__arrow_right');
    
    let step = 500;
    let counter = 1;
    let shift = 0;

    prevBtn.style.display = 'none';

    prevBtn.addEventListener('click', function(event) {
      counter--;
      shift += step;

      wrapper.style.transform = 'translateX(' + shift + 'px)';
      
      nextBtn.style.display = 'flex';

      if (counter === 1) {
        prevBtn.style.display = 'none';
      }

    });

    nextBtn.addEventListener('click', function(event) {
      counter++;
      shift -= step;
      wrapper.style.transform = 'translateX(' + shift + 'px)';

      prevBtn.style.display = 'flex';

      if (slide.length === counter) {
        nextBtn.style.display = 'none';
      }

    });
  }

  getWrapHtml(slides) {
    const wrapper = document.createElement('div');
    const arrowRight = document.createElement('div');
    const arrowLeft = document.createElement('div');
    const iconRight = document.createElement('img');
    const iconLeft = document.createElement('img');

    wrapper.classList.add('carousel'); 
    arrowRight.classList.add('carousel__arrow', 'carousel__arrow_right'); 
    arrowLeft.classList.add('carousel__arrow', 'carousel__arrow_left'); 
    
    iconRight.setAttribute('src', '/assets/images/icons/angle-icon.svg');
    iconLeft.setAttribute('src', '/assets/images/icons/angle-left-icon.svg');

    iconRight.setAttribute('alt', 'icon');
    iconLeft.setAttribute('alt', 'icon');

    arrowRight.appendChild(iconRight);
    arrowLeft.appendChild(iconLeft);

    wrapper.appendChild(arrowRight);
    wrapper.appendChild(arrowLeft);   
    wrapper.appendChild(slides);

    return wrapper;
  }

  getSlidersHtml(slides) {
    const inner = document.createElement('div');
    inner.classList.add('carousel__inner');

    for (const key in slides) {
      const slide = document.createElement('div');
      const image = document.createElement('img');
      const caption = document.createElement('div');
      const price = document.createElement('span');
      const title = document.createElement('div');
      const button = document.createElement('button');
      const icon = document.createElement('img');

      slide.classList.add('carousel__slide');
      image.classList.add('carousel__img');
      caption.classList.add('carousel__caption');
      price.classList.add('carousel__price');
      title.classList.add('carousel__title');
      button.classList.add('carousel__button');

      slide.setAttribute('data-id', slides[key].id);
      button.setAttribute('data-product-id', slides[key].id);

      image.setAttribute('alt', 'slide');
      icon.setAttribute('alt', 'icon');
      image.setAttribute('src', '/assets/images/carousel/' + slides[key].image);
      icon.setAttribute('src', '/assets/images/icons/plus-icon.svg');

      price.innerHTML = '€' + slides[key].price.toFixed(2);
      title.innerHTML = slides[key].name;

      slide.appendChild(image);
      button.appendChild(icon);
      caption.appendChild(price);
      caption.appendChild(title);
      caption.appendChild(button);
      slide.appendChild(caption);

      inner.appendChild(slide);
    }

    return inner;
  }

  set slides(slides) {
    const slidesHtml = this.getSlidersHtml(slides);
    const wrapperHtml = this.getWrapHtml(slidesHtml);

    this.initCarousel(wrapperHtml);
    this.addToCard(wrapperHtml);

    this._elem = wrapperHtml;
  }

  get elem() {
    return this._elem;
  }

}
