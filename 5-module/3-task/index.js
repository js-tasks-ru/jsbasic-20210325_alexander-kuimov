function initCarousel() {
  let slides = document.querySelectorAll('.carousel__slide');
  
  let wrapper = document.querySelector('.carousel__inner');
  let prevBtn = document.querySelector('.carousel__arrow_left');
  let nextBtn = document.querySelector('.carousel__arrow_right');

  let step = wrapper.offsetWidth;
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

    if (slides.length === counter) {
      nextBtn.style.display = 'none';
    }

  });

}
