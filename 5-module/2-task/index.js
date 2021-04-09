function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let txt = document.querySelector('#text');
  
  btn.addEventListener('click', function(event) {
    if (txt.hasAttribute('hidden')) {
      txt.removeAttribute('hidden');
    } else {
      txt.setAttribute('hidden', '');
    }
  });

}